import { atom } from "@mongez/react-atom";

type Meal = {
  category: {
    id: number;
    name: string;
  };
  name: string;
  price: number;
};

type FilteredMealsAtom = {
  meals: Meal[];
  filteredMealsList: Meal[];
  activeCategory: number;
  search: string;
  price: [number, number];
};

const meals: Meal[] = [
  { category: { id: 1, name: "Drinks" }, name: "Pancakes", price: 9.99 },
  {
    category: { id: 2, name: "Meat" },
    name: "Chicken Caesar Salad",
    price: 12.99,
  },
  {
    category: { id: 3, name: "Desserts" },
    name: "Grilled Salmon",
    price: 18.99,
  },
  { category: { id: 1, name: "Drinks" }, name: "Fruit Bowl", price: 5.99 },
  { category: { id: 2, name: "Meat" }, name: "Chocolate Cake", price: 8.99 },
  { category: { id: 1, name: "Drinks" }, name: "Omelette", price: 10.99 },
  { category: { id: 2, name: "Meat" }, name: "Vegetarian Wrap", price: 11.99 },
  {
    category: { id: 3, name: "Desserts" },
    name: "Beef Stir-Fry",
    price: 15.99,
  },
  { category: { id: 1, name: "Drinks" }, name: "Yogurt Parfait", price: 6.99 },
  { category: { id: 2, name: "Meat" }, name: "Cheesecake", price: 7.99 },
];

export const mealsAtom = atom<FilteredMealsAtom>({
  key: "meals",
  beforeUpdate: data => {
    const { search, activeCategory, meals, price } = data;

    if (!search && !activeCategory && !price[0] && !price[1]) {
      data.filteredMealsList = meals;
    } else {
      data.filteredMealsList = meals.filter(meal => {
        // filter by search

        if (search) {
          const found = meal.name.match(new RegExp(search, "i"));
          if (!found) return false;
        }

        // filter by category

        if (activeCategory) {
          if (activeCategory !== meal.category.id) return false;
        }

        if (price) {
          if (price[0] && price[1]) {
            if (meal.price < price[0] || meal.price > price[1]) return false;
          } else if (price[0]) {
            if (meal.price < price[0]) return false;
          }
        }

        return true;
      });
    }
    return data;
  },
  default: {
    meals: meals,
    filteredMealsList: meals,
    search: "",
    activeCategory: 0,
    price: [0, 0],
  },
});
