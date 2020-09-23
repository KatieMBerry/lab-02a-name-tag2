// import functions and grab DOM elements
const userName = document.getElementById('name-input');
const nameButton = document.getElementById('name-button');
const nameTag = document.getElementById('my-name');

const myPinkButton = document.getElementById('pink-button');
const myBlueButton = document.getElementById('blue-button');
const myGreenButton = document.getElementById('green-button');
const myChosenColor = document.getElementById('my-color');

// initialize state

// console.log(nameTag);
// console.log(myBlueButton);
// console.log(myChosenColor);

// set event listeners to update state and DOM
nameButton.addEventListener('click', () => {
    const newName = userName.value;
    // console.log(newName);
    nameTag.textContent = newName;
    userName.value = '';
});

