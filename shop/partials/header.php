<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shop</title>

    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="assets/css/mat.css">

    <style>
        .input-field {
            max-width: 300px;
            margin: 10px auto;
        }

        .btn {
            text-transform: initial;
        }
    </style>
    <!-- Compiled and minified JavaScript -->
    <script src="assets/js/mat.js"></script>
    <!-- jquery not necessary for smart contract-->
    <script src="assets/js/jquery.js"></script>
    <!-- main library to connect to smart contract-->
    <script src="assets/js/web3.min.js"></script>
    <!-- constants needed to connect to smart contract (ABI and contract address)-->
    <script src="assets/js/constant.js"></script>
    <!--required functions like connecting contract and crypto wallet from the browser-->
    <script src="assets/js/requires_web3.js"></script>
    <!--functions depending on contract-->
    <script src="assets/js/contract_functions.js"></script>
</head>

<body>

    <div class="navbar-fixed ">
        <nav>
            <div class="nav-wrapper indigo">
                <a href="#!" class="brand-logo">Logo</a>
                <ul class="right hide-on-med-and-down">
                    <li><a href="index.php">Products List</a></li>
                    <li><a href="my_products.php">My Products</a></li>
                </ul>
            </div>
        </nav>
    </div>




    <div id="jsSpinner" class="spinner" style="position:fixed;top:57px;z-index:50;left:0;right:0;display:none">
        <div class="progress">
            <div class="indeterminate orange"></div>
        </div>
    </div>