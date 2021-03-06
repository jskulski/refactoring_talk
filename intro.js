/**
 *
 * REFACTORING
 *
 *
 *
 * twitter: @jonskulski
 * github: github.com/jskulski
 */






















/**
 * WHAT TO EXPECT:
 *
 *   Planting a seed that REFACTORING is very a precise way of
 *   working.
 *
 *   The general idea:
 *
 *   "restructuring code confidently to make it easier to do what
 *   you want to do"
 */

/**
 *
 * NOT EXPECTED:
 *
 *   1. Change anything about the way you are working+learning
 *
 *   2. To understand fully or recite any of this.
 *
 */









/***
 * WHY:
 *
 *  - Probably #1 most important discipline I've learned.
 *  - Gave me great confidence in tackling the worst of code bases.
 *
 *
 *  Any developer can work with good code.
 *  Any good developer can work with `bad` code.
 *  Great developers make bad code into good code, then work with it.
 *
 */




/**
 *
 * WARNING
 *
 * The word `Refactoring` is used a lot. Often incorrectly.
 *
 * - must ensure no external behavior changes.
 * - if you can't deploy a refactor, it's not a refactor.
 * - not a synonym for Rewrite!
 *
 * - "Refactoring without test is just changing [stuff]"
 *
 */







/**
 * PROLOGUE
 */

/**
 * You wake up to a new task at work. You have a register system
 * that sends you integers that correspond with keys pressed.
 *
 * Your system generates strings to send to the kitchen to
 * prepare.
 */
function takeOrder(drink, temperature) {
  //...
}

// assert(takeOrder(0, 0) == 'CUSTOMER NEEDS A HOT COFFEE');
// assert(takeOrder(1, 1) == 'CUSTOMER NEEDS A COLD TEA');
// assert(takeOrder(2, 1) == 'CUSTOMER NEEDS A COLD MILK');
// ... and many more!












/**
 * You look at your task, it's asking to you add a third option.
 *
 * People want sugar and cream with their drinks.
 *
 *
 * So you'll be doing something like this:
 */
function takeOrder(drink, temperature, options) {
  //...
}


/**
 * And generating this:
 */
// assert(takeOrder(0, 0, 1) == 'CUSTOMER NEEDS CREAM AND A HOT COFFEE');
// assert(takeOrder(1, 1, 0) == 'CUSTOMER NEEDS A COLD TEA');
// assert(takeOrder(2, 1, 2) == 'CUSTOMER NEEDS SUGAR AND A COLD MILK');
// ... and more!















/**
 * You crack your knuckles and open up the code...
 *
 * It's not great. It's not terrible.
 *
 * But it's not going to be easy for you to get what you need
 * to do, done.
 */
var takeOrder = function(drink, temperature) {
  var order;

  if (drink == 0 && temperature == 0) {
    order = 'CUSTOMER NEEDS A HOT COFFEE';
  }
  else if (drink == 0 && temperature == 1) {
    order = 'CUSTOMER NEEDS A COLD COFFEE';
  }
  else if (drink == 1 && temperature == 0) {
    order = 'CUSTOMER NEEDS A HOT TEA';
  }
  else if (drink == 1 && temperature == 1) {
    order = 'CUSTOMER NEEDS A COLD TEA';
  }
  else if (drink == 2 && temperature == 0) {
    order = 'CUSTOMER NEEDS A HOT MILK';
  }
  else if (drink == 2 && temperature == 1) {
    order = 'CUSTOMER NEEDS A COLD MILK';
  }
  else {
    throw "UNSUPPORTED ORDER"
  }

  return order;
}

assert(takeOrder(0, 0) == 'CUSTOMER NEEDS A HOT COFFEE');
assert(takeOrder(1, 1) == 'CUSTOMER NEEDS A COLD TEA');
assert(takeOrder(2, 1) == 'CUSTOMER NEEDS A COLD MILK');

/**
 * You start to think.
 *
 *
 * And then you start to sweat because if you just follow this pattern,
 * the conditionals explode and you will have this:
 *
 * (And think of the next developer who has to add another drink type!)
 */
