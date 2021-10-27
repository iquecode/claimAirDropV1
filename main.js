//const testNetABISwap         = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"getParams","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ownerZEEX","type":"address"}],"name":"setOwnerZEEX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"valueZEEX","type":"uint256"}],"name":"setValueZEEX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountUSDT","type":"uint256"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
//const ABI_USDTFaucet         = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
//const testNetaddressSwap     = '0x17CB7a3757bDD25BF0d7429F72ddf35Fe628bE3A'; 
//const testNetwalletReceiver  = "0x8A3DA0982DF04988ad04536D92FeFe88701619Bc";  //wallet to recevid USDT Faucet - test1 - testnet
//const testNetUSDTFaucet      = "0xEdA7631884Ee51b4cAa85c4EEed7b0926954d180";   //USDT Faucet - testnet
//const testNetZEEXFaucet      = "0xa8f8C76CE1528a20e6E837B9d3f53FDFEe0dCD32";
//const testnetZEEXFaucetOwner = "0x8A3DA0982DF04988ad04536D92FeFe88701619Bc";  
//const testNetID = "icjV9myfJZSXquMizlOWyS5NQrI6V8as9vGQCuUh";
//const testNetServer = "https://bm6o8beqxl5a.moralishost.com:2053/server";
//const testNetchainId = 97;
//const walletReceiver  = "0x8A3DA0982DF04988ad04536D92FeFe88701619Bc";  //wallet to recevid USDT Faucet - test1 - testnet
//const tokenAddress    = "0xEdA7631884Ee51b4cAa85c4EEed7b0926954d180";   //USDT Faucet - 

const mainNetID = "vBWARY9nnQJcpHgh4KVMgLX7Y53WoY14yGgl4qAj";
const mainNetServer = "https://gz89rdj1zsqk.moralishost.com:2053/server";
const mainNetchainId = 56;
const walletReceiver = "0xa7Ada24C9E91e50c2d9C98B15635f4e8CDeC45C2";  //wallet to recevid USDT - Zeex-SwapV1

const tokenDecimals = 18; 
const priceZEEXajustBNB = 0.33 * 1.03;
const URL_BNBUSDT = "https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT";


