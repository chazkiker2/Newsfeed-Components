// @ts-check
"use strict";

import { gsap } from "gsap";

// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.
*/
const menuMaker = (arr) => {
  // Instantiate elements
  const menuDiv = document.createElement("div");
  const ul = document.createElement("ul");
  const liArr = [];
  for (let i=0; i<menuItems.length; i++) {
    liArr.push(document.createElement("li"));
    liArr[i].textContent = arr[i];
  }
  // debugger;

  // structure
  menuDiv.appendChild(ul);

  liArr.forEach( li => {
    ul.appendChild(li);
  });

  // classes
  menuDiv.classList.add("menu");

  // inner text
  

  // menu button
  const menuBtn = document.querySelector("img.menu-button");
  // menuBtn.addEventListener("click", ()=> {
  //   menuDiv.classList.toggle("menu--open");
  // });
  menuBtn.addEventListener("click", ()=> {

    if (menuDiv.classList.contains("menu--open")) {
      animateMenuOut();
      menuDiv.classList.remove("menu--open");
    } else {
      menuDiv.classList.add("menu--open");
      animateMenuIn();
    }
  });

  return menuDiv;
  
};

const header = document.querySelector("div.header");
header.appendChild(menuMaker(menuItems))

/*

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

function animateMenuOut() {
  gsap.to("div.menu", {duration: 2, x: -350});
}
function animateMenuIn() {
  gsap.to("div.menu", {duration: 2, x: 0});
}


// const rect = header.getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);
// // 0 830 75 0
// gsap.to("div.menu", {duration: 2, x: -830});