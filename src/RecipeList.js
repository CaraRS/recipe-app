import React from "react";
import RecipeItem from "./RecipeItem";

// TODO: Display the list of recipes using the structure of table that is provided.
// TODO: Create at least one additional component that is used by this component.
// TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

function RecipeList({ recipes, deleteRecipe }) {
  
  //console.log({recipes})
  const recipeRow = recipes.map((recipe, index) => ( 
    <RecipeItem 
      key={index}
      recipe={recipe}
      deleteRecipe={() => deleteRecipe(index)}
    />
  ))

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          
          {recipeRow}
        
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;