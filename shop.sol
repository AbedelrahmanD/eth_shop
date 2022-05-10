// SPDX-License-Identifier: MIT
pragma solidity  0.8.0;

contract Shop{

      struct Product {
         uint id;
         string name;
         uint price;
         uint quantity;
         uint calimValue;
         uint claimTrials;
         }

         struct Order{
           address clientAddress;//remove this as its found in the key of the map
           Product product;
           uint time;
         }


    address private owner;
    Product[] public productsList;
    mapping(address=>Order[]) public orders;
    mapping(address=>uint) public ordersNumber;

      constructor() {
        owner = msg.sender; 
    }

    modifier isOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }

  function getProductsNumber()public view returns( uint){
        return productsList.length;
    }
   
   function addProduct(string memory name, uint price,uint quantity,uint claimValue,uint claimTrials)public isOwner{
            productsList.push(Product(productsList.length+1,name,price,quantity,claimValue,claimTrials));
    }


  

    function getProductById(uint productId)public view returns(Product memory){
        for(uint i=0;i<productsList.length;i++){
                if(productsList[i].id==productId){
                  return  productsList[i];
                }
              }
   

        return Product(0,"",0,0,0,0);
    }

 
    function buyProduct(uint productId)public payable returns(string memory) {
          for(uint i=0;i<productsList.length;i++){
            if(productsList[i].id==productId){
              //check if product already takes
              require(productsList[i].quantity>0,"No quantity available");
              //check if amount = to product price
              require(productsList[i].price==msg.value,"Price is not enough");
              productsList[i].quantity--;
              //add product to the client
              orders[msg.sender].push(Order(msg.sender,productsList[i],block.timestamp));
              ordersNumber[msg.sender]++;
              return "done";
            }
          }
           return "Not found";
    }


function claim(uint productId) public returns(string memory){
    for(uint i=0;i<orders[msg.sender].length;i++){
      if(orders[msg.sender][i].product.id==productId){
                //check if trials >0
        require(orders[msg.sender][i].product.claimTrials>0,"Trials are finished");

        //check if  contract balance is > the product claim value
        require(address(this).balance>orders[msg.sender][i].product.calimValue);

        payable(msg.sender).transfer(orders[msg.sender][i].product.calimValue);
              //decremant claim trails
        orders[msg.sender][i].product.claimTrials--;
         return "Claim was successfull";
            }
          }
     return "You don't own the product";
}
    function getOrdersByClientAddress()public view returns(Order[] memory){
        return orders[msg.sender];
    }

   
  function getContractBalance()public view  returns(uint){
         return address(this).balance;
      }
   

       function fundContract()public payable{
      
    }

    function send() public payable{
              payable(owner).transfer(address(this).balance);
          }

}
