import RestroCard,{PromotedCard} from "./RestroCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NoItemFound from "./NoItemFound";


const Body = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.91870&lng=74.85980&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();

    const restaurants = json.data.cards;

    const slicedList = restaurants.slice(3);
    setlistOfRestaurants(slicedList);
    setfilterdListOfRestaurants(slicedList);
  };


  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchElement, setsearchElement] = useState("");
  const [filterdListOfRestaurants, setfilterdListOfRestaurants] = useState([]);
  console.log(listOfRestaurants);

  const RestroPromotedCard = PromotedCard(RestroCard);



  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col gap-8 p-6">
      {/* 🔹 Filtering Section (always on top) */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center w-full">
        {/* Filter Button */}
        <button
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 
                     hover:bg-gray-100 hover:border-gray-400 active:bg-gray-200 
                     transition-all duration-200 shadow-sm font-medium"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.card.card.info.avgRating > 4.5
            );
            setfilterdListOfRestaurants(filteredList);
          }}
        >
           Top Rated
        </button>

        {/* Search Bar */}
        <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white shadow-sm w-full md:w-auto">
          <input
            type="text"
            placeholder="Enter dish name..."
            className="flex-1 outline-none text-gray-700 placeholder-gray-400"
            value={searchElement}
            onChange={(event) => {
              setsearchElement(event.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={() => {
              const filteredRestro = listOfRestaurants.filter((rest) => {
                return rest?.card?.card?.info?.name
                  ?.toLowerCase()
                  .includes(searchElement.toLowerCase());
              });
              setfilterdListOfRestaurants(filteredRestro);
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* 🔹 Restaurants Grid (below filter/search) */}
      {filterdListOfRestaurants.length === 0 ?
       <NoItemFound/> :
      <div className="restro-container grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
        {filterdListOfRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.card.card.info.id}
              to={"/restaurant/" + restaurant?.card?.card?.info?.id}
              className="block"
            >
              {restaurant?.card?.card?.info?.promoted ? 
              (<RestroPromotedCard resData={restaurant}/>):
              (<RestroCard resData={restaurant} />)
              }
            </Link>
          );
        })}
      </div>
}
    </div>
  );
};

export default Body;
