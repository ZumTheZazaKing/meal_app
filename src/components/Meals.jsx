import axios from "axios";
import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import MealList from "./MealList";
import Categories from "./Categories";
import MealListCategory from "./MealListCategory";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const categories = {
  Beef: "#800000",
  Chicken: "#FFC300",
  Dessert: "#FF69B4",
  Lamb: "#654321",
  Miscellaneous: "#708090",
  Pasta: "#FFD700",
  Pork: "#F08080",
  Seafood: "#008080",
  Side: "#A9A9A9",
  Starter: "#4682B4",
  Vegan: "#228B22",
  Vegetarian: "#3CB371",
  Breakfast: "#FFA07A",
  Goat: "#B8860B",
};

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [input, setInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMealsBySearch();
  }, [input]);

  const fetchMealsBySearch = () => {
    setSelectedCategory(null);
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_BASE_MEAL_API_URL}search.php?s=${input}`)
      .then((res) => {
        let data = res.data;
        setMeals(data.meals);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!selectedCategory) return fetchMealsBySearch();
    setLoading(true);
    axios
      .get(
        `${
          import.meta.env.VITE_BASE_MEAL_API_URL
        }filter.php?c=${selectedCategory}`
      )
      .then((res) => {
        let data = res.data;
        setMeals(data.meals);
        setLoading(false);
      });
  }, [selectedCategory]);

  return (
    <div className="p-3 flex flex-col gap-4">
      <Searchbar input={input} setInput={setInput} />
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {loading ? (
        <div className="text-center p-4 w-full">
          <AiOutlineLoading3Quarters
            size={48}
            className="animate-spin text-zinc-500 mx-auto"
          />
        </div>
      ) : (
        <>
          {selectedCategory ? (
            <MealListCategory
              categories={categories}
              meals={meals}
              selectedCategory={selectedCategory}
            />
          ) : (
            <MealList categories={categories} meals={meals} />
          )}
        </>
      )}
    </div>
  );
};
export default Meals