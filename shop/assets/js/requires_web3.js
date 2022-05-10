/* fixed functions starts*/
async function loadWeb3() {

    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);

        window.ethereum.enable();

    }
}

async function loadContract() {
    return await new window.web3.eth.Contract(contractAbi, contractAddress);
}

async function getCurrentAccount() {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];
}

async function load() {
    await loadWeb3();
    window.contract = await loadContract();
    const account = await getCurrentAccount();
    console.log("selected account is " + account);
}
load();
        /* fixed functions ends*/