import axios from "axios";
import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import MealList from "./MealList";

const categories = {
  "Beef": "#800000",
  "Chicken": "#FFC300",
  "Dessert": "#FF69B4",
  "Lamb": "#654321",
  "Miscellaneous": "#708090",
  "Pasta": "#FFD700",
  "Pork": "#F08080",
  "Seafood": "#008080",
  "Side": "#A9A9A9",
  "Starter": "#4682B4",
  "Vegan": "#228B22",
  "Vegetarian": "#3CB371",
  "Breakfast": "#FFA07A",
  "Goat": "#B8860B"
}

const Meals = () => {

    const [meals, setMeals] = useState([])
    const [input, setInput] = useState("")

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_MEAL_API_URL}search.php?s=${input}`)
        .then(res => {
            let data = res.data
            console.log(data.meals)
            setMeals(data.meals)
        })
    },[input])

    return (
        <div className="p-3">
            <Searchbar input={input} setInput={setInput}/>
            <MealList categories={categories} meals={meals}/>
        </div>
    )
};
export default Meals