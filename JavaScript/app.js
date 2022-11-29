//document.write('hello world');
// alert('hello world');
//console.log('hello world)

// document.write('hello world')
// alert('hello world') // Pop-up box
// console.log('hello world')

// document.write({name:'john'})
// alert({name:'john'}) // Pop-up box
// console.log({name:'john'})

// End of the statement ar semi-colon
/* console.log("hello world"); 
console.log("hello people"); 
console.log("hello my friend peter"); 
console.log("hello susan"); */

// Variable - Most Basic Building Block
// Variables - Store, Access, Modify === Value
// Declare, Assignment Operator, Assign Value
/*
let name = "john shrimp taco VI";
let address, zip, state;
address = "101 Main Street";
zip = '660612';
state = 'CA';
name = "fish burrito"
console.log(address );
console.log(address, zip, state);
console.log(name);
*/
// can contain digits, letters, underscore, $
// must start with letter, $ or _

// no keyowrds are allowed
// cannot start with number

// case sensitive - fullname or fullName

// camelcase ot underscore

/*
let random123_$ = 'random';
console.log(random123_$); 
*/

// LET vs CONST vs VAR

// using VAR
/* var value = "some value";

// using let
let name = 'ishaan';

// using const (Constant) - cant re-assign
const lastName = "chandak";

console.log(value);
console.log(name);
console.log(lastName);
*/

// "" or ''
// if start with " end with "
// if start with ' end with '
/*
const name = 'john\'s courses are the best';
const name1 = "john's courses are the best";
console.log(name);
console.log(name1);
*/

// String Concatenation - combine string values
// `` - backticks (template strings) easier option

/*
const name = 'ishaan';
const lastName = 'shakeandbake';
let fullName = name + "  " + lastName;

console.log('hello there is your full name is : ' + fullName);
*/

/*
const website = 'google';
const url = 'https://www.' + website + '.com';
console.log(url);
*/

// Numbers
// loosely types = dont declare type

// in console log number is represented in blue
// strings are represented in black

/*
const number = 34;
let pants = 2.456;
pants = 'are great';
const number1 = 2.456;
const number2 = '2.456';
console.log(number);
console.log(pants);
console.log(number1);  // it is a number now 
console.log(number2);  // it is a string now

const add = number + number1;
const sub = number - number1;
const mul = number * number1;
const div = number/number1; 

console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
*/

// Numbers
// +=, -=, /=, *=, ++, --, %
// Modulus (%) operator returns the remainder after integer division

/*
let number = 40;
number += 5;
number += 5;
number += 5;
number += 5;
number -= 5;
number++;
number++;
number++;
number++;
number++;

const slices = 10;
const children = 3;
const amount = 10/3;
const slice_per_child  = 10%3;
console.log(slice_per_child);
console.log(amount);
console.log(number);

const random = 4+6+10*10;
const random1 = (4+6+10) * 10;
 console.log(random);
 console.log(random1);

 */

 // Implicit type conversion

 /*
 const name = "ishaan";
 const lastname = "chandak";
 const fullname = name + " " + lastname;
 console.log(fullname);

 const number = 4;
 const number2 = 10;
 const result = number+number2;
 console.log(result);

const value = name -lastname
console.log(value); // -> output is NaN

let number3 = '10';
let number4 = '23';
 number4 = 'pants';
 
// const result2 = number3 - number4;
// after changing values
const result2 = number4 + number3;
console.log(result2);
// in this case javascript performs implicit conversion 
// i.e from string to integer
// and finds that the converted value can be subtracted
// therefore it subtracts them and returns a num. value
// on using plus we get 1023 since string concatenation

const randomnumber = 13;
document.querySelector('.form').addEventListener('submit', function(e){
    e.preventDefault();
    let value = document.getElementById('amount').value;
    value = parseInt(value); // converts string to number
    console.log('input value type');
    console.log(value);
    console.log('sum of two values');
    console.log(randomnumber + value);

})
*/

/*
// Data types
// Primitive - String, Number, Boolean, Null, Undefined, Symbol(ES6)
// Object - Arrays, Functions, Objects


// typeof - operator (typeof variable) (typeof value)

// String
const text = 'some text';
// Number
const number = 45;
// Boolean
let value1 = true;
let value2 = false;
// Null
const result = null;
// Undefined
let name;

// null and undefined are similar in some aspects

console.log(typeof text);
console.log(typeof true);
console.log(typeof number);
console.log(typeof value1);
console.log(typeof value2);
console.log(typeof null);// bug in js that classifies null as an object
console.log(name);
*/

