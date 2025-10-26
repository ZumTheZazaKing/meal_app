const MealList = ({meals, categories}) => {
    return (
        <div className="flex flex-col gap-3 mt-4">
            {meals.map((meal,i) => {
                return (
                    <div className="rounded-[10px] shadow-lg flex gap-3 items-center" key={i}>
                        <img className="rounded-l-[10px]" src={meal.strMealThumb} width={150} alt="" />
                        <div className="flex flex-col gap-1">
                            <div className="text-lg"><b>{meal.strMeal}</b></div>
                            <div
                                style={{ backgroundColor:categories[meal.strCategory] }}
                                className="text-sm rounded-[10px] p-2 py-0 w-fit text-white"
                            >
                                {meal.strCategory}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};
export default MealList