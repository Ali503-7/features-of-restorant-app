import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";

export default function Header() {
  return (
    <div className="flex gap-3 py-6">
      <Link to={URLS.home} className="hover:underline">
        Home
      </Link>
      <Link to={URLS.feature1} className="hover:underline">
        Three filters
      </Link>
    </div>
  );
}
