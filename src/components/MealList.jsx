import MealItem from "./MealItem";

const MealList = ({ meals, categories, selectedCategory }) => {
  return (
    <div className="flex flex-col gap-3 ">
      {meals &&
        meals.map((meal, i) => {
          return (
            <MealItem
              meal={meal}
              categories={categories}
              key={i}
              selectedCategory={selectedCategory}
            />
          );
        })}
    </div>
  );
};
export default MealList;
