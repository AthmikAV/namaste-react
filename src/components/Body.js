import RestroCard, { PromotedCard } from "./RestroCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NoItemFound from "./NoItemFound";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchElement, setSearchElement] = useState("");
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);

  const RestroPromotedCard = PromotedCard(RestroCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.91870&lng=74.85980&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      const json = await data.json();

      const restaurants = json?.data?.cards ?? [];
      const slicedList = restaurants.slice(3);

      setListOfRestaurants(slicedList);
      setFilteredListOfRestaurants(slicedList);
    } catch (error) {
  console.error("Error fetching restaurants:", error);
  setListOfRestaurants([
    { card: { card: { info: { id: "1", name: "Demo Restaurant", avgRating: 4.5, promoted: false }}}}
  ]);
  setFilteredListOfRestaurants([
    { card: { card: { info: { id: "1", name: "Demo Restaurant", avgRating: 4.5, promoted: false }}}}
  ]);
}

  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col gap-8 p-6">
      {/* Filters + Search */}
      {listOfRestaurants.length > 0 && (
        <div className="flex flex-col md:flex-row gap-4 md:items-center w-full">
          {/* Top Rated Filter */}
          <button
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 
                       hover:bg-gray-100 hover:border-gray-400 active:bg-gray-200 
                       transition-all duration-200 shadow-sm font-medium"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.card.card.info.avgRating > 4.5
              );
              setFilteredListOfRestaurants(filteredList);
            }}
          >
            Top Rated
          </button>

          {/* Search */}
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white shadow-sm w-full md:w-auto">
            <input
              type="text"
              placeholder="Enter dish name..."
              className="flex-1 outline-none text-gray-700 placeholder-gray-400"
              value={searchElement}
              onChange={(event) => setSearchElement(event.target.value)}
            />
            <button
              className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={() => {
                const filteredRestro = listOfRestaurants.filter((rest) =>
                  rest?.card?.card?.info?.name
                    ?.toLowerCase()
                    .includes(searchElement.toLowerCase())
                );
                setFilteredListOfRestaurants(filteredRestro);
              }}
            >
              Search
            </button>
          </div>
        </div>
      )}

      {/* Restaurants Grid */}
      {filteredListOfRestaurants.length === 0 ? (
        <NoItemFound />
      ) : (
        <div className="restro-container grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          {filteredListOfRestaurants.map((restaurant) => (
            <Link
              key={restaurant.card.card.info.id}
              to={"/restaurant/" + restaurant?.card?.card?.info?.id}
              className="block"
            >
              {restaurant?.card?.card?.info?.promoted ? (
                <RestroPromotedCard resData={restaurant} />
              ) : (
                <RestroCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
