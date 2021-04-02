// your javascript file
const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

// 1. a <p> with red text that says “Hey I’m red!”
const paragraph = document.createElement('p');
paragraph.textContent = "Hey I’m red!";
paragraph.style.color = 'red';
document.body.appendChild(paragraph);

// 2. an <h3> with blue text that says “I’m a blue h3!”
const heading3 = document.createElement('h3');
heading3.textContent = "I'm a blue h3!";
heading3.style.color = "blue";
document.body.appendChild(heading3);

// 3. a <div> with a black border and pink background color 
//with the following elements inside of it:
// a. another <h1> that says “I’m in a div”
// b. a <p> that says “ME TOO!”
const content2 = document.createElement('div');
content2.classList.add('content2');
content2.style.backgroundColor = "pink";
content2.style.border = "solid #000";
document.body.appendChild(content2);
const heading1 = document.createElement('h1');
heading1.textContent = "I’m in a div";
content2.appendChild(heading1);
const paragraph1 = document.createElement('p');
paragraph1.textContent = "ME TOO!";
content2.appendChild(paragraph1);

const btn = document.querySelector('#btn');
/*
btn.addEventListener('click', () => {
    alert("Hello World");
  });

btn.addEventListener('click', function (e) {
  console.log(e.target);
});  
*/
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});  