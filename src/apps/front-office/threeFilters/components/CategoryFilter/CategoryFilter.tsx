import { useOnce } from "@mongez/react-hooks";
import { useState } from "react";
import { mealsAtom } from "../../atoms/three-filters-atom";

type category = {
  id: number;
  name: string;
};

export default function CategoryFilter() {
  const meals = mealsAtom.use("meals");
  const activeCategoryID = mealsAtom.use("activeCategory");
  const [catagories, setCatagories] = useState<category[]>([]);

  useOnce(() => {
    const catagoriesObj = {};
    meals.forEach(meal => {
      const catID = meal.category.id;

      if (!catagoriesObj[catID]) {
        catagoriesObj[catID] = {
          ...meal.category,
        };
      }
    });

    setCatagories(Object.values(catagoriesObj));
  });

  const handelCategory = categoryID => {
    mealsAtom.change("activeCategory", categoryID);
  };

  return (
    <div className="border border-gray-500 rounded-md mt-5 flex flex-col px-4 py-2 gap-2">
      <button onClick={() => handelCategory(0)} className="border-gray-500">
        Clear
      </button>
      {catagories.map((category, idx) => (
        <button
          key={idx}
          onClick={() => handelCategory(category.id)}
          className={
            category.id === activeCategoryID
              ? " border-blue-500"
              : "border-gray-500"
          }>
          {category.name}
        </button>
      ))}
    </div>
  );
}
