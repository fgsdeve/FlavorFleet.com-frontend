import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
  children?: React.ReactNode;
};

const SearchResultsInfo = ({ total, city }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
      <div className="text-lg font-bold text-gray-700">
        {total} Restaurant{total !== 1 && "s"} found in {city}
        <Link
          to="/"
          className="text-sm font-semibold underline cursor-pointer text-green-500 ml-4"
        >
          Change Location
        </Link>
      </div>
      <div className="mt-2 lg:mt-0">
        <span className="text-sm text-gray-600"></span>
        <span className="ml-2"></span>
      </div>
    </div>
  );
};

export default SearchResultsInfo;
