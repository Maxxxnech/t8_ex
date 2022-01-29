import React from "react";
import "./css/Article.css";
export default function Article({ article, isOpen, handleClick }) {
  const buttonText = isOpen ? "Close" : "Open";
  return (
    <article>
      <header>
        <h2>{article.title}</h2>{" "}
        <button onClick={handleClick}>{buttonText}</button>
      </header>
      <section>{isOpen ? article.body : <hr></hr>}</section>
    </article>
  );
}
