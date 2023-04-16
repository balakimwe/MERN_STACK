// // GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// // var example;
// // console.log(example); // logs undefined
// // example = "I'm the example!";

//1
console.log(hello);
var hello = "world";

//Hoisting
var hello;
console.log(hello);
var hello = "world";

//2
var needle = "haystack";
test();
function test() {
  var needle = "magnet";
  console.log(needle);
}

//Hoisting
var needle = "haystack";
function test() {}
test();
var needle = "magnet";
console.log(needle);

//3
var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan);

//Hoisting
var brendan = "super cool";
function print() {
  brendan = "only okay";
}
print();
brendan = "super cool";
console.log(brendan);

//4
var food = "chicken";
console.log(food);
eat();
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
}

//Hoisting
var food = "chicken";
console.log(food);
eat();
function eat() {
  var food = "gone";
}
eat();
food = "half-chicken";
console.log(food);

//5
mean();
console.log(food);
var mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};
console.log(food);

//Hoisting
var food = "fish";
var mean = function () {
  food = "chicken";
  console.log(food);
};
mean();
food = "fish";
console.log(food);

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);

//Hoisting
console.log(genre);
var genre = "disco";
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
rewind();
genre = "disco";
console.log(genre);

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);

//Hoisting
dojo = "san jose";
console.log(dojo);
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
learn();
dojo = "san jose";
console.log(dojo);

//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}

//Hoisting
function makeDojo(myname, students) {
  const dojo = {};
  dojo.myname = myname;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
makeDojo(myname, students);
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
