import React from "react";
import RecipeView from "./RecipeView";

/*
  Displays a list of recipes that include attributes: Name, Cuisine, Photo, Rating, Ingredients, Preparation, Actions
  @param: {Object} array of recipes, {function} deleteRecipe: Deletes a recipe from the table
  @returns: rendered recipe list componenet
*/
function RecipeList({recipes, deleteRecipe}) {
  return (
    <div className="recipe-list">
      <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Rating</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        
          {recipes.map((recipe, index) => (
            <RecipeView
              deleteRecipe={() => deleteRecipe(index)}
              key={index}
              recipe={recipe}
              />
            ))}
    
      </table>
      </div>
    </div>
  );
}

export default RecipeList;
