

async function addProducts() {
    $("#jsSpinner").show();
    var name = $("#jsProductName").val();
    var price = $("#jsProductPrice").val();
    var quantity = $("#jsProductQuantity").val();
    var claimValue = $("#jsProductClaimValue").val();
    var claimTrials = $("#jsProductClaimTrials").val();
    const account = await getCurrentAccount();
    const result = await window.contract.methods.addProduct(name, price, quantity, claimValue, claimTrials).send({ from: account });
    console.log("result" + JSON.stringify(result));
    $("#jsSpinner").hide();
}

function renderProductsGrid(productsList) {
    var productsGrid = ``;
    productsList.forEach((product, index) => {
        productsGrid += `  
        <div class="col m4 s12">
          <div class="card indigo darken-1">
        <div class="card-content white-text">
          <span class="card-title">${product.name}</span>
          <p>${product.price} Wei</p>
        </div>
        <div class="card-action">
          <a href="#" onclick="buyProduct(${index})">Buy</a>
        </div>
      </div>
      </div>
      `;
    });
    return productsGrid;
}

var productsList = [];
async function getProducts() {

    $("#jsSpinner").show();
    const productsNumber = await window.contract.methods.getProductsNumber().call();
    if (productsNumber == 0) {

        $("#jsProductGrid").html("<h3>No Products</h3>");
        $("#jsSpinner").hide();
        return;
    }
    for (var i = 0; i < productsNumber; i++) {
        var product = await window.contract.methods.productsList(i).call();
        productsList.push(product);
    }

    var productsGrid = renderProductsGrid(productsList);

    $("#jsProductGrid").html(productsGrid);
    console.log("productlist" + productsList[0].name);
    $("#jsSpinner").hide();
}


async function buyProduct(productIndex) {
    event.preventDefault();
    var product = productsList[productIndex];
    console.log(product);
    const account = await getCurrentAccount();
    $("#jsSpinner").show();
    try {
        await window.contract.methods.buyProduct(product.id).send({ from: account, gas: 300000, value: web3.utils.toWei(product.price, "wei") });
    } catch (error) {
        $("#jsSpinner").hide();
        console.log(error);
        M.toast({ html: `${error.message}` })
    }

    $("#jsSpinner").hide();

}



function renderClientProductsGrid(productsList) {
    var productsGrid = ``;
    productsList.forEach((product, index) => {
        productsGrid += `  
        <div class="col m4 s12">
          <div class="card indigo darken-1">
        <div class="card-content white-text">
          <span class="card-title">${product.name}</span>
          <p>${product.price} Wei</p>
          <p>${product.claimValue} Wei</p>
            <p>${product.claimTrials} Wei</p>
        </div>
        <div class="card-action">
          <a href="#" onclick="claim(${index})">Cliam</a>
        </div>
      </div>
      </div>
      `;
    });
    return productsGrid;
}

var ordersList = []
async function getClientProducts() {
    $("#jsSpinner").show();
    const account = await getCurrentAccount();
    const ordersNumber = await window.contract.methods.ordersNumber(account).call();
    if (ordersNumber == 0) {
        $("#jsProductGrid").html("<h3>No Products</h3>");
        $("#jsSpinner").hide();
        return;
    }
    for (var i = 0; i < ordersNumber; i++) {
        var product = await window.contract.methods.orders(account, i).call();
        ordersList.push(product.product);
    }

    var productsGrid = renderClientProductsGrid(ordersList);

    $("#jsProductGrid").html(productsGrid);
    console.log("productlist" + ordersList[0].name);
    $("#jsSpinner").hide();
}

async function claim(orderProductIndex) {
    var product = ordersList[orderProductIndex];
    console.log("selected order" + product);
    $('#jsSpinner').show();
    const account = await getCurrentAccount();
    const result = await window.contract.methods.claim(product.id).send({ from: account });
    location.href = location.href;
    $('#jsSpinner').hide();

}
async function showOwnserAddress(orderProductIndex) {
    $('#jsSpinner').show();
    const result = await window.contract.methods.owner().call();
    $('#jsSpinner').hide();
    M.toast({ html: `Ownser address: ${result}` })

}
async function sendContractBalanceToOwner() {
    $('#jsSpinner').show();
    const account = await getCurrentAccount();
    const result = await window.contract.methods.sendContractBalanceToOwner().send({ from: account });
    $('#jsSpinner').hide();


}



async function fundContract() {
    event.preventDefault();
    var value = 1000000000000000000;
    $("#jsSpinner").show();
    const account = await getCurrentAccount();
    try {
        await window.contract.methods.fundContract().send({ from: account, gas: 300000, value: web3.utils.toWei(value, "wei") });
    } catch (error) {
        $("#jsSpinner").hide();
        console.log(error);
        M.toast({ html: `${error.message}` })
    }

    $("#jsSpinner").hide();
}
async function getContractBalance() {
    event.preventDefault();

    $("#jsSpinner").show();
    try {
        var result = await window.contract.methods.getContractBalance().call();
    } catch (error) {
        $("#jsSpinner").hide();
        console.log(error);
        M.toast({ html: `${error.message}` })
    }
    M.toast({ html: result })
    $("#jsSpinner").hide();
}

// $(async function () {


//     await getProducts();

// });