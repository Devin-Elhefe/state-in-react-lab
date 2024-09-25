const IngredientList = ({ ingredients, addToBurger }) => {
    return (

        <ul>
            {ingredients.map((ingredient, index) => (
                <li key={index} style={{ backgroundColor: ingredients.color }}>
                    {ingredient.name}
                    <button onClick={() => addToBurger(ingredient)}>+</button>
                </li>

            ))};
        </ul>
    );
};
  
  export default IngredientList