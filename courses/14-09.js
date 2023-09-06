"use strict";

function sayHello(a, b) {
  console.log(this.name, a + b);
}

const student = {
  name: "Easy FrontEnd",
};

// Blind
const studentSayHello = sayHello.bind(student);
studentSayHello(1, 2);

// Call
sayHello.call(student, 3, 5);

// Apply
sayHello.apply(student, [5, 10]);
