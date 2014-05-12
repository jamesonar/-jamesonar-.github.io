// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.
//  2.


// 0. "YOU SIGNED... WHO?!"
var lindsayLohan = {
  name: "Lindsay Lohan",
  age: 30, 
  quote: "I'm sober!"
};

var seanPenn = {
  name: "Sean Penn",
  age: 55,
  quote: "I'm not sober"
};

var adamSandler = {
  name: "Adam Sandler",
  age: 47, 
  quote: "That's your home.  Are you too good for your home!"
};

var kristenBell = {
  name: "Kristen Bell",
  age: 33,
  quote: "Do you wanna build a snowman?"
};

var jimCarrey = {
  name: "Jim Carrey",
  age: 52,
  quote: "...so you're telling me there's a chance?  YEAH!"
};
// 1. "Here they Come!"

var list = [];
list.push(jimCarrey, kristenBell, adamSandler, seanPenn, lindsayLohan);

// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

function Client(name, age, quote) {
    this.name = name;
    this.age = age;
    this.quote = quote;
};




var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

list.push(shooterMcGavin);



// 3. "SHOW 'EM OFF!"

list.forEach(function(entry) {
  console.log(entry.name),
  console.log(entry.age),
  console.log(entry.quote)
});



// 4. "But wait, there's more!"

jimCarrey.showQuote = function() {
    console.log(jimCarrey.quote);
};

jimCarrey.showQuote();

// 5.  ** BONUS **


//  6.  Your Reflection:
