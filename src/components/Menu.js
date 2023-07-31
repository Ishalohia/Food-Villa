import { restaurantList, swiggy_api_URL } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";

const Menu= () => {
  const[allRestaurants, setAllRestaurants] = useState([]);
  const[searchText, setSearchText] = useState();  
  const[filteredRestaurants, setFilteredRestaurants] = useState(restaurantList)
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(()=>{
      // Make API Call to render only once (when page loads)
     getRestaurants();
  },[]) 

  async function getRestaurants(){
    try {
      const data = await fetch(swiggy_api_URL);
      const json =  await data.json();
      console.log(json);
      setAllRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
      setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
      }
      catch(error){
        console.log(error)
      }
    }

    const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage(`Sorry, we couldn't find any results for "${searchText}"`);
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  if(!allRestaurants) return null;  //if not have a restaurant don't return (early rendering)

  return (
    <>
    {/* Search button */}
    <div className="relative w-full md:w-1/2 mx-auto mt-8 mb-6 ">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
    <svg
      className="w-4 h-4 text-black-500 dark:text-black-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      />
    </svg>
  </div>
  <input
    className="block w-full p-4 pl-10 text-sm text-black-900 border border-orange-300 rounded-lg bg-white-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-white-700 dark:border-orange-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-orange-500 dark:focus:border-orange-500"
    type="text"
    placeholder="Search a restaurant ..."
    value={searchText}
    onChange={(e) => {
      setSearchText(e.target.value);
      searchData(e.target.value, allRestaurants);
    }}
  />
  <button
    className="text-white absolute right-2.5 bottom-2.5 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
    onClick={() => {
      searchData(searchText, allRestaurants);
    }}
  >
    Search
  </button>
    </div>

    {/* Error message */}
    {errorMessage && <div className="text-2xl md:text-4xl font-bold text-red-800 mt-4 md:mt-8 text-center">{errorMessage}</div>}

    

    {/* Restaurant Card */}
     {allRestaurants?.length === 0 ? (<ShimmerUI/>) : (
       <div className="flex flex-wrap justify-center gap-7">
        {filteredRestaurants?.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant?.info.id} key={restaurant?.info.id}>
                <RestaurantCard {...restaurant?.info} />
              </Link>
            );
          })}
    </div>
     )}
    </>
  ); 
};

export default Menu;