/*
// Arrays, Functions and Objects
// Arrays - [], 0 index based

const friend1 = 'anna';
const friend2 = 'anna';
const friend3 = 'anna';
const friend4 = 'anna'; 

// u can also store functions and objects in an array

const friends = ['ishaan','dev','bob','susie',45,undefined,null];
console.log(friends); 
console.log(friends[0]); 

// if u try to access an address which is not defined by an array then u will get undefined

let bestfriend = friends[2];
console.log(bestfriend);

friends[4] = 'ANNA';
console.log(friends);
console.log(friends[4]);

*/

// Funtions - declare, invoke
/*
// Function declaration
function hello(){
    //logic
    console.log('hello there bob');
    console.log('hello there anna');
    console.log('hello there susy');
}

// Function invoking
hello()
// 
hello()
// 
hello()
// console.log('hello there bob');
// console.log('hello there anna');
// console.log('hello there susy');
// // 
// console.log('hello there bob');
// console.log('hello there anna');
// console.log('hello there susy');
// //
// console.log('hello there bob');
// console.log('hello there anna');
// console.log('hello there susy');
*/


/*
// params - when declare/define
// placeholders, local vars
// arguments - when invoke/call/run
// use vars/value, multiple params, undefined

function hello(){
    //logic
    console.log('hello there bob');
    console.log('hello there anna');
    console.log('hello there susy');
}

function greet(name){
    console.log('hello there '+ name);
}


// greet bob
// hello()
greet('bob');
// greet ana
//hello()
greet('ana');
// greet susy
//hello()
greet('susy');

// passing more parameter does not result in an error
// passing less parameter results in display of undefined 

*/

/*
// return 
// default undefined, shortcuts, ignores after
// 1 inch 2,54cm

const wallheight = 80;
function calculate(value){
    const newvalue = (value *2.54);
    console.log('the value in cms is : ' + newvalue + "cms");  
    // return 'hello world';
    // return newvalue;
    return value * 2.54;
    // anything after return does not get executed
}

const width = calculate(100);
const height = calculate(wallheight);

const dimensions = [width,height];
console.log(dimensions);
// since function is not returning any value the output comes as [undefined,undefined]

*/

// expressions - another way to define a func
// create a variable, assign to FUNCTION(not value), use var
// diff - hoisting, use - arrow func, libraries

/*
function addvalues(num1, num2){
    return num1+num2;
}

const firstValue = addvalues(3,4);
const secondValue = addvalues(12,34);

// function expression
// you can either have the func name or delete the func name
// if u delete the func name then that func is called unanimous functio
const add = function (num1, num2){
    return num1+num2;
}
// const thirdvalue = add(5,6);
const values = [firstValue, secondValue, add(5,6)];
console.log(values);

// const multiply = {num1, num2} => num1*num2;
// console.log(multiply);
// exports.nameOfMethod = function(){

// }

*/

/*
// Objects - key/value pairs methods
// dot notation

const person = {
    name : 'ishaan',
    lastName : 'chandak',
    age : 40, education : false,
    married : true,
    siblings:['ana','susan','peter'],
    greeting: function(){
        console.log('hello my name is Ishaan');
    },
    // we can also write the greeting function as
    // greeting(){
    //     console.log('hello my name is Ishaan');
    // },
};

const age = person.age;
console.log(age);
person.name = 'shreya';

console.log(person.name);
console.log(person.siblings[2]);
person.greeting();
*/


/*
// Conditional Statements 
// >, <, >=, <=, ==, ===, !=, 1===

if(true){
    console.log('hello world');
}

if(2>1){
    console.log('hello world');
}

const value = true;

if(value){
    console.log('hello world');
}

const value1 = 2>1;

if(value){
    console.log('hello world');
}

// when the value is false it doesnt execute a certain part of data

const value2 = false;
// or
const value3 = 2<1;

if(value2){
    console.log('hello world');
}
else{
    console.log('hello people');
}

let num2 = 6;
let num1 = 4;

if(num1 > num2){
    console.log('first is bugger');
}
else{
    console.log('second is bigger');
}

num1 = 6
num2 = 6
let result = num1 >=num2
if(num1 > num2){
    console.log('first is bugger');
}
else if(result){
    console.log('equal');
}
else{
    console.log('second is bigger');
}


// for not value use exclaimation mark !
// !true = false
// if(!var_name) => means if value is false

// == or === -> Equality

// '6' == 6 -> true
// '6' === 6 -> true

// == -> checks only value
// === -> checks value and type
*/

