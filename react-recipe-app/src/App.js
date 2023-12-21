import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const createRecipe = (newRecipe) => 
    setRecipes((currentRecipes) => [
      newRecipe,
      ...currentRecipes,
    ]);

    const deleteRecipe = (recipeToDelete) =>
      setRecipes((currentRecipes) => 
      currentRecipes.filter((recipe, index) => index !== recipeToDelete)
      );
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeCreate createRecipe={createRecipe}/>
      <RecipeList
        recipes={recipes}
        deleteRecipe={deleteRecipe}
      />
    </div>
  );
}

export default App;
