import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { useEffect } from "react";
import Ui from "./Ui";

function App() {
  const APP_ID = "";
  const APP_KEY = "";
  const [receipes, setReceipe] = useState([]);
  const [search, setSearch] = useState(" ");
  const [query, setQuery] = useState("banana");

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setReceipe(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const clicky = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch(" ");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={clicky}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
          size="50"
        />

        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="back">
        {receipes.map((receipe) => (
          <Ui
            key={receipe.recipe.label}
            title={receipe.recipe.label}
            calories={receipe.recipe.calories}
            image={receipe.recipe.image}
            ingredients={receipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
