import axios from "axios";
import { useStore } from "../store";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

const MealItem = ({ meal, categories, selectedCategory }) => {
  const isAuth = !!localStorage.getItem("auth_token");
  const { bookmarks, getBookmarks } = useStore();

  const save = (meal) => {
    axios
      .post(
        import.meta.env.VITE_BASE_API_URL + "/bookmarks",
        {
          meal_id: meal.idMeal,
          img_src: meal.strMealThumb,
          category: meal.strCategory,
          name: meal.strMeal,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
          },
        }
      )
      .then(() => getBookmarks());
  };

  const unsave = (meal) => {
    axios
      .delete(import.meta.env.VITE_BASE_API_URL + "/bookmarks/" + meal.id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      })
      .then(() => getBookmarks());
  };
  return (
    <div className="rounded-[10px] shadow-lg flex gap-3 items-center">
      <img
        className="rounded-l-[10px]"
        src={meal.strMealThumb}
        width={150}
        alt=""
      />
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-1">
          <div className="text-lg">
            <b>{meal.strMeal}</b>
          </div>
          <div
            style={{
              backgroundColor: categories[meal.strCategory || selectedCategory],
            }}
            className="text-sm rounded-[10px] p-2 py-0 w-fit text-white"
          >
            {meal.strCategory || selectedCategory}
          </div>
        </div>
        {isAuth &&
          (bookmarks.some((bookmark) => bookmark.idMeal == meal.idMeal) ? (
            <button
              onClick={() => unsave(meal)}
              className="p-4 text-orange-500 cursor-pointer"
            >
              <FaBookmark size={24} />
            </button>
          ) : (
            <button
              onClick={() => save(meal)}
              className="p-4 text-zinc-500 cursor-pointer"
            >
              <FaRegBookmark size={24} />
            </button>
          ))}
      </div>
    </div>
  );
};
export default MealItem