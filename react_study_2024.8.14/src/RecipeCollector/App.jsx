import React, { useState}  from "react";

function App() {
  const [recipes, setRecipes] = useState([]);

  const [newRecipe, setNewRecipe] = useState("");

  const [newDetails, setNewDetails] = useState("");

  const [showDetails, setShowDetails] = useState(null);

  const addRecipe = (e) => {
    e.preventDefault();
    if (!newRecipe.trim()) return;
    setRecipes([...recipes, { id: Date.now(), name: newRecipe, details: newDetails }]);
    setNewRecipe("");
    setNewDetails("");
  };

  return (
    <div className="app-container">
      <h2>料理レシピ共有アプリ</h2>
      <form onSubmit={addRecipe}>
        <input 
          type="text" 
          className="recipe-input" 
          placeholder="新しいレシピ名を追加..."
          value={newRecipe}
          onChange={(e) => setNewRecipe(e.target.value)}
        />
        <textarea 
          className="recipe-details-input" 
          placeholder="レシピの詳細入力..." 
          value={newDetails}
          onChange={(e) => setNewDetails(e.target.value)}>
        </textarea>
        <button type="submit" className="add-recipe-btn">レシピを追加</button>
      </form>
      <ul className="recipe-list">
        {recipes.map(recipe => (
          <li
            key={recipe.id}
            className="recipe-item"
            onClick={() => setShowDetails(recipe.id === showDetails ? null : recipe.id) }
          >
            {recipe.name}
          </li>
        ))}
      </ul>
      {showDetails && (
        <p className="recipe-details">
          {recipes.find(recipe => recipe.id === showDetails)?.details || "詳細がありません。"}
        </p>
      )}
      <div className="recipe-count">レシピ総数: {recipes.length}</div>
    </div>
  );
}

export default App;