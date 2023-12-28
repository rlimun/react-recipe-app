import React, { useState } from "react";

/*
  Recipe view component that displays a single recipe with attributes: name, cuisine, photo, ingredients, preparation
  @param {Object} recipe: recipe, {function} deleteRecipe: deletes a recipe
*/
function RecipeView({ recipe, deleteRecipe }) {
  return (
      <tr>
      <td><p name="name">{(recipe.name)}</p></td>
      <td><p name="cuisine">{(recipe.cuisine)}</p></td>
        <td>{(<img alt={recipe.photo} src={recipe.photo} />)}</td> 
        <td className="content_td"><p>{(recipe.ingredients)}</p></td>
        <td className="content_td"><p>{(recipe.preparation)}</p></td>
        <td>
          <button name="delete" onClick={deleteRecipe}>
            Delete
          </button>
        </td>
      </tr>
  );
}

export default RecipeView;
