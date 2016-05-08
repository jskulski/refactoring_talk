/**
 Jenny is working on an ordering system at a café.

 The sends her system a number from the register and has to send an order to the kitchen

 The company moves fast and this was released as the MVP.
 */
function takeOrder(choice) {
  var order;

  if (choice == 0) {
    order = 'CUSTOMER NEEDS A COFFEE';
  }
  else if (choice == 1) {
    order = 'CUSTOMER NEEDS A TEA';
  }
  else if (choice == 1) {
    order = 'CUSTOMER NEEDS A MILK';
  }
  else {
    throw "CHOICE NOT SUPPORTED"
  }

  sendOrderToKitchen(order);
}

/**
 Jenny is happy. She is proud.
 But as with all things, change is in the wind.

 It's summer now, and the demand for
 iced drinks is high. Jenny leans back and thinks how to solve this problem?

 Piece of cake, she says. She needs this out yesterday, so she makes
 some concessions. She KNOWS there a better design, but the business is
 losing money.

 So she deploys the brute force approach:
 */
function takeOrder(drink, tempature) {
  var order;

  if (drink == 0 && tempature == 0) {
    order = 'CUSTOMER NEEDS A HOT COFFEE';
  }
  else if (drink == 0 && tempature == 1) {
    order = 'CUSTOMER NEEDS A COLD COFFEE';
  }
  else if (drink == 1 && tempature == 0) {
    order = 'CUSTOMER NEEDS A HOT TEA';
  }
  else if (drink == 1 && tempature == 1) {
    order = 'CUSTOMER NEEDS A COLD TEA';
  }
  else if (drink == 1 && tempature == 0) {
    order = 'CUSTOMER NEEDS A HOT MILK';
  }
  else if (drink == 1 && tempature == 1) {
    order = 'CUSTOMER NEEDS A COLD MILK';
  }
  else {
    throw "UNSUPPORTED ORDER"
  }

  sendToKitchen(order);
}

/**
 The customers clamor once more.

 The customers want to personalize their orders. Jenny gets to work.
 A few hours later, Jenny rubs her eyes and the she deploys her code.

 She now needs to send things like:
 CUSTOMER WANTS A ICED COFFEE WITH CREAM
 CUSTOMER WANTS A HOT COFFEE WITH CREAM
 CUSTOMER WANTS A HOT COFFEE WITH SUGAR

 Her head reels with all the combinations!!!
 She dozes and is gripped by a feverish dream of endless conditionals:
 */
//...
if (drink == 0 && tempature == 0 && addition == 0) {
  order = 'CUSTOMER WANTS A HOT COFFEE WITH CREAM'
}
else if (drink == 0 && tempature == 1 && addition == 0) {
  order = 'CUSTOMER WANTS A ICED COFFEE WITH CREAM'
}
else if (drink == 0 && tempature == 0 && addition == 1) {
  order = 'CUSTOMER WANTS A HOT COFFEE WITH SUGAR'
}
else if (drink == 1 && tempature == 1 && addition == 1) {
  order = 'CUSTOMER WANTS A ICED COFFEE WITH SUGAR'
}

/**
 ... Forever and ever. She wakes in a panic!

 But what can she do?
 - She can't take the system down to rewrite it.
 - She needs to have a managable system!
 What happens when they get their chocolate supplies!
 - It's just not a nice thing to work with or look at u_u

 She uses the magick of Refactoring. She knows the first rule is:

 CHANGE INTERNAL STRUCTURE w/o CHANGING EXTERNAL BEHAVIOR

 Jenny starts writing tests around her code to be confident that she
 isn't changing current behavior.
 */
expect(takeOrder(0, 0) == 'CUSTOMER WANTS A HOT COFFEE');
expect(takeOrder(0, 1) == 'CUSTOMER WANTS A COLD COFFEE');
expect(takeOrder(1, 0) == 'CUSTOMER WANTS A HOT ICED');
expect(takeOrder(1, 1) == 'CUSTOMER WANTS A COLD ICED');
//... and so on

