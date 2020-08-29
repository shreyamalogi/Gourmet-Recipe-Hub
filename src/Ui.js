import React from "react";
import "./styles.css";

function Ui({ title, calories, image, ingredients }) {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <h3>Recipe</h3>
      <ul>
        {ingredients.map(ingredient => (
          <li>
            {ingredient.text}
            <br />
          </li>
        ))}
      </ul>
      <p>
        <b>Calories:</b> {calories}
      </p>
      <img src={image} alt="not rendered" />
    </div>
  );
}
export default Ui;
