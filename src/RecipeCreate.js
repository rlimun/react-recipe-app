import React, { useState } from "react";

/*
  Recipe create component that manages the creation of a new recipe
  This renders a form at the footer with input fields for: name, cuisine, photo, rating, ingredients, and preparation
  @param {function} createRecipe: creates a new recipe
*/
function RecipeCreate({createRecipe}) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [rating, setRating] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    rating: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({...initialFormState});

  /*
    Handles the changes in the form input values
    @param {Object} target - the target to change
  */
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  };

  /*
    Handles the form submission
    @param {Object} event - the form submission event
  */
  const handleSubmit = (event) => {
    event.preventDefault(); //prevents default form behavior
    createRecipe(formData); //invokes createRecipe callback
    setFormData({...initialFormState}); //resets the form to initial state
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <footer>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required={true}
                />       
            </td>
            <td>
              <label htmlFor="cuisine">cuisine</label>
              <input
                type="text"
                id="cuisine"
                name="cuisine"
                value={formData.cuisine}
                onChange={handleChange}
                required={true}
                />
            </td>
            <td>
              <label htmlFor="photo">photo</label>
              <input
                type="url"
                id="photo"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                />
            </td>
            <td>
              <label htmlFor="rating">rating</label>
              <select
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={(e) => setRating(e.target.value)}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
            </td>
            <td>
              <label htmlFor="ingredients">ingredients</label>
              <textarea
                type="text"
                id="ingredients"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                required={true}
                />
            </td>
            <td>
              <label htmlFor="preparation">preparations</label>
              <textarea
                type="text"
                id="preparation"
                name="preparation"
                value={formData.preparation}
                onChange={handleChange}
                required={true}
                />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
      </footer>
    </form>
  );
}

export default RecipeCreate;
