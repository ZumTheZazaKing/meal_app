import { FaRegBookmark } from "react-icons/fa";

const MealList = ({ meals, categories }) => {
  const isAuth = !!localStorage.getItem("auth_token");

  return (
    <div className="flex flex-col gap-3 ">
      {meals &&
        meals.map((meal, i) => {
          return (
            <div
              className="rounded-[10px] shadow-lg flex gap-3 items-center"
              key={i}
            >
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
                    style={{ backgroundColor: categories[meal.strCategory] }}
                    className="text-sm rounded-[10px] p-2 py-0 w-fit text-white"
                  >
                    {meal.strCategory}
                  </div>
                </div>
                {isAuth && (
                  <button className="p-4 text-zinc-500 cursor-pointer">
                    <FaRegBookmark size={24} />
                  </button>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default MealList;
