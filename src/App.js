import React, { useState } from 'react';
import "./key";
import Axios from "axios";
import './App.css';
import { RecipeTile } from './RecipeTile';

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabels, setHealthLabels] = useState("vegan")

  const YOUR_APP_ID = "e7f6eafc";
  const YOUR_APP_KEY = "a29953f6b0f8d89367958ca62029031b";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipes}>Food Recipe Plaza <span>🍔</span></h1>
      <form 
          className="app_searchFrom" onSubmit={onSubmit} >
        <input
          type="text"
          className="app_input"
          placeholder="enter ingridient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setQuery(e.target.value)} />
        <input 
          className="app_submit" 
          type="submit" 
          value="Search" 
        />
        <select className="app_healthLabels">
          <option
            value="vegan"
            onClick={() => setHealthLabels("vegan")}>
            Vegan
          </option>
          <option
            value="vegetarian"
            onClick={() => setHealthLabels("vegetarian")}>
            Vegetrian
          </option>
          <option
            value="dairy-free"
            onClick={() => setHealthLabels("dairy-free")}>
            Dairy-free
          </option>
          <option
            value="paleo"
            onClick={() => setHealthLabels("paleo")}>
            Paleo
          </option>
          <option
            value="gluten-free"
            onClick={() => setHealthLabels("gluten-free")}>
            Gluten-free
          </option>
          <option
            value="wheat-free"
            onClick={() => setHealthLabels("wheat-free")}>
            Wheat-free
          </option>
          <option
            value="low-sugar"
            onClick={() => setHealthLabels("low-sugar")}>
            Low-sugar
          </option>
          <option
            value="egg-free"
            onClick={() => setHealthLabels("egg-free")}>
            Egg-free
          </option>
          <option
            value="peanut-free"
            onClick={() => setHealthLabels("peanut-free")}>
            Peanut-free
          </option>
          <option
            value="tree-nut-free"
            onClick={() => setHealthLabels("tree-nut-free")}>
            Tree-Nut-Free
          </option>
          <option
            value="soy-free"
            onClick={() => setHealthLabels("soy-free")}>
            Soy-free
          </option>
        </select>
      </form>
      <div className="app_recipe">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} key={recipe.id} />
        })}
      </div>
    </div>
  );
}

export default App;