const smartContractABI  = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"wallet","type":"address"},{"indexed":false,"internalType":"uint256","name":"amout","type":"uint256"},{"indexed":false,"internalType":"address","name":"partnerAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountPartner","type":"uint256"}],"name":"ClaimAirDropEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"components":[{"internalType":"address","name":"wallet","type":"address"},{"internalType":"uint8","name":"rebate","type":"uint8"},{"internalType":"uint8","name":"rebateBuyer","type":"uint8"},{"internalType":"uint8","name":"rebateAnoter","type":"uint8"},{"internalType":"uint8","name":"rebateAirDrop","type":"uint8"},{"internalType":"bool","name":"customRebate","type":"bool"}],"indexed":false,"internalType":"struct SaleAirDrop.Partner","name":"partner","type":"tuple"}],"name":"NewPartnerEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"wallet","type":"address"},{"components":[{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"amoutZeex","type":"uint256"},{"internalType":"uint8","name":"anoterToken","type":"uint8"},{"internalType":"uint256","name":"amountAnoter","type":"uint256"},{"internalType":"uint256","name":"idPartner","type":"uint256"},{"internalType":"address","name":"walletPartner","type":"address"},{"internalType":"uint256","name":"rebatePartner","type":"uint256"},{"internalType":"uint256","name":"rebateBuyer","type":"uint256"},{"internalType":"uint256","name":"rebateAnoter","type":"uint256"}],"indexed":false,"internalType":"struct SaleAirDrop.Sale","name":"sale","type":"tuple"}],"name":"SaleEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"components":[{"internalType":"address","name":"wallet","type":"address"},{"internalType":"uint8","name":"rebate","type":"uint8"},{"internalType":"uint8","name":"rebateBuyer","type":"uint8"},{"internalType":"uint8","name":"rebateAnoter","type":"uint8"},{"internalType":"uint8","name":"rebateAirDrop","type":"uint8"},{"internalType":"bool","name":"customRebate","type":"bool"}],"indexed":false,"internalType":"struct SaleAirDrop.Partner","name":"partner","type":"tuple"}],"name":"UpdatePartnerEvent","type":"event"},{"inputs":[{"internalType":"uint256","name":"idRebate","type":"uint256"},{"internalType":"uint256","name":"nZeex","type":"uint256"}],"name":"buyWithBNB","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"claimAirDrop","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"confirmation","type":"string"}],"name":"destruct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAirDropLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAirDropON","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAirDropUsed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAmountZEEXEachAirDrop","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFeeAirDrop","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestPriceBNBAdjust","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestRoundBNB","outputs":[{"components":[{"internalType":"uint80","name":"roundID","type":"uint80"},{"internalType":"int256","name":"price","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"timeStamp","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"internalType":"struct SaleAirDrop.RoundDataBNB","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getParamsPrice","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getPartner","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"getPartnerWithWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getRebateAirDropPartner","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRebateON","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStandartRebate","outputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTolerancePercent","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"},{"internalType":"uint8","name":"rebate","type":"uint8"},{"internalType":"uint8","name":"rebateBuyer","type":"uint8"},{"internalType":"uint8","name":"rebateUSDTorBNB","type":"uint8"},{"internalType":"uint8","name":"rebateAirDrop","type":"uint8"},{"internalType":"bool","name":"customRebate","type":"bool"}],"name":"newPartner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"priceFeedAddr","type":"address"},{"internalType":"address","name":"ZEEXAddr","type":"address"},{"internalType":"address","name":"USDTAddr","type":"address"}],"name":"reSetParamsConstructor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"limit","type":"uint256"}],"name":"setAirDropLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"on","type":"bool"}],"name":"setAirDropON","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setAmountZEEXEachAirDrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountBNB","type":"uint256"}],"name":"setFeeAirDrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"minimal","type":"uint256"}],"name":"setMinimalBNBAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"minimal","type":"uint256"}],"name":"setMinimalUSDTAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"ownerZEEX","type":"address"}],"name":"setOwnerZEEX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int256","name":"percent","type":"int256"}],"name":"setPercentPriceBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"rebateON","type":"bool"}],"name":"setRebateON","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"rebateZEEX","type":"uint8"},{"internalType":"uint8","name":"rebateBuyerZEEX","type":"uint8"},{"internalType":"uint8","name":"rebateUSDTorBNB","type":"uint8"},{"internalType":"uint8","name":"rebateAirDrop","type":"uint8"}],"name":"setStandartRebate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"percent","type":"uint8"}],"name":"setTolerancePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"valueZEEX","type":"uint256"}],"name":"setValueZEEX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signPartner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountUSDT","type":"uint256"},{"internalType":"uint256",
"name":"idRebate","type":"uint256"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],
"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint8","name":"rebate","type":"uint8"},{"internalType":"uint8","name":"rebateBuyer",
"type":"uint8"},{"internalType":"uint8","name":"rebateAnoter","type":"uint8"},{"internalType":"uint8","name":"rebateAirDrop","type":"uint8"},{"internalType":"bool","name":"customRebate","type":"bool"}],"name":"updatePartner",
"outputs":[],"stateMutability":"nonpayable","type":"function"}]
const smartContractAddr = "0x5377ad07A500cBB80C83A59e1DE7e281DDB0d881";
const USDT_ABI          = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
const USDTaddr          = "0x55d398326f99059fF775485246999027B3197955";
const ReceiverAddr      = "0xa7Ada24C9E91e50c2d9C98B15635f4e8CDeC45C2";  

let nZeex = 0;

Moralis.initialize(mainNetID); // Application id from moralis.io
Moralis.serverURL = mainNetServer; //Server url from moralis.io

function showModal(title,msg,keyboard=true) {
    document.getElementById("modal1-title").innerHTML = title;
    document.getElementById("modal1-msg").innerHTML = msg;
    if(keyboard) {
        $("#modal1").modal();
    } else {
        $("#modal1").modal({backdrop: 'static', keyboard: false});
    }       
}

function showModalMM(title,msg) {
    document.getElementById("mm-title").innerHTML = title;
    document.getElementById("mm-msg").innerHTML = msg;
    $("#modal_meta_mask").modal({backdrop: 'static', keyboard: false});
}

function showModalAlternative() {
    //console.log("modal alternative");
    $("#modalAlternative").modal();
}

function clearForm() {
    document.getElementById('InputName').value='';
    document.getElementById('InputEmail').value='';
    document.getElementById('InputUSDT').value='';
    $("#modal1").modal('hide');
    $("#modal2").modal('hide');
    $("#modal3").modal('hide');
}

async function sendEmail(email, name, usdt) {
    const params = { email: email, name: name, usdt: usdt};
    await Moralis.Cloud.run("sendPrivateSaleEmail", (InputEmail, params));
    //console.log("send email");
}

async function sendForm(email, name, txn, address, to="iquecode@gmail.com") {
    const params = { email: email, name: name, txn: txn, address: address, to: to};
    await Moralis.Cloud.run("sendForm", (InputEmail, params));
    //console.log("send email");
}

