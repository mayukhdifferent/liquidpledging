'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var LiquidPledgingAbi = require('../build/LiquidPledging.sol').LiquidPledgingAbi;
var LiquidPledgingCode = require('../build/LiquidPledging.sol').LiquidPledgingByteCode;
var LiquidPledgingMockAbi = require('../build/LiquidPledgingMock.sol').LiquidPledgingMockAbi;
var LiquidPledgingMockCode = require('../build/LiquidPledgingMock.sol').LiquidPledgingMockByteCode;
var generateClass = require('eth-contract-class').default;

module.exports = function (test) {
  var $abi = test ? LiquidPledgingMockAbi : LiquidPledgingAbi;
  var $byteCode = test ? LiquidPledgingMockCode : LiquidPledgingCode;

  var LiquidPledging = generateClass($abi, $byteCode);

  LiquidPledging.prototype.$getPledge = function (idPledge) {
    var _this = this;

    var pledge = {
      delegates: []
    };

    return this.getPledge(idPledge).then(function (res) {
      pledge.amount = res.amount;
      pledge.owner = res.owner;

      if (res.intendedProject) {
        pledge.intendedProject = res.intendedProject;
        pledge.commmitTime = res.commitTime;
      }
      if (res.oldPledge) {
        pledge.oldPledge = res.oldPledge;
      }
      if (res.paymentState === '0') {
        pledge.paymentState = 'Pledged';
      } else if (res.paymentState === '1') {
        pledge.paymentState = 'Paying';
      } else if (res.paymentState === '2') {
        pledge.paymentState = 'Paid';
      } else {
        pledge.paymentState = 'Unknown';
      }

      var promises = [];
      for (var i = 1; i <= res.nDelegates; i += 1) {
        promises.push(_this.getPledgeDelegate(idPledge, i).then(function (r) {
          return {
            id: r.idDelegate,
            addr: r.addr,
            name: r.name,
            url: r.url
          };
        }));
      }

      return Promise.all(promises);
    }).then(function (delegates) {
      pledge.delegates = delegates;
      return pledge;
    });
  };

  LiquidPledging.prototype.$getAdmin = function (idAdmin) {
    var admin = {};
    return this.getPledgeAdmin(idAdmin).then(function (res) {
      if (res.adminType === '0') {
        admin.type = 'Giver';
      } else if (res.adminType === '1') {
        admin.type = 'Delegate';
      } else if (res.adminType === '2') {
        admin.type = 'Project';
      } else {
        admin.type = 'Unknown';
      }
      admin.addr = res.addr;
      admin.name = res.name;
      admin.url = res.url;
      admin.commitTime = res.commitTime;
      if (admin.paymentState === 'Project') {
        admin.parentProject = res.parentProject;
        admin.canceled = res.canceled;
      }
      admin.plugin = res.plugin;
      admin.canceled = res.canceled;
      return admin;
    });
  };

  LiquidPledging.prototype.getState = function () {
    var _this2 = this;

    var getPledges = function getPledges() {
      return _this2.numberOfPledges().then(function (nPledges) {
        var promises = [];
        for (var i = 1; i <= nPledges; i += 1) {
          promises.push(_this2.$getPledge(i));
        }
        return Promise.all(promises);
      });
    };

    var getAdmins = function getAdmins() {
      return _this2.numberOfPledgeAdmins().then(function (nAdmins) {
        var promises = [];
        for (var i = 1; i <= nAdmins; i += 1) {
          promises.push(_this2.$getAdmin(i));
        }

        return Promise.all(promises);
      });
    };

    return Promise.all([getPledges(), getAdmins()]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          pledges = _ref2[0],
          admins = _ref2[1];

      return {
        pledges: [null].concat(_toConsumableArray(pledges)),
        admins: [null].concat(_toConsumableArray(admins))
      };
    });
  };

  LiquidPledging.prototype.generateGiversState = function () {
    var _this3 = this;

    var giversState = [];

    var getGiver = function getGiver(idPledge) {
      var pledge = _this3.pledges[idPledge];
      while (pledge.oldNode) {
        pledge = _this3.pledges[idPledge];
      }return pledge.owner;
    };

    // Add a giver structure to the list
    var addGiver = function addGiver(_list, idGiver) {
      var list = _list;
      if (!list[idGiver]) {
        list[idGiver] = {
          idGiver: idGiver,
          notAssigned: {
            pledges: [],
            delegates: []
          },
          precommitedProjects: [],
          commitedProjects: []
        };
      }
    };

    // Add a delegate structure to the list
    var addDelegate = function addDelegate(_list, idDelegate) {
      var list = _list;
      if (!list[idDelegate]) {
        list[idDelegate] = {
          idDelegate: idDelegate,
          name: _this3.admins[idDelegate].name,
          url: _this3.admins[idDelegate].url,
          pledges: [],
          delegtes: []
        };
      }
    };

    var addProject = function addProject(_list, idProject) {
      var list = _list;
      if (!list[idProject]) {
        list[idProject] = {
          idProject: idProject,
          pledges: [],
          commitedProjects: [],
          name: _this3.admins[idProject].name,
          url: _this3.admins[idProject].url,
          commitTime: _this3.admins[idProject].commitTime,
          owner: _this3.admins[idProject].owner,
          parentProject: _this3.admins[idProject].parentProject
        };
      }
    };

    var addDelegatePledge = function addDelegatePledge(stGiver, idPledge) {
      var pledge = _this3.pledges[idPledge];
      stGiver.notAssigned.pledges.push(idPledge);
      var list = stGiver.notAssigned.delegates;
      for (var i = 0; i < pledge.delegationChain.length; i += 1) {
        var idDelegate = pledge.delegationChain[i];
        addDelegate(list, idDelegate);
        list = list[idDelegate].delegates;
      }
    };

    var addProjectPledge = function addProjectPledge(stGiver, idPledge) {
      var pledge = _this3.pledges[idPledge];

      var crojectList = [];
      var n = pledge;
      while (n.oldNode) {
        crojectList.unshift(n.owner);
        n = _this3.pledges[n.oldNode];
      }

      var list = stGiver.commitedProjects;
      for (var j = 0; j < crojectList.length; j += 1) {
        addProject(list, crojectList[j]);
        list[crojectList[j]].pledges.push(idPledge);
        list = list[crojectList[j]].commitedProjects;
      }
    };

    for (var i = 0; i < this.pledges; i += 1) {
      var idPledge = this.pledges[i];
      var idGiver = getGiver(idPledge);
      addGiver(giversState, idGiver);
      var stGiver = giversState[idGiver];
      var pledge = this.pledges[idPledge];
      if (pledge.owner === idGiver && pledge.precommitedProject === 0) {
        addDelegatePledge(stGiver, idPledge);
      } else if (pledge.owner === idGiver && pledge.precommitedProject !== 0) {
        addProject(stGiver.precommitedProjects, pledge.precommitedProject);
        stGiver.precommitedProjects[pledge.precommitedProject].pledges.push(idPledge);
      } else {
        addProjectPledge(stGiver, idPledge);
      }
    }

    this.giversState = giversState;
  };

  return LiquidPledging;
};