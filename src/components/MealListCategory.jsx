const MealListCategory = ({meals, categories, selectedCategory}) => {
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
                <div className="flex flex-col gap-1">
                  <div className="text-lg">
                    <b>{meal.strMeal}</b>
                  </div>
                  <div
                    style={{ backgroundColor: categories[selectedCategory] }}
                    className="text-sm rounded-[10px] p-2 py-0 w-fit text-white"
                  >
                    {selectedCategory}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
};
export default MealListCategory