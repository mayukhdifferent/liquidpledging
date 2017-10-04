/* This is an autogenerated file. DO NOT EDIT MANUALLY */

exports.ILiquidPledgingPluginAbi = [{"constant":false,"inputs":[{"name":"noteManager","type":"uint64"},{"name":"noteFrom","type":"uint64"},{"name":"noteTo","type":"uint64"},{"name":"context","type":"uint64"},{"name":"amount","type":"uint256"}],"name":"afterTransfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"noteManager","type":"uint64"},{"name":"noteFrom","type":"uint64"},{"name":"noteTo","type":"uint64"},{"name":"context","type":"uint64"},{"name":"amount","type":"uint256"}],"name":"beforeTransfer","outputs":[{"name":"maxAllowed","type":"uint256"}],"payable":false,"type":"function"}]
exports.ILiquidPledgingPluginByteCode = "0x"
exports.LiquidPledgingBaseAbi = [{"constant":false,"inputs":[{"name":"idDelegate","type":"uint64"},{"name":"newAddr","type":"address"},{"name":"newName","type":"string"},{"name":"newCommitTime","type":"uint64"}],"name":"updateDelegate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"idPledge","type":"uint64"},{"name":"idxDelegate","type":"uint256"}],"name":"getPledgeDelegate","outputs":[{"name":"idDelegate","type":"uint64"},{"name":"addr","type":"address"},{"name":"name","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"commitTime","type":"uint64"},{"name":"plugin","type":"address"}],"name":"addDelegate","outputs":[{"name":"idDelegate","type":"uint64"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"numberOfPledges","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"idPledge","type":"uint64"}],"name":"getPledge","outputs":[{"name":"amount","type":"uint256"},{"name":"owner","type":"uint64"},{"name":"nDelegates","type":"uint64"},{"name":"proposedCampaign","type":"uint64"},{"name":"commitTime","type":"uint64"},{"name":"oldPledge","type":"uint64"},{"name":"paymentState","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"numberOfPledgeAdmins","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"campaignAdmin","type":"address"},{"name":"parentCampaign","type":"uint64"},{"name":"commitTime","type":"uint64"},{"name":"plugin","type":"address"}],"name":"addCampaign","outputs":[{"name":"idCampaign","type":"uint64"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"campaignId","type":"uint64"}],"name":"isCampaignCanceled","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"idCampaign","type":"uint64"},{"name":"newAddr","type":"address"},{"name":"newName","type":"string"},{"name":"newCommitTime","type":"uint64"}],"name":"updateCampaign","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"idAdmin","type":"uint64"}],"name":"getPledgeAdmin","outputs":[{"name":"adminType","type":"uint8"},{"name":"addr","type":"address"},{"name":"name","type":"string"},{"name":"commitTime","type":"uint64"},{"name":"parentCampaign","type":"uint64"},{"name":"canceled","type":"bool"},{"name":"plugin","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"vault","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"commitTime","type":"uint64"},{"name":"plugin","type":"address"}],"name":"addGiver","outputs":[{"name":"idGiver","type":"uint64"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"idGiver","type":"uint64"},{"name":"newAddr","type":"address"},{"name":"newName","type":"string"},{"name":"newCommitTime","type":"uint64"}],"name":"updateGiver","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_vault","type":"address"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"idGiver","type":"uint64"}],"name":"GiverAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"idGiver","type":"uint64"}],"name":"GiverUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"idDelegate","type":"uint64"}],"name":"DelegateAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"idDelegate","type":"uint64"}],"name":"DelegateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"idCampaign","type":"uint64"}],"name":"CampaignAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"idAdmin","type":"uint64"}],"name":"CampaignUpdated","type":"event"}]
exports.LiquidPledgingBaseByteCode = "0x606060405234156200001057600080fd5b60405160208062001b1f833981016040528080519150505b60016200003681806200006a565b506001620000466000826200009f565b5060028054600160a060020a031916600160a060020a0383161790555b5062000245565b8154818355818115116200009957600402816004028360005260206000209182019101620000999190620000d4565b5b505050565b815481835581811511620000995760040281600402836000526020600020918201910162000099919062000138565b5b505050565b6200013591905b8082111562000131578054600160a860020a03191681556000620001036001830182620001aa565b506002810180546001608860020a0319169055600381018054600160a060020a0319169055600401620000db565b5090565b90565b6200013591905b808211156200013157600080825560018201805467ffffffffffffffff191690556200016f6002830182620001f6565b506003810180547fffffffffffffff000000000000000000000000000000000000000000000000001690556004016200013f565b5090565b90565b50805460018160011615610100020316600290046000825580601f10620001d25750620001f2565b601f016020900490600052602060002090810190620001f2919062000221565b5b50565b508054600082556003016004900490600052602060002090810190620001f2919062000221565b5b50565b6200013591905b8082111562000131576000815560010162000228565b5090565b90565b6118ca80620002556000396000f300606060405236156100c25763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166313734d8781146100c757806314e7b1dc146101445780631e215648146102005780632a8ec8cc146102885780633f657a46146102ad5780635503d9ba1461032d5780638233ba6a146103525780638fe1f2ce146103ea578063aa99759c1461041e578063eba8ba061461049b578063fbfa77cf14610589578063fe7fff49146105b8578063fecdf17714610640575b600080fd5b34156100d257600080fd5b6101426004803567ffffffffffffffff169060248035600160a060020a0316919060649060443590810190830135806020601f820181900481020160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff1692506106bd915050565b005b341561014f57600080fd5b61016767ffffffffffffffff60043516602435610794565b60405167ffffffffffffffff84168152600160a060020a038316602082015260606040820181815290820183818151815260200191508051906020019080838360005b838110156101c35780820151818401525b6020016101aa565b50505050905090810190601f1680156101f05780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b341561020b57600080fd5b61026b60046024813581810190830135806020601f820181900481020160405190810160405281815292919060208401838380828437509496505050833567ffffffffffffffff169360200135600160a060020a031692506108bc915050565b60405167ffffffffffffffff909116815260200160405180910390f35b341561029357600080fd5b61029b610a8e565b60405190815260200160405180910390f35b34156102b857600080fd5b6102cd67ffffffffffffffff60043516610a99565b60405187815267ffffffffffffffff8088166020830152868116604083015285811660608301528481166080830152831660a082015260c0810182600281111561031357fe5b60ff16815260200197505050505050505060405180910390f35b341561033857600080fd5b61029b610b21565b60405190815260200160405180910390f35b341561035d57600080fd5b61026b60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965050600160a060020a03853581169567ffffffffffffffff602082013581169650604082013516945060600135169150610b2c9050565b60405167ffffffffffffffff909116815260200160405180910390f35b34156103f557600080fd5b61040a67ffffffffffffffff60043516610ec0565b604051901515815260200160405180910390f35b341561042957600080fd5b6101426004803567ffffffffffffffff169060248035600160a060020a0316919060649060443590810190830135806020601f820181900481020160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff169250610f7e915050565b005b34156104a657600080fd5b6104bb67ffffffffffffffff60043516611055565b604051808860028111156104cb57fe5b60ff168152600160a060020a03888116602083015267ffffffffffffffff87811660608401528616608083015284151560a0830152831660c082015260e0828203810160408301908152910187818151815260200191508051906020019080838360005b838110156105485780820151818401525b60200161052f565b50505050905090810190601f1680156105755780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b341561059457600080fd5b61059c61117a565b604051600160a060020a03909116815260200160405180910390f35b34156105c357600080fd5b61026b60046024813581810190830135806020601f820181900481020160405190810160405281815292919060208401838380828437509496505050833567ffffffffffffffff169360200135600160a060020a03169250611189915050565b60405167ffffffffffffffff909116815260200160405180910390f35b341561064b57600080fd5b6101426004803567ffffffffffffffff169060248035600160a060020a0316919060649060443590810190830135806020601f820181900481020160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff16925061135a915050565b005b60006106c885611431565b905060015b815460ff1660028111156106dd57fe5b146106e757600080fd5b805433600160a060020a03908116610100909204161461070657600080fd5b805461010060a860020a031916610100600160a060020a038616021781556001810183805161073992916020019061166f565b5060028101805467ffffffffffffffff191667ffffffffffffffff8481169190911790915585167f01a3bd608e7be74358498f90bd2ff305f9fdb8e94d76167f40fef03aae56620360405160405180910390a25b5050505050565b60008061079f6116ee565b6000806107ab8761147e565b915081600201600187038154811015156107c157fe5b90600052602060002090600491828204019190066008025b9054906101000a900467ffffffffffffffff1694506107f785611431565b90508060000160019054906101000a9004600160a060020a03169350806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108ab5780601f10610880576101008083540402835291602001916108ab565b820191906000526020600020905b81548152906001019060200180831161088e57829003601f168201915b505050505092505b50509250925092565b6001805490818082016108cf8382611700565b916000526020600020906004020160005b60e06040519081016040528060015b8152600160a060020a033381166020830152604082018a905267ffffffffffffffff8916606083015260006080830181905260a0830152871660c09091015291905081518154829060ff1916600183600281111561094957fe5b021790555060208201518154600160a060020a03919091166101000261010060a860020a031990911617815560408201518160010190805161098f92916020019061166f565b50606082015160028201805467ffffffffffffffff191667ffffffffffffffff9290921691909117905560808201518160020160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060a0820151600282018054911515608060020a0270ff000000000000000000000000000000001990921691909117905560c0820151600391909101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909216919091179055505067ffffffffffffffff81167f014882843f1e57bd41e0826ad1cd5e6180d4d4f76df8b12edc8b44575322d94e60405160405180910390a25b9392505050565b600054600019015b90565b600080600080600080600080610aae8961147e565b8054600182015460028301546003840154929b5067ffffffffffffffff9182169a509850808216975068010000000000000000820481169650608060020a82041694507801000000000000000000000000000000000000000000000000900460ff16925090505b50919395979092949650565b600154600019015b90565b60008067ffffffffffffffff851615610ce857610b4885611431565b905060025b815460ff166002811115610b5d57fe5b14610b6757600080fd5b805433600160a060020a039081166101009092041614610b8657600080fd5b6014610cde8260e06040519081016040528154909190829060ff166002811115610bac57fe5b6002811115610bb757fe5b81526020016000820160019054906101000a9004600160a060020a0316600160a060020a0316600160a060020a03168152602001600182018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c835780601f10610c5857610100808354040283529160200191610c83565b820191906000526020600020905b815481529060010190602001808311610c6657829003601f168201915b5050509183525050600282015467ffffffffffffffff8082166020840152680100000000000000008204166040830152608060020a900460ff1615156060820152600390910154600160a060020a03166080909101526114c9565b10610ce857600080fd5b5b60018054925082808201610cfd8382611700565b916000526020600020906004020160005b60e06040519081016040528060025b8152600160a060020a03808c166020830152604082018d905267ffffffffffffffff808b1660608401528b166080830152600060a0830152881660c09091015291905081518154829060ff19166001836002811115610d7857fe5b021790555060208201518154600160a060020a03919091166101000261010060a860020a0319909116178155604082015181600101908051610dbe92916020019061166f565b50606082015160028201805467ffffffffffffffff191667ffffffffffffffff9290921691909117905560808201518160020160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060a0820151600282018054911515608060020a0270ff000000000000000000000000000000001990921691909117905560c0820151600391909101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909216919091179055505067ffffffffffffffff82167f7ee8e9aa2daef505e5dcde0891e16be5f9808204d3b7ab755ed49060b020efa760405160405180910390a25b5095945050505050565b600080610ecc83611431565b905060005b815460ff166002811115610ee157fe5b1415610ef05760009150610f78565b60025b815460ff166002811115610f0357fe5b14610f0a57fe5b6002810154608060020a900460ff1615610f275760019150610f78565b600281015468010000000000000000900467ffffffffffffffff161515610f515760009150610f78565b6002810154610f759068010000000000000000900467ffffffffffffffff16610ec0565b91505b50919050565b6000610f8985611431565b905060025b815460ff166002811115610f9e57fe5b14610fa857600080fd5b805433600160a060020a039081166101009092041614610fc757600080fd5b805461010060a860020a031916610100600160a060020a0386160217815560018101838051610ffa92916020019061166f565b5060028101805467ffffffffffffffff191667ffffffffffffffff8481169190911790915585167f801323e9b4133d25ff2d22427923c338b40554015d63b1b035fdf93225f3112f60405160405180910390a25b5050505050565b6000806110606116ee565b600080600080600061107189611431565b80546001808301805460ff84169c5061010093849004600160a060020a03169b509394509260029181161590920260001901909116046020601f820181900481020160405190810160405280929190818152602001828054600181600116156101000203166002900480156111275780601f106110fc57610100808354040283529160200191611127565b820191906000526020600020905b81548152906001019060200180831161110a57829003601f168201915b505050506002830154600384015492985067ffffffffffffffff8082169850680100000000000000008204169650608060020a900460ff16945050600160a060020a031691505b50919395979092949650565b600254600160a060020a031681565b60018054908180820161119c8382611700565b916000526020600020906004020160005b60e06040519081016040528060005b8152600160a060020a033381166020830152604082018a905267ffffffffffffffff8916606083015260006080830181905260a0830152871660c09091015291905081518154829060ff1916600183600281111561121657fe5b021790555060208201518154600160a060020a03919091166101000261010060a860020a031990911617815560408201518160010190805161125c92916020019061166f565b50606082015160028201805467ffffffffffffffff191667ffffffffffffffff9290921691909117905560808201518160020160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060a0820151600282018054911515608060020a0270ff000000000000000000000000000000001990921691909117905560c0820151600391909101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909216919091179055505067ffffffffffffffff81167efc763def3c85dbc7bab43e314ba21264ec158217c45cf1eaf94f5ae15bc2c560405160405180910390a25b9392505050565b600061136585611431565b905060005b815460ff16600281111561137a57fe5b1461138457600080fd5b805433600160a060020a0390811661010090920416146113a357600080fd5b805461010060a860020a031916610100600160a060020a03861602178155600181018380516113d692916020019061166f565b5060028101805467ffffffffffffffff191667ffffffffffffffff8481169190911790915585167fe8da06f5d4d8fa2ef122c9fc3d5ae15379d95f5b9ebf92a5821b57705600320a60405160405180910390a25b5050505050565b60015460009067ffffffffffffffff83161061144c57600080fd5b6001805467ffffffffffffffff841690811061146457fe5b906000526020600020906004020160005b5090505b919050565b6000805467ffffffffffffffff83161061149757600080fd5b6000805467ffffffffffffffff841690811061146457fe5b906000526020600020906004020160005b5090505b919050565b60008060025b835160028111156114dc57fe5b146114e357fe5b826080015167ffffffffffffffff1615156115015760019150610f78565b61150e8360800151611431565b9050610f758160e06040519081016040528154909190829060ff166002811115610bac57fe5b6002811115610bb757fe5b81526020016000820160019054906101000a9004600160a060020a0316600160a060020a0316600160a060020a03168152602001600182018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c835780601f10610c5857610100808354040283529160200191610c83565b820191906000526020600020905b815481529060010190602001808311610c6657829003601f168201915b5050509183525050600282015467ffffffffffffffff8082166020840152680100000000000000008204166040830152608060020a900460ff1615156060820152600390910154600160a060020a03166080909101526114c9565b91505b50919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106116b057805160ff19168380011785556116dd565b828001600101855582156116dd579182015b828111156116dd5782518255916020019190600101906116c2565b5b506116ea9291506117b1565b5090565b60206040519081016040526000815290565b81548183558181151161172c5760040281600402836000526020600020918201910161172c91906117d2565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106116b057805160ff19168380011785556116dd565b828001600101855582156116dd579182015b828111156116dd5782518255916020019190600101906116c2565b5b506116ea9291506117b1565b5090565b610a9691905b808211156116ea57600081556001016117b7565b5090565b90565b610a9691905b808211156116ea57805474ffffffffffffffffffffffffffffffffffffffffff19168155600061180b6001830182611856565b5060028101805470ffffffffffffffffffffffffffffffffff1916905560038101805473ffffffffffffffffffffffffffffffffffffffff191690556004016117d8565b5090565b90565b50805460018160011615610100020316600290046000825580601f1061187c575061189a565b601f01602090049060005260206000209081019061189a91906117b1565b5b505600a165627a7a72305820ba11224e7c959ec16cdd177a23f394c7f586caecc00cd83180fb550875a71c080029"
exports.VaultAbi = [{"constant":false,"inputs":[{"name":"_ref","type":"bytes32"},{"name":"_dest","type":"address"},{"name":"_amount","type":"uint256"}],"name":"authorizePayment","outputs":[],"payable":false,"type":"function"},{"payable":true,"type":"fallback"}]
exports.VaultByteCode = "0x"
exports._solcVersion = "0.4.15+commit.bbb8e64f.Emscripten.clang"
exports._sha256 = "0xafc7707016e50574df2c0e04b2ed67df5325e3268e14f04c39f23d99914847d0"
