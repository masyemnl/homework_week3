

'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-4-shopping-at-the-supermarket
Let's do some grocery shopping! We're going to get some things to cook dinner
with. However, you like to spend money and always buy too many things. So when 
you have more than 3 items in your shopping cart the first item gets taken out.
1. Create an array called `shoppingCart` that holds the following strings: 
   "bananas" and "milk".
2. Complete the function named `addToShoppingCart` as follows:
   - It should take one argument: a grocery item (string)
   - It should add the grocery item to `shoppingCart`. If the number of items is
     more than three remove the first one in the array.
   - It should return a string "You bought <list-of-items>!", where 
     <list-of-items>is a comma-separated list of items from the shopping cart 
     array.
3. Confirm that your code passes the unit tests.
-----------------------------------------------------------------------------*/
const shoppingCart = ['bananas', 'milk'];

// ! Function to be tested
function addToShoppingCart(item){
    item ? addToShoppingCart.push(item) : shoppingCart;
    shoppingCart.length > 3 ? shoppingCart.shift() : shoppingCart;
    console.log('you bought'+' '+ shoppingCart.join(', ') +'!');
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('You bought '+shoppingCart +'!');
  const expected = 'You bought bananas, milk!';
  const actual = addToShoppingCart();
  console.assert(actual === expected);
}

function test2() {
    var add= shoppingCart;
  console.log(add);
  const expected = 1;
  const actual = addToShoppingCart.length;
  console.assert(actual === expected);
}

function test3() {
  shoppingCart.push("chocolate");
  console.log('You bought '+shoppingCart +'!');
  const expected = 'You bought bananas, milk, chocolate!';
  const actual = addToShoppingCart('chocolate');
  console.assert(actual === expected);
}

function test4() {
  shoppingCart[0]="waffles";
  console.log('You bought '+shoppingCart +'!');
  const expected = 'You bought milk, chocolate, waffles!';
  const actual = addToShoppingCart('waffles');
  console.assert(actual === expected);
}

function test5() {
    shoppingCart[1]="tea";
    console.log('You bought '+shoppingCart +'!');
  const expected = 'You bought chocolate, waffles, tea!';
  const actual = addToShoppingCart('tea');
  console.assert(actual === expected);
}

function test() {
  test1();
  test2();
  test3();
  test4();
  test5();
}

test();