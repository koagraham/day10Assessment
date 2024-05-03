// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".

let logInButton = document.querySelector('#auth')
function logIn() {
    if (logInButton.innerText === "Log in") {
        logInButton.innerText = "Log out"
    }
    else {
        logInButton.innerText = "Log in"
    }
}
logInButton.addEventListener('click', logIn)
// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

let alertMessage = document.querySelector('#alert-message')
let alertButton = document.querySelector('#send-alert button')
function sendAlert() {
    alert(alertMessage.value)
}
alertButton.addEventListener('click', sendAlert)
// Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-ulick to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>

let addItemButton = document.querySelector('#item-adder')
let list = document.querySelector('#list')
function addItem() {
    const p = document.createElement('li')
    p.innerText = "Item"
    list.appendChild(p)
}
addItemButton.addEventListener('dblclick', addItem)

// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

let turnRedButton = document.querySelector('#red')
let turnBlueButton = document.querySelector('#blue')
function turnRed () {
    if (document.querySelectorAll('.changes-colors')) {
        for (let i = 0; i < document.querySelectorAll('.changes-colors').length; i++) {
            document.querySelectorAll('.changes-colors')[i].style.color = 'red';
        }
    }
}

function turnBlue () {
    for (let i = 0; i < document.querySelectorAll('.changes-colors').length; i++) {
        document.querySelectorAll('.changes-colors')[i].style.color = 'blue';
    }
}
turnRedButton.addEventListener('click', turnRed)
turnBlueButton.addEventListener('click', turnBlue)
// Calculate factorial
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span
let calculateFactorialForm = document.querySelector('#factorial-calculator')
let factorialInput = document.querySelector('#factorial-input')
let result = document.querySelector('#result')
function calculateFactorial(evt) {
    evt.preventDefault()
    let res = 1
    for (let i = 1; i <= factorialInput.value; i++) {
        res *= i
    }
    result.innerText = `Result: ${res}`
}
calculateFactorialForm.addEventListener('submit', calculateFactorial)

// Validate a form
//
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is three or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than three characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..

let validateForm = document.querySelector('#recommend-word')
let feedback = document.querySelector('.form-feedback')
let input = document.querySelector('#word')
function validate(evt) {
    evt.preventDefault()
    if (input.value.split('').length >= 4) {
        feedback.innerText = `Thanks for your submission!`
        feedback.style.color = 'green';
    }
    else {
        feedback.innerText = `The word must be at least 4 characters long`
        feedback.style.color = 'red';
    }
}
validateForm.addEventListener('submit', validate)