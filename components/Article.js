// @ts-check
"use strict";

import {data} from "./ArticleData";

/*
  * COMPLETE
  >> WORKING
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/
const articleMaker = (article) => {
  // Instantiate Elements
  const articleDiv = document.createElement("div");
  const h2 = document.createElement("h2");
  const pDate = document.createElement("p");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const span = document.createElement("span");

  //Structure elements
  articleDiv.appendChild(h2);
  articleDiv.appendChild(pDate);
  articleDiv.appendChild(p1);
  articleDiv.appendChild(p2);
  articleDiv.appendChild(p3);
  articleDiv.appendChild(span);

  // add classes
  articleDiv.classList.add("article");
  pDate.classList.add("date");
  span.classList.add("expandButton");

  // textContent
  h2.textContent = article.title;
  pDate.textContent = article.date;
  p1.textContent = article.firstParagraph;
  p2.textContent = article.secondParagraph;
  p3.textContent = article.thirdParagraph;
  span.textContent = "+";

  // span event listener 
  span.addEventListener("click", () => {
    articleDiv.classList.toggle("article-open");
  });
  
  return articleDiv;
};

data.forEach(article => {
  const articlesDiv = document.querySelector("div.articles");
  articlesDiv.appendChild(articleMaker(article));
});




