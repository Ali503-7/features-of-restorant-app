import Data from "../../components/Data";
import Filters from "../../components/Filters";

export default function ThreeFilters() {
  return (
    <div className="flex flex-row gap-10 w-[1000px]">
      <Filters />
      <Data />
    </div>
  );
}