/*
// Logical Operators
// (\\ - OR), (&& - AND), !

const name = 'ishaan';
const age = 24;

if(name === 'bob' || age === 24){
    console.log('hello there user');
}
else{
    console.log('wrong value');
}

if( name !== 'bob' && age === 24){
    console.log('hello the user');
}
else{
    console.log('wrong values');
}
*/

/*
// Switch
// Dice values : 1-6

const dice = 1;

switch (dice) {
    case 1:
        console.log('one');
        break;

    case 2:
        console.log('two');
        break;
    
    case 3:
        console.log('three');
        break;
    
    default:
        console.log('you did not role the dice');
        break;
}
*/

/*
// Loops
// Repeated run a block of code
// while loop

let amount = 10;
while(amount > 0){
    console.log('I have '+ amount+' dollars');
    amount--;
}

// do while loop
// runs at least once

let money = 0;
money = 12;
do{
    console.log('you have ' + money +" dollars");
     money++;
}while(money < 10)

// for loops

let i;
for(i=0; i<10;i++){
    console.log('and the number is : ' + i);
}
*/

/*
// String Properties and methods
// Wrapper string object, don't memorize methods

let text = ' Peter Jordan';
let result = text.length;
console.log(result);

console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0));
console.log(text.charAt(text.length-1));
console.log(text.indexOf('P'));
console.log(text.trim());
console.log(text.startsWith(' Peter'));
console.log(text.trim().toLowerCase().startsWith('peter'));
console.log(text.includes('eter'));
console.log(text.slice(0,2));
console.log(text.slice(-3));

// if in index of the character does not exist it returns -1
// if multiple instances of a letter are present it returns the first instance




// const person = {
//     name : 'peter', // property
//     greeting(){
//         console.log('hey, i am ishaan');
//     },
// };

// console.log(person);

// console.log(person.name);
// person.greeting();
*/

/*
// Template Literals - ES6+
// Backtick characters ``
// Interpolation ${} - insert expression(value)

const name = 'john';
const age = 25;
const sentence = "hey it's "+name+' and he is '+age+' years old';

const value = `hey it's ${name} and he is ${age} years old. and here is some simple math ${4+4} `


console.log(value);


console.log(sentence);
*/

/*
// Array Properties and Methods
let names = ['john','bobo','barry','olga','ben',2,3,4   ];

// length
console.log(names.length);
console.log(names[names.length-1]);

// concat
const lastNames = ['pepper','onion','banana'];
const allnames = names.concat(lastNames)
console.log(allnames);

//  reverse
console.log(allnames.reverse());

//unshift -> adds elements at the start
allnames.unshift('susy');
allnames.unshift('anna');
console.log(allnames);

// shift
allnames.shift();
allnames.shift();
allnames.shift();
allnames.shift();
console.log(allnames);

// Error
//push -> adds element to the last of the array
allnames.push('anna');
console.log();

//pop -> removes the last element of the array
// allnames.pop();
// allnames.pop();
// allnames.pop();
// allnames.pop();
// console.log(allnames);

//slice - mutates the original array
const specificnames = allnames.splice(0,3);
console.log(specificnames);
console.log(allnames);

*/

/*
// Arrays and for loop

const names = ['anna', 'susy', 'bob'];
const lastName = 'shakeandbake';
let newArray = [];

// for loop
for(let i =0; i < names.length ;i++){
    console.log(i);
    console.log(names[i]);
    // newArray.push(names[i])
    // backtick is imp
    const fullname = `${names[i]} ${lastName}`; 
    newArray.push(fullname)
}


console.log(names);
console.log(newArray);
*/

/*
//Functions, return, if, arrays, for loop

const gas = [20,40,100];
const food = [10,40,50];

function calculateTotal(arr){
    let total = 0;
    for(let i =0; i<arr.length;i++){
        total += arr[i];
    }

if(total > 100){
    console.log('whoa! ur spending way too much');
    return total;
}
console.log('you are got total less than 100');
    // console.log(total);
    return total;
}

const gastotal = calculateTotal(gas);
const foodtotal = calculateTotal(food);
const randomtotal = calculateTotal([200,4000,500,1]);

console.log({
    gas : gastotal,
    food : foodtotal,
    random : randomtotal,
});
*/