async function buyZeex(amountUSDT, BNB=false, AmountZ = 0) {
    $("#modal3").modal({backdrop: 'static', keyboard: false});
    let user = Moralis.User.current();
        
    try {
       user = await Moralis.authenticate();
    } catch (error) {
        $("#modal3").modal('hide');
        showModal("Error", "error: " + error.code + ". " + error.message)
    }       
    
    
    $("#modal3").modal('hide');
    $("#modal_meta_mask").modal('hide');
    
    if (user) {

        $("#modal2").modal({backdrop: 'static', keyboard: false});

        //console.log(user);
        const name  = document.getElementById("InputName").value;
        const email = document.getElementById("InputEmail").value;
        user.set("name",name);
        user.setEmail(email);
        user.save();

        if(!BNB) {
            //const amountUSDTdecimals = amountUSDT + '000000000000000000'; //18 casas decimais
            const amountUSDTdecimals = (amountUSDT * 1000000000000).toFixed(0) + '000000';
            //console.log("amount USDT: " + amountUSDTdecimals);
            const approveExpense = {  
                contractAddress: USDTaddr,  
                functionName: "approve",  
                abi: USDT_ABI,  
                params: {    
                    spender: smartContractAddr, amount: amountUSDTdecimals
                },
            };
            const doSwap = {  
                contractAddress: smartContractAddr,  
                functionName: "swap",  
                abi: smartContractABI,  
                params: {    
                    amountUSDT: amountUSDTdecimals,
                    idRebate: getRefZ()
                },
            };

            let approve = false;
            let swap = false;
            try {
                approve = await Moralis.executeFunction(approveExpense);
                if (approve) {
                    swap = await Moralis.executeFunction(doSwap);
                }
            } catch (error) {
                $("#modal2").modal('hide');
                showModal("Error", "error: " + error.code + ". " + error.message)
            }
            
            if (swap) {
                $("#modal2").modal('hide');
                clearForm();
                sendEmail(email, name, `${amountUSDT}`);
                showModal("Success", "Congratulations, your transaction was successful. If you have any questions, please contact contact@artzeex.com." );
            }
            return true;
        }

        const amountBNB = amountUSDT; 
        
        const buyWithBNB = {  
            contractAddress: smartContractAddr,  
            functionName: "buyWithBNB",  
            abi: smartContractABI,  
            msgValue: amountBNB,
            params: {    
                idRebate: getRefZ(),
                nZeex: AmountZ
            },
        };

        let buy = false;
        try {
                buy = await Moralis.executeFunction(buyWithBNB);
        } catch (error) {
            $("#modal2").modal('hide');
            showModal("Error", "error: " + error.code + ". " + error.message)
        }
        
        if (buy) {
            $("#modal2").modal('hide');
            clearForm();
            sendEmail(email, name, `${amountUSDT}`);
            showModal("Success", "Congratulations, your transaction was successful. If you have any questions, please contact contact@artzeex.com." );
        }
        
    }
 }

function submitBuyZeex() {

    const opt = document.getElementById("seletc-USDTorBNB").value;
    let amountZeex;

    if (opt == 1) {   //USDT

        //const amountUSDT = parseInt(document.getElementById("InputUSDT").value);
        const amountUSDT = document.getElementById("InputUSDT").value;
        let error = "";
        let ok = true;
        if (isNumber(amountUSDT) == false) {
            error = "Invalid format.";
            ok = false;
        }
        if ( amountUSDT < 5 ) {
            error = "Minimum investment of USDT 30 in pre sale.";
            ok = false;
        }
        if ( ok ) {
            amountZeex = (amountUSDT / 0.33).toFixed(6);
            let msginfo = "Three confirmations will be requested in Meta Mask: 1st for connection, 2nd to approve swap contract, 3rd swap execution USDT ";
            msginfo += amountUSDT + " for ZEEX " + amountZeex;
            showModalMM('Secure swap brokered by public smart contract', msginfo);
            buyZeex(amountUSDT);
        }
        else {
            showModal("Error",error);
        }

    }
    else {  //BNB

        const amountBNB = document.getElementById("InputBNB").value;
        let error = "";
        let ok = true;
        if (isNumber(amountBNB) == false) {
            error = "Invalid format.";
            ok = false;
        }
        if ( amountBNB < 0.0001 ) {
            error = "Minimum investment of 0.1 BNB in pre sale.";
            ok = false;
        }
        if ( ok ) {
            _getBNBPrice();
            let amount = (amountBNB * 1000000000000).toFixed(0) + '000000';
            //console.log(`ok: ${amount}`)
            let msginfo = "Three confirmations will be requested in Meta Mask: 1st for connection, 2nd to approve swap contract, 3rd swap execution USDT ";
            msginfo += amountBNB + " for ZEEX " + (nZeex/1000000).toFixed(4);
            showModalMM('Secure swap brokered by public smart contract', msginfo);
            buyZeex(amount, true, nZeex);
            // amountZeexBuy
        }
        else {
            showModal("Error",error);
        }
    }

}

