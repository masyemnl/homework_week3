


'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is
You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

2. Complete the function called `calculateTotalPrice`.
   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".
3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
  const cartForParty =
    {  cola:2,
       chips:1.5 ,
       choclate:0.5,
       cokkies:2.5,
      beers: 1}
    ;

   
 /* var val = cartForParty.reduce(function(previousValue, currentValue) {
    return {
      price: previousValue.price + currentValue.price,
    }
  });
  console.log(val);*/
 // var calculateTotalPrice = cartForParty.reduce((accum,item) => accum + item.price, 0)

 function calculateTotalPrice(cartForParty) {
  var totalPrice = Object.values(cartForParty).reduce((accum,item) => accum + item, 0);
  return 'Total: €' + totalPrice;

}


function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  console.assert(calculateTotalPrice.length===1);
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  console.assert(calculateTotalPrice(cartForParty)=== 'Total: €7.5');
  
}

function test() {
  test1();
  test2();
}

test();