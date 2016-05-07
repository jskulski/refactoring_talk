// Somewhere in a function...
if (user.currentAddress.state == 'NY' || (user.permanantAddress.state == 'NY' && !user.notVacationing)) {
  deposit = 5;
}


// Extracting that conditional logic into a method
function currentlyInNewYork(user) { return (user.currentAddress.state == 'NY' || (user.permanantAddress.state == 'NY' && !user.notVacationing)) }


// ...improves readability and understanding
if (currentlyInNewYork(user)) {
  deposit = 5;
}

// ...and also structure, say it lived in here
function determineRecyclingDeposit(user) {
  if (user.currentAddress.state == 'NY' || (user.permanantAddress.state == 'NY' && !user.notVacationing)) {
    return 5;
  }
  else if (user.currentAddress.state == 'AL' || (user.permanantAddress.state == 'AL' && !user.notVacation)) {
    return 0;
  }
  else if (user.currentAddress.state == 'MI' || (user.permanantAddress.state == 'MI' && !user.notVacation)) {
    return 10;
  }
  //... and on and on
}

//Step 1. Extract method, a bit different this time
// (or even reuse our first function if we needed)
function currentlyInState(stateCode, user) {
  return (user.currentAddress.state == stateCode || (user.permanantAddress.state == 'NY' && !user.notVacationing))
}

// Note that currentlyInNewYork is just a special case
function currentlyInNewYork(user) {
  return currentlyInState('NY', user)
}


// So we can even make the function nicer...
function determineRecyclingDeposit(user) {
  const depositMaps = {
    'MI': 10,
    'NY': 5,
    'AL': 0
    // ... and on and on
  };

  _.each((stateCode, deposit) => {
    if (currentlyInState(stateCode, user)) {
      return deposit;
    }
  });
}
// And now we are looking at the problem differently:
//   ...should we really looping through all the states each time?
//   ...can't we somehow just get the user's state and look it up?
// These questions were there before, but harder to see!

