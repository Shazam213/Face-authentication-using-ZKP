/*
// Events
// Select element
// addEventListener()
// what event, what to do

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

function changeColors(){
    console.log('hello');
    let hasClass = heading.classList.contains('red');

    if(hasClass){
        heading.classList.remove('red');
    }
    else{
        heading.classList.add('red');
    }
}

btn.addEventListener('click', changeColors);



// btn.addEventListener('click',function(){
//     // console.log('hey u clicked me');
//     heading.classList.add('red');
// });
*/

/*

// click - first after full action occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

const heading = document.querySelector('h2');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    console.log('you clicked me');
})

btn.addEventListener('mousedown', function(){
    console.log('down');
})

btn.addEventListener('mouseup', function(){
    console.log('up');
})

heading.addEventListener('mouseenter', function(){
    heading.classList.add('blue');
})

heading.addEventListener('mouseleave', function(){
    heading.classList.remove('blue');
})

*/

/*
// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released

const nameInput = document.getElementById('name');

// nameInput.addEventListener('keypress',function(){
//     console.log("you pressed a key");
// })
// nameInput.addEventListener('keydown',function(){
//     console.log("you pressed a key");
// })
nameInput.addEventListener('keyup',function(){
    console.dir(nameInput.value);
});
*/


/*
// event object argument e, evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
const link = document.getElementById('link');
// heading.addEventListener('click', function(){
//     heading.classList.add('blue');
// })

// but if you mispell the variable name then the property does not get applied

// to always have the element selected we will do the following

btn.addEventListener('click', function(event){
    event.currentTarget.classList.add('blue');
});

// heading.addEventListener('click', function(event){
//     console.log(event);
// })

heading.addEventListener('click', function(event){
    console.log(event.currentTarget);
})

// btn.addEventListener('click', function(event){
//     console.log(event.currentTarget);
// })

btn.addEventListener('click', function(event){
    console.log(event.currentTarget);
    console.log(this);
})

// here `this` provides a similar functionality 
// firstly - currentTarget has more properties and you should always be knowing more info
// secondly - even though this works here, it does not work for arrow functions


function someFunc(e){
    e.preventDefault();
}


link.addEventListener('click',someFunc)
*/

/*
//currentTarget - always refers to the element to which the event handler has been attached to
// target - identifies the element on which the event occured

const btns = document.querySelectorAll('.btn');
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        // console.log(e.currentTarget);
        // e.currentTarget.style.color = 'green';
        console.log('target', e.target);
        console.log('currentTarget', e.currentTarget);
        e.target.style.color = 'green';
    })
}) 
*/

/*

// DOUBT

// allows select dynamic elements
// event propogation - order the events are fired
// event bubbling - clicked element first then  bubbles up -- default
// event capturing - fires at the root and fires until reaches target

const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(e){
    console.log('current target', e.currentTarget);
    // console.log('target', e.target);
    // if(e.target.classList.contains('link')){
    //     console.log('you clicked on the link');
    // }
}

function stopPropogating(e){
    console.log('u clickd on a link');
    e.stopPropogation();
}


container.addEventListener('click', showBubbling, {capture : true});
document.addEventListener('click', showBubbling, {capture : true})
window.addEventListener('click', showBubbling, {capture : true})
list.addEventListener('click', showBubbling, {capture :true});

*/


/*

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
// const heading = document.querySelector('.heading');
// console.log(heading);

function sayHello(){
    console.log('hello there');
}

btn.addEventListener('click', function(){
    const element = document.createElement('h1');
    element.classList.add('heading');
    element.textContent = 'im inside the container';
    container.appendChild(element);
});

container.addEventListener('click', function(e){
    if(e.target.classList.contains('heading')){
        console.log('hello there');
    }
})
// heading.addEventListener('click', sayHello);

*/

/*
// submit event listener
// prevent default
// how to get a value

const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');

form.addEventListener('submit', function(e){
    e.preventDefault(); // if not used then the page refereshes
    console.log('form submit');
    console.log(name.value);
    console.log(password.value);
})

// by default we are just not sending the data but also refreshing the page
*/

/*
// Web Storage API - provided by the browser
// session storage, local storage
// setItem, getItem, removeItem, clear

// localStorage.setItem('name', 'ishaan')
// sessionStorage.setItem('name','ishaan')

localStorage.setItem('name', 'john');
localStorage.setItem('friend', 'peter');
localStorage.setItem('job','developer');
localStorage.setItem('address','street 123');

const name = localStorage.getItem('name');
console.log(name);

localStorage.removeItem('name');
const anotherName = localStorage.getItem('name');
console.log(anotherName);

localStorage.clear();
*/

// JSON.stringify(), JSON.parse()

const friends = ['john', 'peter', 'boby'];
// localStorage.setItem('friends', friends) -> stores as a string
localStorage.setItem('friends', JSON.stringify(friends))

const values = JSON.parse(localStorage.getItem('friends'));
// console.log(values[0]); -> returns 'j' 
console.log(values[2]);

let fruits;

if(localStorage.getItem('fruits')){
    fruits = JSON.parse(localStorage.getItem('fruits'));
}
else{
    fruits = [];
}

console.log(fruits);
// fruits.push('apple');
fruits.push('orange');

localStorage.setItem('fruits', JSON.stringify(fruits))