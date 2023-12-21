import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

/*
  The main application component of Recipe web app
  This renders the app with header, recipe list, and any new recipe created by the RecipeCreate component
*/
function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  /*
    Create recipe function that adds a new recipe to the list
  */
  const createRecipe = (newRecipe) => 
    setRecipes((currentRecipes) => [
      ...currentRecipes,
      newRecipe,
    ]);

    /*
      Delete recipe function that deletes a recipe from the list
    */
    const deleteRecipe = (recipeToDelete) =>
      setRecipes((currentRecipes) => 
      currentRecipes.filter((recipe, index) => index !== recipeToDelete)
      );

  /*
    The application that gets rendered
  */
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList
        recipes={recipes}
        deleteRecipe={deleteRecipe}
      />
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