var takeOrder = function(drink, temperature, options) {
  if (drink == 0 && temperature == 0 && options == 0) {
    order = 'CUSTOMER NEEDS A HOT COFFEE'
  }
  else if (drink == 0 && temperature == 0 && options == 1) {
    order = 'CUSTOMER NEEDS CREAM AND A HOT COFFEE'
  }
  if (drink == 0 && temperature == 0 && options == 2) {
    order = 'CUSTOMER NEEDS SUGAR AND A HOT COFFEE'
  }
  else if (drink == 0 && temperature == 1 && options == 0) {
    order = 'CUSTOMER NEEDS A COLD COFFEE'
  }
  else if (drink == 0 && temperature == 1 && options == 1) {
    order = 'CUSTOMER NEEDS CREAM AND A COLD COFFEE'
  }
  else if (drink == 0 && temperature == 1 && options == 2) {
    order = 'CUSTOMER NEEDS SUGAR AND A COLD COFFEE'
  }
  if (drink == 1 && temperature == 0 && options == 0) {
    order = 'CUSTOMER NEEDS A HOT TEA'
  }
  else if (drink == 1 && temperature == 0 && options == 1) {
    order = 'CUSTOMER NEEDS CREAM AND A HOT TEA'
  }
  if (drink == 1 && temperature == 0 && options == 2) {
    order = 'CUSTOMER NEEDS SUGAR AND A HOT TEA'
  }
  else if (drink == 1 && temperature == 1 && options == 0) {
    order = 'CUSTOMER NEEDS A COLD TEA'
  }
  else if (drink == 1 && temperature == 1 && options == 1) {
    order = 'CUSTOMER NEEDS CREAM AND A COLD TEA'
  }
  else if (drink == 1 && temperature == 1 && options == 2) {
    order = 'CUSTOMER NEEDS SUGAR AND A COLD TEA'
  }
  if (drink == 2 && temperature == 0 && options == 0) {
    order = 'CUSTOMER NEEDS A HOT MILK'
  }
  else if (drink == 2 && temperature == 0 && options == 1) {
    order = 'CUSTOMER NEEDS CREAM AND A HOT MILK'
  }
  if (drink == 2 && temperature == 0 && options == 2) {
    order = 'CUSTOMER NEEDS SUGAR AND A HOT MILK'
  }
  else if (drink == 2 && temperature == 1 && options == 0) {
    order = 'CUSTOMER NEEDS A COLD MILK'
  }
  else if (drink == 2 && temperature == 1 && options == 1) {
    order = 'CUSTOMER NEEDS CREAM AND A COLD MILK'
  }
  else if (drink == 2 && temperature == 1 && options == 2) {
    order = 'CUSTOMER NEEDS SUGAR AND A COLD MILK'
  }
  return order;
}


assert(takeOrder(0, 0, 1) == 'CUSTOMER NEEDS CREAM AND A HOT COFFEE');
assert(takeOrder(1, 1, 0) == 'CUSTOMER NEEDS A COLD TEA');
assert(takeOrder(2, 1, 2) == 'CUSTOMER NEEDS SUGAR AND A COLD MILK');

/***
 *
 *
 *  SO.... what do you do?
 *
 *
 *
 *  Let's come back.
 *
 *
 */





/**
 * MATH
 *
 * We know from MATH:
 *
 *   y = (x - 1)^2
 *   y = (x - 1)(x - 1)
 *   y = x^2 - 2x + 1
 *
 */
function f1(x) { return Math.pow(x - 1, 2); }
function f2(x) { return (x - 1) * (x - 1); }
function f3(x) { return Math.pow(x, 2) -2*x + 1; }



/**
 *
 *  All with various qualities:
 *  f2 is more readable to me,
 *  f3 is the slowest,
 *
 * But since for ANY value of x we are pretty much guaranteed:
 *
 *   f1(x) == f2(x) == f3(x) 
 *
 * We can swap out the implementation.
 *
 * So we could have a test suite that looked something like:
 */
function f(x) {
  // ANY OF THOSE IMPLEMENTATIONS
  return f1(x) === f2(x) && f2(x) === f3(x) ? f1(x) : false
}

assert(f(2) == 1);
assert(f(-1) == 4);
assert(f(0) == 1);
//... and so on.


/**
 * APPLY THIS TO PROGRAMS
 *
 * If our external behavior doesn't change,
 * we can change choose the implementation that's easiest for us to work with.
 *
 * Given these functions and the guarantee that they're the same,
 * we can choose the one that is easiest to work with.
 */
function easyToWorkWith() {
  // ...
}

function hardToWorkWith() {
  // ...
}