function submitFormAlt() {
    const name    = document.getElementById("name-alt").value;
    const txn     = document.getElementById("txn-alt").value;
    const address = document.getElementById("address-alt").value;
    const email   = document.getElementById("email-alt").value;
    let error = "";
    let ok = true;
    if (!txn || !address || !email ) {
        error = "Required field not filled in";
        ok = false;
    }
    if ( ok ) {
        $("#modalAlternative").modal('hide')
        sendForm(email, name, txn, address, "iquecode@gmail.com") 
        showModal("Confirmation","Information sent successfully. You will receive an email within 1 business day confirming the credit of your ZEEX/USDZ at the address provided. Inquiries, send an email to concatc@artzeex.com.");
    }
}

function updateBNB(price) {
    priceZEEXinBNB = (priceZEEXajustBNB / price);
    //console.log("PirceZEEXinBNB: " + priceZEEXinBNB.toFixed(6));

    const inputBNB = document.querySelector('#InputBNB');
    const priceBNBhelp = document.getElementById("priceBNBHelp");
    priceBNBhelp.innerHTML = `Receive ${(inputBNB.value / priceZEEXinBNB).toFixed(4)} ZEEX! : ) | ref. current quote. - exact amount of ZEEX can be adjusted on confirmation.`;
    if (inputBNB.value < 0.1) {
        priceBNBhelp.innerHTML = `1 ZEEX = approx. ${(priceZEEXinBNB).toFixed(4)} BNB at the current quote | 0.33 USD.`;
    } 
    nZeex = (inputBNB.value / priceZEEXinBNB).toFixed(6) * 1000000;
}

function _getBNBPrice() {
    fetch(URL_BNBUSDT)
        .then(resp => resp.json())
        .then(data => updateBNB(data.price))
        .catch(error => console.log(error));
}

function _viewUSDTorBNB(cod) {
    const divUSDT = document.getElementById('div-input-USDT');
    const divBNB  = document.getElementById('div-input-BNB');
    divUSDT.style.display = "none";
    divBNB.style.display  = "none";
    if(cod == 1) {
        divUSDT.style.display = "block";
    }
    else {
        divBNB.style.display = "block";
        _getBNBPrice()
    }
}

let inputUSDT = document.querySelector('#InputUSDT');
inputUSDT.addEventListener('input', function() {
  const priceUSDThelp = document.getElementById("priceUSDTHelp");
  priceUSDThelp.innerHTML = `Receive ${(this.value / 0.33).toFixed(4)} ZEEX! : )`;
  if (this.value < 30) {
    priceUSDThelp.innerHTML = "1 ZEEX = 0.33 USDT | 1 USDT = 3.0303 ZEEX."
  } 
});

let inputBNB = document.querySelector('#InputBNB');
inputBNB.addEventListener('input', function() {
    _getBNBPrice();
});


let selectUSDTorBNB = document.querySelector('#seletc-USDTorBNB');
selectUSDTorBNB.addEventListener('input', function() {
     const priceBNBhelp = document.getElementById("priceBNBHelp");
//   priceUSDThelp.innerHTML = `Receive ${(this.value / 0.33).toFixed(4)} ZEEX! : )`;
//   if (this.value < 30) {
//     priceUSDThelp.innerHTML = "1 ZEEX = 0.33 USDT | 1 USDT = 3.0303 ZEEX."
//   } 
    _viewUSDTorBNB(this.value);
    //console.log(this.value);
});

//_getBNBPrice();


function isNumber(str) {
    return !isNaN(parseFloat(str))
}


//console.log(getRefZ());







// NEW VERSION



function showCustomModal(id) {
        $(id).modal();
}

function choiceWallet() {
    console.log("OLÁ... CHOICE WALLET");
    showCustomModal('#modal-choice-wallet');
}



document.getElementById("btn-buyZeex").onclick = submitBuyZeex;
document.getElementById("link-alternative").onclick = showModalAlternative;
document.getElementById("btn-submit-alt").onclick = submitFormAlt;



document.getElementById("btn1-conect-wallet").onclick = choiceWallet;