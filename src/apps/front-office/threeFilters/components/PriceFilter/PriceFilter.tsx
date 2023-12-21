import { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { mealsAtom } from "../../atoms/three-filters-atom";

export default function PriceFilter() {
  const [priceData, setPriceData] = useState([0, 0]);
  const [value, setValue] = useState([0, 0]);
  const meals = mealsAtom.use("meals");

  useEffect(() => {
    let minPrice = 0;
    let maxPrice = 0;

    meals.map(meal => {
      if (!minPrice) {
        minPrice = meal.price;
      } else if (meal.price < minPrice) {
        minPrice = meal.price;
      }

      if (!maxPrice) {
        maxPrice = meal.price;
      } else if (meal.price > maxPrice) {
        maxPrice = meal.price;
      }
    });

    setPriceData([minPrice, maxPrice]);
    setValue([minPrice, maxPrice]);
  }, [meals]);

  const handelPrice = price => {
    setValue(price);
    mealsAtom.change("price", price);
  };

  return (
    <div className="mt-5">
      <RangeSlider
        min={priceData[0]}
        max={priceData[1]}
        value={value}
        onInput={handelPrice}
      />
      <div className="mt-3">{value[0] + " - " + value[1]}</div>
    </div>
  );
}
