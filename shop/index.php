<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shop</title>
</head>

<body>

  
        
        <button onclick="getProduct()">get my product</button>
        <button onclick="getContractBalance()">getContractBalance</button>
        <button onclick="send()">send</button>
        
        
    </div>


    <!-- jquery not necessary for smart contract-->
    <script src="assets/js/jquery.js"></script>
    <!-- main library to connect to smart contract-->
    <script src="assets/js/web3.min.js"></script>
    <!-- constants needed to connect to smart contract (ABI and contract address)-->
    <script src="assets/js/shop_constants.js"></script>
    <!--required functions like connecting contract and crypto wallet from the browser-->
    <script src="assets/js/requires_web3.js"></script>
    <!--functions depending on contract-->
    <script src="assets/js/shop_contract.js"></script>

</body>

</html>