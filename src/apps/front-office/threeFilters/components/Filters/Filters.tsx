import CategoryFilter from "../CategoryFilter";
import PriceFilter from "../PriceFilter";
import SearchFilter from "../SearchFilter";

export default function Filters() {
  return (
    <div className="justify-self-end">
      <SearchFilter />
      <CategoryFilter />
      <PriceFilter />
    </div>
  );
}
