import React from 'react';
import "./RecipeTile.css";
import { v4 as uuidv4 } from "uuid";

export const RecipeTile = ({recipe}) => {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)
        !=null && (
        <div className="recipeTile"
        onClick={() => window.open(recipe["recipe"]["url"])}
        >
        <img className="recipeTile_img" src={recipe["recipe"] ["image"]} alt="Recipe_Image" />
          <p className="recipeTile_name" key={uuidv4()}>{recipe["recipe"] ["label"]}</p>
        </div>
    )
    )
}
