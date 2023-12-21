import { mealsAtom } from "../../atoms/three-filters-atom";

export default function SearchFilter() {
  const handelSearchInput = e => {
    const value = e.target.value.trim();

    mealsAtom.change("search", value);
  };

  return (
    <input
      type="text"
      name="searchMeal"
      id="searchMeal"
      onChange={e => handelSearchInput(e)}
      className="bg-transparent border border-gray-400 rounded-md px-3 py-1.5 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm text-gray-300"
      placeholder="Search Meal"
    />
  );
}
