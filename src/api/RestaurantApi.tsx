import { SearchState } from "@/pages/SearchPage";
import { Restaurant, RestaurantSearchResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetRestaurant = (restaurantId?: string) => {
  const getRestaurantByIdRequest = async (): Promise<Restaurant> => {
    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/${restaurantId}`
    );

    if (!response.ok) {
      throw new Error("Failed to get restaurant");
    }

    return response.json();
  };

  const { data: restaurant, isLoading } = useQuery(
    "fetchRestaurant",
    getRestaurantByIdRequest,
    {
      enabled: !!restaurantId,
    }
  );

  return { restaurant, isLoading };
};

export const useSearchRestaurants = (
  searchState: SearchState,
  city?: string
) => {
  const createSearchRequest = async (): Promise<RestaurantSearchResponse> => {
    const params = new URLSearchParams();
    params.set("searchQuery", searchState.searchQuery);
    params.set("page", searchState.page.toString());
    params.set("selectedCuisines", searchState.selectedCuisines.join(","));
    params.set("sortOption", searchState.sortOption);

    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/search/${city}?${params.toString()}`
    );

    if (!response.ok) {
      const errorMessage = await response.text(); // Get the error message
      throw new Error(`Failed to get restaurant: ${errorMessage}`);
    }
    return response.json();
  };

  const {
    data: results,
    isLoading,
    error,
  } = useQuery(
    ["searchRestaurants", searchState], // Adding city as a dependency to refetch on city change
    createSearchRequest,
    {
      enabled: !!city, // Only run the query if city is truthy
    }
  );

  return {
    results,
    isLoading,
    error,
  };
};
