async function dipositContract(value) {
    $("#jsMessage").text("loading...");
    const account = await getCurrentAccount();
    await window.contract.methods.diposit().send({ from: account, gas: 300000, value: web3.utils.toWei(value, "ether") });
    $("#jsMessage").text("Done");
}
async function getAmount1() {
    $("#jsMessage").text("loading...");
    const amount1 = await window.contract.methods.getAmount1().call();
    $("#jsMessage").text(`Amount1= ${amount1} wei`);
}

async function getAmount2() {
    $("#jsMessage").text("loading...");
    const amount1 = await window.contract.methods.getAmount2().call();
    $("#jsMessage").text(`Amount2= ${amount1} wei`);
}

async function getContractBalance() {
    $("#jsMessage").text("loading...");
    const balance = await window.contract.methods.getContractBalance().call();
    $("#jsMessage").text(`Contract balance= ${balance} wei`);
}

$(function () {
    $("#jsSubmit").click(function (e) {
        e.preventDefault();
        var value = $("#jsEthAmount").val();
        if (value != "" && value > 0) {
            dipositContract(value);
        }

    });

    $("#jsGetamount1").click(function () {
        getAmount1();
    });
    $("#jsGetamount2").click(function () {
        getAmount2();
    });
    $("#jsGetContractBalance").click(function () {
        getContractBalance();
    });
});