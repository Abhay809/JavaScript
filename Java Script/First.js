console.log("Abhay Mittal") // console.log to print on console
console.log("first day of learning js!!");

// variables
name = "Abhay Miital";
age  = 49;
price = 44.56;
x = null;  // no value in x variable  // meaning:= we know that it has a empty value
y = undefined;  // both null and undefined are different  // meaning:= we don't know what is inside the varible
isFollow = true;  // boolean type value
console.log(name);
console.log(price);
console.log(x);
console.log(isFollow);

// javascript is a dynamically typed language
// we donot require to declare the type of a variable in it
// On runtime it will automatically calculte which type of datatype variable is

// variable rules
fullname = "Abhay Mittal";
fullName = "Shubham Mittal";
console.log(fullname);
console.log(fullName);

// full name = "abhay mittal";  not allowed
// fullname$,fullname_,fullname123 are allowed
// $fullname, _fullname are allowed but 123fullname is not

// reserverd words
// console = "abhay mittal";
// console.log(console);  give an error 
Console = "abhay Mital";
console.log(Console);

// fullName - camelcase - we generally use

// var,let,const 
//var
var age = 34;
var age = 45;
var age = 78;
console.log(age);
// var is older version, in it we can re-declare a variable

// we use let instead of it
let age1 = 56;
// let age1 = 78;   // error
age1 = 45;
age1 = 34;
console.log(age1); 

// const - we can not redeclare and cannot update
const age2 = 78;
console.log(age2);
const PI = 3.14;
console.log(PI);

let b;
console.log(b);  // output - undefined

// const c;
// console.log(c);  // error - missing initializer

// var = global scope
// let = block scope
// const = block scope


//
// Data type in js - Number, String, Boolean, undefined, Null, BigInt, Symbol

// Number data type
let price1 = 50;
console.log(price1);

// String data type
let fullName1 = "Abhay Mittal";
console.log(fullName1);
