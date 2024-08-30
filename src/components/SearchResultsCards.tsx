import { Restaurant } from "@/types";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Dot, Clock, Banknote } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  restaurant: Restaurant;
};

const SearchResultsCards = ({ restaurant }: Props) => {
  return (
    <Link
      to={`/details/${restaurant._id}`}
      className="grid grid-cols-3 lg:grid-cols-[1fr_2fr] gap-5 group border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <AspectRatio ratio={16 / 9} className="rounded-l-lg overflow-hidden">
        <img
          src={restaurant.imageUrl}
          alt={`${restaurant.restaurantName} image`}
          className="w-full h-full object-cover"
        />
      </AspectRatio>
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight mb-3 group-hover:underline text-gray-800">
            {restaurant.restaurantName}
          </h3>
          <div className="text-sm text-gray-900 mb-4">
            <div className="flex flex-wrap items-center gap-1">
              {restaurant.cuisines.map((item, index) => (
                <span className="flex items-center" key={index}>
                  {item}
                  {index < restaurant.cuisines.length - 1 && (
                    <Dot className="text-gray-900" />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-2 flex-col">
          <div className="flex items-center gap-2">
            <Clock className="text-blue-600" />
            <span>{restaurant.estimatedDeliveryTime} mins</span>
          </div>
          <div className="flex items-center gap-2">
            <Banknote className="text-green-600" />
            <span>
              Delivery: ${(restaurant.deliveryPrice / 100).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultsCards;