/*
// Reference vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null
// Arrays, Functions, Objects = object
// typeof

// when assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value

// when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references 

const number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value is ${number}`);
console.log(`the first value is ${number2}`);


let person = { name : 'ishaan'};
let person2 = person;
// person2.name = 'susie';
console.log(`name of the 1st person is : ${person.name}`);
console.log(`name of the 2nd person is : ${person2.name}`);

// to prevent this what we can do is

let person3 = { ...person}; // Copying values
person3.name = 'susie';
console.log(`name of the 3rd person is : ${person3.name}`);
*/

/*

// Null and Undefined
// both represent "no value"

// undefined = "javascript can not find value for this"

// variable without value
// missing function arguments
// missing object properties

// null - "developer sets the values"

let number = 20 + null // 20 + 0
console.log(number);
// Output -> 20

let number2 = 20 + undefined // 20 + (something with no val)
console.log(number2);
// Output -> NaN

*/

/*
// Truthy and Falsy
// "",'',0 ,-0 ,NaN ,false, null, undefined -> Falsy Values

const bool1 = true;
const bool2 = 2>1;

const text = 'ishaan';
// if the string is empty then the value is falsy 

if(text){
    console.log(`value is truthy`);
}
else{
    console.log(`value is falsy`);
}





// if(true){
//     console.log(`hey it works!`);
// }
// if(2>1){
//     console.log(`hey it also works!`);
// }

*/


/*
// unary operators - typeof

let text = `some text`;
console.log(typeof text); // operand

// binary operator - assignment

let number = 3;
let number2 = 2+5;

// ternary operator
// condition ? (if true) : (if false)

let value = 2>1;

value = 1<0;

value ? console.log('value is true') : console.log('value is false');

// if(value){
//     console.log('value is true');
// }
// else{
//     console.log('value is false');
// }
*/

/*
// Global Scope vs Local Scope
// any variable outside code block {} is said to be global scope
// can be accessed anywhere in the program
// Gotchas : name collisions, modify by mistake

let name = `bubble`;
name = `peter`;
let name1 = `john`;

function calculate(){
    console.log(name);
    name = 'orange';
    function inner(){
        name ='inner name value';
        console.log(`this is inner function ${name}`);
    }
    inner();
}
calculate();

if(true){
    console.log(name);
    name = 'pants';
}
console.log(`my name is ${name} and i m awesome`);

*/


/*
// Local scope
// can not be access from outside code blocks
// if - NOT VAR

let name = `bobo`;

function calculate(){
    const name = `john`;
    const age = 25;
    becomesGlobal = `global variable`; 
    // since no keyword was used it becomes global variable
    // therefore to prevent this use keywords
}

// console.log(age); // ReferenceError
calculate();
console.log(becomesGlobal);

if(true){
    const name = `john`;
}

{
    const name = `john`;
    const special = `special`;
}

// console.log(special); // ReferenceError
console.log(`my name is ${name} and Im awesome`);
*/

// Variable Lookup
// {} - code block

/*
const globalNumber = 5;

function add(num1,num2){
    const globalNumber = 20;
    const result = num1 + num2 + globalNumber;
    // preference is given to local variable
    // if no such variable exists in local scope then we search in the global scope
    function multiply(){
        const multiplyresult = result * globalNumber;
        console.log(multiplyresult);
        // for this globalNumber is not local 
        // if we have globalNumber = 100 
        // then this function will use  100 as the value for globalNumber instead of 20
    }
    multiply();
    return result;
}

console.log(add(3,4));
*/

/*

 // Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens
 // Functions are first class objects - stored in a variable(expression), passed as an argument to another function, return from the function(closure)

 // Higher Order Function - accepts anothher function as an argument another function as a result

 // Callback Function - passed to a another function as an argument and executed inside that function
 
// function greetMorning(name){
//     const myname = 'ishaan';
//     console.log(`good morning ${name}, my name is ${myname}`);
// }
// function greetAfternoon(name){
//     const myname = 'ishaan';
//     console.log(`good afternoon ${name}, my name is ${myname}`);
// }

function morning(name){
    // console.log(`good morning bob`);
    return `good morning ${name.toUpperCase()}`;
}
function afternoon(name){
    // console.log(`good morning bob`);
    return `good afternoon ${name.repeat(3)}`;
    // .repeat(numerical_val) -> repeats the string the number of time the value has been specified
}

function greet(name,cb){
    const myName = 'john';
    console.log(`${cb(name)}, my name is ${myName}`);
}

greet('bobo',morning);
greet('peter',afternoon); 

// We dont want to invoke the function in the function call, we want to pass it as reference

*/