/**
 Now that she has a test suite that will alert her if it detects an eternal change
 She figures that a nice approach would to be build the string for each option.

 The first thing she realizes that every string starts the same, so she extracts that:
 */
function takeOrder(drink, tempature) {
  var order = 'CUSTOMER NEEDS A ';

  if (drink == 0 && tempature == 0) {
    order += 'HOT COFFEE';
  }
  else if (drink == 0 && tempature == 1) {
    order += 'COLD COFFEE';
  }
  else if (drink == 1 && tempature == 0) {
    order += 'HOT TEA';
  }
  else if (drink == 1 && tempature == 1) {
    order += 'COLD TEA';
  }
  else if (drink == 1 && tempature == 0) {
    order += 'HOT MILK';
  }
  else if (drink == 1 && tempature == 1) {
    order += 'COLD MILK';
  }
  else {
    throw "UNSUPPORTED ORDER"
  }

  sendToKitchen(order);
}

/**
 Jenny runs the suite and everything is good so she:

 DEPLOYS THIS CODE TO PRODUCTION

 This is important and this is the discipline.
 By definition a Refactor. If it's not deployable you aren't confident enough
 that you aren't changing your system.

 She thinks some more and looks and thinks and then codes and
 finds her next step. Moving the tempature out of the large conditional.
 */

//...
expect(takeOrder(1, 1, 1) == 'CUSTOMER WANTS A COLD ICED WITH SUGAR');
//...

function takeOrder(drink, tempature) {
  var order = 'CUSTOMER NEEDS A ';

  if (tempature == 0) {
    order += 'HOT';
  }
  else {
    order += 'COLD';
  }

  if (drink == 0 && tempature == 0) {
    order += 'COFFEE';
  }
  else if (drink == 0 && tempature == 1) {
    order += 'COFFEE';
  }
  else if (drink == 1 && tempature == 0) {
    order += 'TEA';
  }
  else if (drink == 1 && tempature == 1) {
    order += 'TEA';
  }
  else if (drink == 1 && tempature == 0) {
    order += 'MILK';
  }
  else if (drink == 1 && tempature == 1) {
    order += 'MILK';
  }
  else {
    throw "UNSUPPORTED ORDER"
  }

  sendToKitchen(order);
}


/**
 She could have gone farther, but she deploys this.

 In real life, I would probably combine these steps in one commit.
 But it's important to start while very very very small steps.
 "almost not worth doing"...

 And quickly follows up with another deploy.
 */
function takeOrder(drink, tempature) {
  var order = 'CUSTOMER NEEDS A ';

  if (tempature == 0) {
    order += 'HOT';
  }
  else {
    order += 'COLD';
  }

  if (drink == 0) {
    order += 'COFFEE';
  }
  else if (drink == 1) {
    order += 'TEA';
  }
  else if (drink == 1) {
    order += 'MILK';
  }
  else {
    throw "UNSUPPORTED ORDER"
  }

  sendToKitchen(order);
}

/**
 She smiles wide. She considers furthur improvements, but relents.

 "It more important for the business," Jenny reminds her self,
 "to get the customers their feature than to have perfect code."

 Now that she has a cleaner (but not perfect!) code base, she sees
 a path forward. She adds more Test Cases and begins
 */
function takeOrder(drink, tempature, additions) {
  var order = 'CUSTOMER NEEDS A ';

  if (tempature == 0) {
    order += 'HOT';
  }
  else {
    order += 'COLD';
  }

  if (drink == 0) {
    order += 'COFFEE';
  }
  else if (drink == 1) {
    order += 'TEA';
  }
  else if (drink == 1) {
    order += 'MILK';
  }
  else {
    throw "UNSUPPORTED ORDER"
  }

  if (additions == 0) {
    order += ' WITH CREAM';
  }
  else if (additions == 1) {
    order += ' WITH SUGAR';
  }
  else if (additions == 2) {
    order += ' WITH CINNAMON';
  }
  else if (additions == 3) {
    order += ' WITH HONEY';
  }

  sendToKitchen(order);
}


















///--- support
function sendToKitchen() {}
function expect() {}