console.log(2);
console.log(Math.random()); //generates a random number from 0 to 1
console.log(Math.random() * 50); //generates a random number from 0 to 50
console.log(Math.floor(Math.random() * 50)); // Prints a random whole number between 0 and 50

function alertShit() { //function declarion
    alert('YESSIR');
}

const variableName = function(parameter = null) {
    console.log('this is a function');
};
variableName('ye');

const plantNeedsWater = (day) => { //Arrow function
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };

const plantNeedsWater = day => day === 'Wednesday' ? true : false; //Same Arrow function
