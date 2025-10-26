import axios from "axios";
import Header from "../components/Header";
import { useStore } from "../store"
import { useEffect, useState } from "react";
import MealItem from "../components/MealItem";

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

const Bookmarks = () => {
    const { bookmarks, setCurrentPage } = useStore()

    useEffect(() => {
        setCurrentPage("bookmarks");
    }, []);

    return (
        <>
            <Header/>
            <div className="p-3">
                <h2 className="text-2xl font-bold text-zinc-500 mb-4">Bookmarks</h2>
                <div className="flex flex-col gap-3">
                    {bookmarks && bookmarks.map((bookmark,i) => {
                        return (
                          <MealItem
                            meal={bookmark}
                            categories={categories}
                            key={i}
                          />
                        );
                    })}
                </div>
                
            </div>
        </>
    )
};
export default Bookmarks