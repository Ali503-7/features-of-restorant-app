import { mealsAtom } from "../../atoms/three-filters-atom";

export default function Data() {
  const data = mealsAtom.use("filteredMealsList");
  return (
    <div className="text-left grid grid-cols-2 gap-2 h-fit">
      {data.map(meal => (
        <div key={meal.name} className="border rounded-xl p-3 h-fit">
          {meal.category.name} - {meal.name} - {meal.price}
        </div>
      ))}
    </div>
  );
}
