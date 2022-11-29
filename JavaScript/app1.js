/*

// DOM -> Document Object Model

// similar to css

// select the element or group of elements that you want to affect
// Decide the effect we want to apply to the6 selection

// many diff ways

document.body.style.backgroundColor = 'blue';
document.body.style.color = 'yellow';
document.getElementById('btn').style.color = 'red';

// assign to a variable

const element = document.getElementById('element');

// do something

document.querySelector('element'); // do something

// window object
// console.log(window);

// returns a node obj or a node list, which is an arraylike object

const btn = document.getElementById('btn');
const name = btn.nodeName;
const css = btn.style;

console.log(btn);
console.log(name);
console.log(css);

*/

/*

// Window Object = browser api
// document
// console.dir

// console.log(window);
// console.log(document);

console.dir(document); // properties and functions ka idea dene we use console.dir instead of console.log

*/

/*
// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

// getElementById('element')

const h1 = document.getElementById('title');
h1.style.color = 'red';

const btn = document.getElementById('btn');

// document.getElementById('btn').style.backgroundColor = 'blue';
// document.getElementById('btn').style.color = 'white';

btn.style.backgroundColor= 'blue';
btn.style.color='white';
*/

/*
// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection\

// getElementByTagName('tagname');
// node-list = arraylike objecct
// index, lenght property but no array methods

const headings = document.getElementsByTagName('h2');
console.log(headings);
// console.log(headings.length);
headings[0].style.color='red';
const items = document.getElementsByTagName('li');
// items.array.forEach(function(item){
//     console.log(item);
// });
// error since items is not an array it is node-list thus it does not have all the features

items[2].style.color = 'orange';

const betterItems = [...items];
betterItems.forEach(function(item){
    // console.log(item);
});

console.log(items);
console.log(betterItems);
*/

/*
// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

// getElementsByClassName('classname');

// node-list = array-like obj
// index, length property but not array methods

const listItems = document.getElementsByClassName('special');
console.log(listItems);
listItems[1].style.color = 'blue';
*/

/*
// querySelector('any css'); - selects single
// querySelectorAll('any css') - selects all

const result = document.querySelector('#result');
result.style.backgroundColor = 'blue';

const item = document.querySelector('.special');
console.log(item);

const lastItem = document.querySelector('li:last-child');
console.log(lastItem);

const list = document.querySelectorAll('.special');
console.log(list);

list.forEach(function(item){
    console.log(item);
    item.style.color = 'yellow';
})
*/


/*
// childNodes - returns all childNodes including whitespace which is treated as a text node

// children
// firstChild
// lastChild

const result = document.querySelector('#result');
const allChildren = result.childNodes; // also takes in account the whitespaces

console.log(allChildren);

const children = result.children;
console.log(children);
console.log();
console.log(result.firstChild);
console.log(result.lastChild);
*/

/*
// parentElement

const heading = document.querySelector('h2');
const parent = heading.parentElement;
parent.style.color = 'red';
*/

/*

// previousSibling
// nextSibling
// return whitespace

const first = document.querySelector('.first');
console.log(first);

// const second = first.nextSibling; // it returns a whitesapce on applying only one nextSibling

const second = (first.nextSibling.nextSibling.style.color = 'red');

const last = document.querySelector('#last');
const third = last.previousSibling.previousSibling;
console.log(third);
console.log(last.nextSibling.nextSibling);
console.log(last.previousElementSibling);

// previousElementSibling - skips the whiitespaces and returns item directly
// nextELementSibling -llly from above

*/

/*

// nodeValue -> Extra careful
// textContent

const item = document.getElementById('special');
const value = item.firstChild.nodeValue;
console.log(value);
console.log(item.childNodes);
console.log(item.childNodes[0].nodeValue);

const easyValue = item.textContent;

console.log(easyValue);

*/

/*

// getAttribute();
// setAttribute();


const first = document.querySelector('.first');
const classValue = first.getAttribute('class');
const classValue1 = first.getAttribute('id');
console.log(classValue);
console.log(classValue1);

const link = document.getElementById('link');
const showLink = link.getAttribute('href');
console.log(showLink);

const last = link.nextElementSibling;
last.setAttribute('class','first');
last.textContent = ' i also have a class of first';       
// dynamically adding class of first

const links = document.querySelectorAll('.first');
console.log(links);

*/

/*

// className
// classList

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
 
const classValue = first.className;
// console.log(classValue);

// second.className = 'colors';
// second.className = 'text';

second.className = 'colors text';

// third.classList.add('colors');
// third.classList.add('text');

third.classList.add('colors', 'text');

third.classList.remove('text');

let result = third.classList.contains('text')

if(result){
    console.log("has the class");
}
else{
    console.log('does not have class');
}

*/

/*
// createElement('element');
// createTextNode('text content');
// element.appendChild(childElement);

// replaceChild('new','old');

const result = document.querySelector('#result');
const first = document.querySelector('.red')
// create empty element

const bodyDiv = document.createElement('div');

// create text node

const text = document.createTextNode('a simple body div');

bodyDiv.appendChild(text);
// document.body.appendChild(bodyDiv);
document.body.insertBefore(bodyDiv,result);
// result element

const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');
// result.appendChild(heading);
result.insertBefore(heading,first);

const smallHeading = document.createElement('h6');
const samllText = document.createTextNode('Im small heading text')
smallHeading.classList.add('red');
smallHeading.appendChild(samllText);
document.body.replaceChild(smallHeading,bodyDiv);
console.log(result.children);

*/

/*
// prepend
// innerText

const heading = document.createElement('h2');
heading.innerText = 'i am a dynamic heading';

document.body.prepend(heading);

*/

/*

// remove
// removeChild


const result = document.querySelector("#result");
// result.remove();
// const heading = document.querySelector("h1"); -> this returns the first instance of h1 

const heading = result.querySelector('h1');
result.removeChild(heading);
console.log(heading);

*/

/*

// innerHTML
// textContent

const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

console.log(div.textContent);
console.log(list.innerHTML)
console.log(list.textContent)

const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">list item</li>
        <li>list item</li> <li> list item</li>`;

document.body.appendChild(ul);

div.textContent = 'hello world';
div.innerHTML = 'helllo people';

// NO DIFF
// Diff comes when we want to add complete HTML structure like we did for ul
// In text Content we can't do the same

*/

// CSS

const random = document.querySelector('.random');
// console.log(random.style);
// random.style.backgroundColor = 'blue';
// random.style.color = 'white';
// random.style.fontSize = '3rem';
// random.style.textTransform = 'capitalize';

random.classList.add('title');