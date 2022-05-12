import React, { useState } from "react";


// TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
// TODO: Add the required input and textarea form elements. ** no type here **
// TODO: Add the required submit and change handlers

function RecipeCreate({recipes, setRecipes}) {

  const initialFormState = {
    name: "Name",
    cuisine: "Cuisine",
    photo: "URL",
    ingredients: "Ingredients",
    preparation: "Preparation",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const contentHandler = ({ target }) => {
    let data = {...formData,[target.name]: target.value}
    setFormData(data);
  };

  const createHandler = (event) => {
    event.preventDefault();
    setRecipes([...recipes, formData])
    setFormData({ ...initialFormState })
  };
  
  return (
    <form name="create" onSubmit={createHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"              
                name="name"
                type="text"
                onChange={contentHandler}
                value={formData.name} 
              />
            </td>
            <td>
              <input
                id="cuisne"              
                name="cuisine"
                type="text"
                onChange={contentHandler}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                id="photo"              
                name="photo"
                type="url"
                onChange={contentHandler}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                id="ingredients"              
                name="ingredients"
                rows={2}
                onChange={contentHandler}
                value={formData.ingredients}
              />
            </td>
            <td>
              <textarea
                id="preparation"              
                name="preparation"
                rows={2}
                onChange={contentHandler}
                value={formData.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
