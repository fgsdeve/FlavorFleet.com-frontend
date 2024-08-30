import { useSearchRestaurants } from "@/api/RestaurantApi";
import CuisineFilter from "@/components/CuisineFilter";
import PaginationsSelector from "@/components/PaginationsSelector";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultsCards from "@/components/SearchResultsCards";
import SearchResultsInfo from "@/components/SearchResultsInfo";
import ShortOptionDropDown from "@/components/ShortOptionDropDown"; // Verifique a consistência do nome
import { useState } from "react";
import { useParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;
  page: number;
  selectedCuisines: string[];
  sortOption: string;
};

const SearchPage = () => {
  const { city } = useParams<{ city: string }>();
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
    page: 1,
    selectedCuisines: [],
    sortOption: "bestMatch",
  });

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { results, isLoading } = useSearchRestaurants(searchState, city);

  const setSortOption = (sortOption: string) => {
    setSearchState((prevState) => ({
      ...prevState,
      sortOption,
      page: 1,
    }));
  };

  const setSelectedCuisines = (selectedCuisines: string[]) => {
    setSearchState((prevState) => ({
      ...prevState,
      selectedCuisines,
      page: 1,
    }));
  };

  const setPage = (page: number) => {
    setSearchState((prevState) => ({
      ...prevState,
      page: page,
    }));
  };

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
      page: 1,
    }));
  };

  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
      selectedCuisines: [],
      sortOption: "bestMatch",
      page: 1,
    }));
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!results?.data || !city) {
    return <span>Couldn't find any results</span>;
  }
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
        <div id="cuisines-list">
          <CuisineFilter
            selectCuisines={searchState.selectedCuisines}
            onChange={setSelectedCuisines}
            isExpanded={isExpanded}
            onExpandedClick={() =>
              setIsExpanded((prevIsExpanded) => !prevIsExpanded)
            }
          />
        </div>
        <div id="main-content" className="flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5">
            <SearchBar
              searchQuery={searchState.searchQuery}
              onSubmit={setSearchQuery}
              placeHolder="Search By Cuisine Type or Restaurant Name"
              onReset={resetSearch}
            />
            <ShortOptionDropDown
              sortOption={searchState.sortOption}
              onChange={setSortOption}
            />
          </div>
          <SearchResultsInfo total={results.pagination?.total} city={city} />
          <div className="w-full">
            <div className="grid grid-cols-1 gap-5">
              {results.data.map((restaurant) => (
                <SearchResultsCards key={restaurant._id} restaurant={restaurant} />
              ))}
            </div>
          </div>
  
          <PaginationsSelector
            page={results.pagination?.page}
            pages={results.pagination?.pages}
            onPageChange={setPage}
          />
        </div>
      </div>
    </div>
  );
  
};

export default SearchPage;
