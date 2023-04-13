"use strict";
let id = 5;
let company = "Google";
let isPublished = true;
let x = "";
let numbers = [1, 2, 3, 4, 5];
let arr = [1, true, { names: "codinglone" }];
let person = [1, 'Chuzzi', true];
let employee;
employee = [
    [1, 'hello'],
    [2, 'Hi'],
    [3, 'Morning'],
];
let num = 1;
num = true;
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
let cid = 1;
let customerId = cid;
function addNumber(x, y) {
    return x + y;
}
const log = (message) => {
    console.log(message);
};
const student = {
    names: "Fabrice",
    age: 21
};
student.rollNo = 2089720;
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.register = () => `${this.name} is now registered`;
        this.id = id;
        this.name = name;
    }
}
const chuzzi = new Person(1, "Fabrice");
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'codinglone', 'Tech Lead');
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Chuzzi", "codinglone"]);
numArray.push(7);
strArray.push("Javascript");
console.log(numArray);
console.log(strArray);
