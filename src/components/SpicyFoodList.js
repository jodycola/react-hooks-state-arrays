import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filter, setFilter] = useState("All")

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArr = [...foods, newFood]
    setFoods(newFoodArr)
  }
  // Remove from foodList 
  // function handleClick(id) {
  //   const newFoodArr = foods.filter((food) => food.id !== id)
  //   setFoods(newFoodArr)
  // }

  // Increment heatLevel by 1
  function handleClick(id) {
    const newFoodArr = foods.map((food) => {
      if (food.id === id) {
      return {
        ...food,
        heatLevel : food.heatLevel + 1,
      }
    } else {
      return food
    }
  })
    setFoods(newFoodArr)
  }


  const displayFood = foods.filter((food) => {
    if (filter === "All") {
      return true
    } else {
      return food.cuisine === filter
    }
    })

    const foodList = displayFood.map((food) => (
      <li key={food.id} onClick={() => handleClick(food.id)}>
        {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
      </li>
    ))

  function handleFilterChange(event) {
    setFilter(event.target.value)
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    <select name="filter" onChange={handleFilterChange}>
      <option value="All">All</option>
      <option value="American">American</option>
      <option value="Sichuan">Sichuan</option>
      <option value="Thai">Thai</option>
      <option value="Mexican">Mexican</option>
    </select>;
    </div>
  );
}

export default SpicyFoodList;
