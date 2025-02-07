import React, { useState } from 'react'

function RecipeManager() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({ name:'', ingredients:'', instructions:''});

  function handleChange(e) {
    const { name, value } = e.target;
    setNewRecipe((r) => ({ ...r, [name]: value }));
  }

  function addRecipe() {
    const { name, ingredients, instructions } = newRecipe;

    if (name.trim() !== '' && ingredients.trim() !== '' && instructions.trim() !== '') {
      setRecipes((r) => [...r, { id: Date.now(), name, ingredients, instructions }])
      setNewRecipe({ name: '', ingredients: '', instructions: '' });
    }
  }
  function deleteRecipe(id) {
    setRecipes((r) => r.filter((recipe) => recipe.id !== id));
  }

  return (
    <div className='recipe-manager'>
      <h1>Recipe Manager</h1>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newRecipe.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="ingredients"
          placeholder="Ingredients"
          value={newRecipe.ingredients}
          onChange={handleChange}
        />
        <textarea
          name="instructions"
          placeholder="Instructions"
          value={newRecipe.instructions}
          onChange={handleChange}
        />
        <button onClick={addRecipe}>Add Recipe</button>
      </div>
      <ol>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            {recipe.name}<br/>
            Ingredients: {recipe.ingredients}<br/>
            Instructions: {recipe.instructions}<br/>
            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button><br/><br/>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default RecipeManager