// assert(easyToWorkWith(x) == hardToWorkWith(x)); // For any x


/***
 *
 * And that's what REFACTORING is:
 *
 *  1. Identifying easier to work with structures
 *  2. Guaranteeing no change in external behavior (through Tests)
 *  3. Changing code to be easy to work with and
 *     then doing what you need to do.
 *
 */


/**
 * DEFINITIONS:
 *
 * "Code refactoring is the process of restructuring existing
 *  computer code without changing its external behavior."
 *  - Wikipedia and Boring Books
 *
 *
 * "[Refactoring is] applying a series of small behavior-preserving
 *  transformations, each of which 'too small to be worth doing'"
 *  - MARTIN FOWLER
 *
 * The main point:
 *    - change the internal
 *    - preserve the external
 *
 *    - do it for a purpose, to get something DONE.
 */



/**
 * Let's return to our example.
 *
 * You think there must be an easier way to implement your options.
 */
var takeOrder = function(drink, temperature, options) {
  //...
}

/**
 * You go and take a walk around a lake and muse and think and when you come back
 * you're rested and you realize that there's some duplication in the string.
 *
 * The first thing you'll want to do is create a nice test suite so
 * you can guarantee there are no EXTERNAL CHANGES.
 *
 * So you do the tedious work of cataloguing current behavior:
 */
// assert(takeOrder(0, 0) == 'CUSTOMER NEEDS A HOT COFFEE');
// assert(takeOrder(0, 1) == 'CUSTOMER NEEDS A COLD COFFEE');
// assert(takeOrder(1, 0) == 'CUSTOMER NEEDS A HOT TEA');
// assert(takeOrder(1, 1) == 'CUSTOMER NEEDS A COLD TEA');
//... and so on for all combinations

/**
 * Now that you are CONFIDENT that you aren't changing anything, you can begin to work.
 *
 * The strings all start with 'CUSTOMER NEEDS A'
 *
 * Huh.
 *
 *
 * Let's extract it.
 *
 * Note that this is a very small thing, hardly worth doing.
 * But we're also pretty confident (even w/o tests) that we will
 * still have a working system.
 *
 * THIS PART IS CRUX
 */
var takeOrder = function(drink, temperature) {
  var order = 'CUSTOMER NEEDS A ';

  if (drink == 0 && temperature == 0) {
    order += 'HOT COFFEE';
  }
  else if (drink == 0 && temperature == 1) {
    order += 'COLD COFFEE';
  }
  else if (drink == 1 && temperature == 0) {
    order += 'HOT TEA';
  }
  else if (drink == 1 && temperature == 1) {
    order += 'COLD TEA';
  }
  else if (drink == 1 && temperature == 0) {
    order += 'HOT MILK';
  }
  else if (drink == 1 && temperature == 1) {
    order += 'COLD MILK';
  }
  else {
    throw "UNSUPPORTED ORDER"
  }

  return order;
}

assert(takeOrder(0, 0) == 'CUSTOMER NEEDS A HOT COFFEE');
assert(takeOrder(0, 1) == 'CUSTOMER NEEDS A COLD COFFEE');
assert(takeOrder(1, 0) == 'CUSTOMER NEEDS A HOT TEA');
assert(takeOrder(1, 1) == 'CUSTOMER NEEDS A COLD TEA');

/**
 * Now that we did this, even more duplication is presented.
 *
 * And we can start to see a path forward.
 * Let's move temperature out of the main conditional.
 *
 * We can even keep the temperature checks in there to prove how 'not worth doing'
 * these steps can be.
 */
var takeOrder = function(drink, temperature) {
  var order = 'CUSTOMER NEEDS A ';

  if (temperature == 0) {
    order += 'HOT ';
  }
  else if (temperature == 1) {
    order += 'COLD ';
  }

  if (drink == 0 && temperature == 0) {
    order += 'COFFEE';
  }
  else if (drink == 0 && temperature == 1) {
    order += 'COFFEE';
  }
  else if (drink == 1 && temperature == 0) {
    order += 'TEA';
  }
  else if (drink == 1 && temperature == 1) {
    order += 'TEA';
  }
  else if (drink == 2 && temperature == 0) {
    order += 'MILK';
  }
  else if (drink == 2 && temperature == 1) {
    order += 'MILK';
  }
  else {
    throw "UNSUPPORTED ORDER"
  }

  return order;
}