// Powerful Array Methods
// forEach, map, filter, find, reduce
// Iterate over array - no for loop req
// Accept CALLBACK func as an argument, calls Callback against each item in a array. Reference Item in the Callback Parameter

// const numbers = [0,1,2,3,4];

// // show all numbers

// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }

/*

// forEach
// does not return any value

const people = [
    {name:'bob', age:20, position:'developer'},
    {name:'peter', age:25, position:'designer'},
    {name:'susy', age:30, position:'the boss lady'}
];

// two ways to pass the callback function

function showPerson(person){
    console.log(person.position.toUpperCase());
}

// people.forEach(showPerson);

people.forEach(function(item){
    console.log(item.position.toUpperCase());
});

*/

/*
// map
// does return a new array
// does not change size of original array
// uses values from original array when making new one

const people = [
    {name:'bob', age:20, position:'developer'},
    {name:'peter', age:25, position:'designer'},
    {name:'susy', age:30, position:'the boss'},
    {name:'anna', age:35, position:'the boss'}
];

const ages = people.map(function(person){
    return person.age + 20;
});
console.log(ages);
const newPeople = people.map(function(person){
    return {firstName : person.name.toUpperCase(),
    oldAge : person.age + 20,};
})
console.log(newPeople);

const names = people.map(function(person){
    return `<h1>${person.name}</h1>`
})
// console.log(names.join(''));

document.body.innerHTML = names.join('');
console.log(names);
*/

/*
// filter
// does return a new array
// can manipulate the size of new array
// returns based on condition
// if no items satisfy the condition empty array is returned

const people = [
    {name:'bob', age:20, position:'developer'},
    {name:'peter', age:25, position:'designer'},
    {name:'susy', age:30, position:'the boss'},
    {name:'anna', age:35, position:'the boss'}
];

const youngPeople = people.filter(function(person){
    return person.age <= 25
})

const developers = people.filter(function(person){
    return person.position === 'developer';
})
console.log(developers);
console.log(youngPeople);
*/

/*
// find
// returns single instance - (in this case an object)
// returns first match, if no match -> undefined
// great for getting unique value

const people = [
    {name:'bob', age:20, position:'developer', id:1},
    {name:'peter', age:25, position:'designer',id:2},
    {name:'susy', age:30, position:'the boss', id:3},
    {name:'anna', age:35, position:'the boss',id:4}
];

const person = people.find(function(person){
    return person.id === 3;
})

const names = ['bob','peter','susy'];
console.log(names.find(function(name){
    return name === 'bob';
}));

console.log(person);
*/

// In case of filter we get an array so we have to use indexing to access elements while when we are using find we get a single instance therefore no indexing is required

/*
// reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter

const people = [
    {name:'bob', age:20, position:'developer', id:1, salary : 200},
    {name:'peter', age:25, position:'designer',id:2, salary : 300},
    {name:'susy', age:30, position:'the boss', id:3, salary : 500},
    {name:'anna', age:35, position:'the boss',id:4, salary : 500}
];

const total = people.reduce(function(acc,currItem){
    console.log(`total : ${acc}`);
    console.log(`current money : ${currItem.salary}`);
    acc += currItem.salary;
    return acc; // if you dont return acc then the value for all other iterations will be undefined that is why it is so imp to return the accumulator(acc)
},0)
// here 0 is the starting value of accumulator

console.log(total)
*/

/*

// Maths
// Standard built-in Objects - always available


// const number = 4.56789;
// let result = Math.floor(number); // u can also pass number
// const number = 4.56789;
// let result = Math.ceil(number); // u can also pass number
// const number = 4.56789;
// let result = Math.sqrt(number); // u can also pass number
// const number = 4.56789;
// let result = Math.PI;

// const result = Math.min(4,5,6,7,9);
// const result = Math.max(4,5,6,7,9);

let result = Math.random(); // values between 0 and 1, excluding 1
result = Math.random()*10; // values between 0 and 10
result = Math.floor(Math.random()*10); // integral numbers from 0 - 9
result = Math.ceil(Math.random()*10); // integral numbers from 1 - 10
console.log(result);

*/
/*

// Date
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const date = new Date();
const month = date.getMonth();
console.log(date);
console.log(month); // we need to have a reference like months to have the actual value like jan, feb...
console.log(months[month]);
const day = date.getDay();
console.log(day); // we need to have a reference like months to have the actual value like mon, tues...
console.log(days[day]);
console.log(date.getDate());
console.log(date.getFullYear());

const sent = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`;
console.log(sent);

document.body.innerHTML = sent;

*/

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
