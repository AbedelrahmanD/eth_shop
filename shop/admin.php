<?php include_once "partials/header.php";  ?>


<div class="container center">
    <h3 class="indigo-text">
        Add Product
    </h3>
</div>
<form action="" class="container center">


    <div class="input-field col s3 ">
        <input type="text" id="jsProductName" class="autocomplete">
        <label for="autocomplete-input">Name</label>
    </div>


    <div class="input-field col s3 ">
        <input type="number" id="jsProductPrice" class="autocomplete" value="1000000000000000000">
        <label for="autocomplete-input">Price(wei)</label>
    </div>


    <div class="input-field col s3 center">
        <input type="number" id="jsProductQuantity" class="autocomplete">
        <label for="autocomplete-input">Quantity</label>
    </div>


    <div class="input-field col s3 center">
        <input type="number" id="jsProductClaimValue" class="autocomplete">
        <label for="autocomplete-input">Claim Value(wei)</label>
    </div>


    <div class="input-field col s3 center">
        <input type="number" id="jsProductClaimTrials" class="autocomplete">
        <label for="autocomplete-input">Claim Trials</label>
    </div>


    <div class="row">
        <a class="waves-effect waves-light btn indigo" onclick="addProducts()">button</a>
    </div>
</form>

<?php include_once "partials/footer.php";  ?>