assert(takeOrder(0, 0) == 'CUSTOMER NEEDS A HOT COFFEE');
assert(takeOrder(0, 1) == 'CUSTOMER NEEDS A COLD COFFEE');
assert(takeOrder(1, 0) == 'CUSTOMER NEEDS A HOT TEA');
assert(takeOrder(1, 1) == 'CUSTOMER NEEDS A COLD TEA');

/**
 * Next, we can remove the next obvious duplication:
 *
 */
var takeOrder = function(drink, temperature) {
  var order = 'CUSTOMER NEEDS A ';

  if (temperature == 0) {
    order += 'HOT ';
  }
  else if (temperature == 1) {
    order += 'COLD ';
  }

  if (drink == 0) {
    order += 'COFFEE';
  }
  else if (drink == 1) {
    order += 'TEA';
  }
  else if (drink == 2) {
    order += 'MILK';
  }
  else {
    throw "UNSUPPORTED ORDER"
  }

  return order;
}

assert(takeOrder(0, 0) == 'CUSTOMER NEEDS A HOT COFFEE');
assert(takeOrder(0, 1) == 'CUSTOMER NEEDS A COLD COFFEE');
assert(takeOrder(1, 0) == 'CUSTOMER NEEDS A HOT TEA');
assert(takeOrder(1, 1) == 'CUSTOMER NEEDS A COLD TEA');

/**
 * NOW WE CAN IMPLEMENT OUR CHANGE!!!!!
 *
 * We can ship it with a lot of confidence.
 * If needed we can even continue improving.
 */
var takeOrder = function(drink, temperature, options) {
  var order = 'CUSTOMER NEEDS ';

  if (options == 0) {
    // No option
  }
  else if (options == 1) {
    order += 'CREAM AND ';
  }
  else if (options == 2) {
    order += 'SUGAR AND ';
  }

  if (temperature == 0) {
    order += 'A HOT ';
  }
  else {
    order += 'A COLD ';
  }

  if (drink == 0) {
    order += 'COFFEE';
  }
  else if (drink == 1) {
    order += 'TEA';
  }
  else if (drink == 2) {
    order += 'MILK';
  }
  else {
    throw "UNSUPPORTED ORDER"
  }

  return order;
}

assert(takeOrder(0, 0, 1) == 'CUSTOMER NEEDS CREAM AND A HOT COFFEE');
assert(takeOrder(1, 1, 0) == 'CUSTOMER NEEDS A COLD TEA');
assert(takeOrder(2, 1, 2) == 'CUSTOMER NEEDS SUGAR AND A COLD MILK');



/**
 * A COUPLE TECHNIQUES FOCUSING ON IMPROVING READABILITY
 *
 * - Use refactor tools
 *
 * - Renaming
 * - Extracting variable
 * - Extracting method
 */










/**
 *  RESOURCES
 *
 *  VIDEO: Jim Weirich - Decoupling Rails
 *  - https://www.youtube.com/watch?v=tg5RFeSfBM4
 *
 *     * REAL WORLD REFACTORING!!
 *
 *  VIDEO: Jim Weirich - Roman Numeral Kata
 *  - https://www.youtube.com/watch?v=WBJ3hdcM7G8
 *
 *     * Live coding that explains Red, Green, Refactor like crazy!
 *
 *  KATA: (exercise)
 *  - https://github.com/emilybache/GildedRose-Refactoring-Kata
 *
 *    * Available in most languages
 *    * Great exercise to learn testing + refactoring
 *
 *  BOOK: Refactoring by Martin Fowler
 *  - http://martinfowler.com/books/refactoring.html
 *
 *  BOOK: Working With Legacy Code by Michael Feathers
 *  - http://programmers.stackexchange.com/questions/122014/what-are-the-key-points-of-working-effectively-with-legacy-code
 *
 *    * I wish I read this a long time ago
 *
 *  WIKI: C2 WIKI
 *  - http://c2.com/cgi/wiki?WhatIsRefactoring
 *
 */


/**
 *
 * THANK YOU
 *
 *
 * GITHUB + SLIDES: www.github.com/jskulski/refactoring_talk
 * Twitter: @jonskulski
 * Email: jskulski+talks@gmail.com
 *
 */






















///---- support
function assert(condition) {
  if (!condition) {
    throw "ASSERTION FAILED";
  } else {
    console.log('success');
  }
}
