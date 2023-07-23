import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import { IMG_CDN_URL, menu_api_URL, RESTAURANT_TYPE_KEY, MENU_ITEM_TYPE_KEY, ITEM_IMG_CDN_URL } from "../config";
import { useDispatch} from "react-redux";
import { addToCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams(); // call useParams and get value of restaurant id using object destructuring

  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in restaurant
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
  }, []);
  async function getRestaurantInfo() {
        try {
          const response = await fetch(menu_api_URL + id);  // Make a request to the menu API
          const json = await response.json();  // Parse the response as JSON

          // Set restaurant data
          const restaurantData = json?.data?.cards?.map(x => x.card)?.
                                find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;   //It tries to find a card with a specific type (RESTAURANT_TYPE_KEY) using the find() method. If a matching card is found, its card.info object is assigned to the restaurantData variable.
          setRestaurant(restaurantData);

          // Set menu item data
          const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.  // it performs a series of operations using optional chaining, filtering, and mapping to extract the (groupedCard) with a specific type (MENU_ITEM_TYPE_KEY) and retrieves the menu item cards (itemCards) from the JSON data.
                                groupedCard?.cardGroupMap?.REGULAR?.
                                cards?.map(x => x.card?.card)?.
                                filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
                                map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];

          // Create a list of unique menu items
          const uniqueMenuItems = [];

          // it checks if there is already an item with the same id in the uniqueMenuItems array. If not, it adds the item to the uniqueMenuItems array.
          menuItemsData.forEach((item) => {
            if (!uniqueMenuItems.find(x => x.id === item.id)) {
              uniqueMenuItems.push(item);
            }
          })

          // Set the unique menu item data in the state
          setMenuItems(uniqueMenuItems);

          // If any error occurs during the try block, execution jumps to the catch block.
        } 
        catch (error) {
          setMenuItems([]);   // If err Set the menu item data to an empty array
          setRestaurant(null);  // If err Set the restaurant data to null
          console.log(error);
        }
  }

  // For dispatching an action when clicking on add button
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };


//   return !restaurant ? (
//     <MenuShimmer />
//   ) : 
return (
    <div className="w-full min-h-screen py-6">
      {restaurant ? (
        <div className="max-w-screen-xl mx-auto">
        {/* restaurant name header */}
          <div className="flex flex-col md:flex-row justify-center md:items-center gap-8 md:h-48 rounded-lg shadow-md px-4 md:px-8 py-6"
          style={{background: "linear-gradient(to right top, #fec0d5, #ffbac4, #ffb7b2, #ffb59e, #f8b58c)"}}>
            <img
              className="h-40 w-64 md:w-64 rounded-lg md:h-44 object-fill"
              src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
              alt={restaurant?.name}
            />
            <div className="flex flex-col md:ml-8 justify-center md:w-80 ">
              <h2 className="text-2xl md:text-2xl font-semibold">{restaurant?.name}</h2>
              <p className="text-sm md:text-base text-gray-600 mt-2">{restaurant?.cuisines?.join(", ")}</p>
              <div className="flex items-center text-sm md:text-base font-semibold mt-4">
                <div className="flex items-center bg-green-700 text-white px-3 py-1 rounded-md">
                  <i className="fas fa-star mr-1"></i>
                  <span>{restaurant?.avgRating}</span>
                </div>
                <span className="mx-3">|</span>
                <div>{restaurant?.sla?.slaString}</div>
                <span className="mx-3">|</span>
                <div>{restaurant?.costForTwoMessage}</div>
              </div>
            </div>
          </div>

        {/* recommended */}
          <div className="flex flex-col md:flex-row justify-center mt-8">
            <div className="md:w-3/5">
              <div className="p-4 flex justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-600">Recommended</h3>
                <p className="mt-2 text-sm md:text-base text-gray-500">
                  {menuItems.length} ITEMS
                </p>
              </div>
              {/* back button */}
                <div>
                    <Link to="/" className="flex self-baseline gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-arrow-left ml-10"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        />
                      </svg>
                      <span className="text-gray-600 text-lg font-semibold -mt-1">Back</span>
                  </Link>
               </div>
              </div>

              {/* menu cards */}
              <div className="grid grid-cols-1 gap-4">
                {menuItems.map((item) => (
                  <div
                    className="p-4 rounded-lg shadow-lg flex items-center justify-between hover:bg-indigo-500 duration-300"
                    style={{background: "linear-gradient(to right top, #fec0d5, #ffbac4, #ffb7b2, #ffb59e, #f8b58c)"}}
                    key={item?.id}
                  >
                   {item?.imageId && (
                      <img
                        className="h-16 w-16 md:h-24 md:w-24 rounded-lg object-cover"
                        src={ITEM_IMG_CDN_URL + item?.imageId}
                        alt={item?.name}
                      />
                    )}
                    <div className="flex flex-col ml-2">
                      <h3 className="text-md md:text-lg font-semibold">{item?.name}</h3>
                      <p className="mt-1 text-sm md:text-base text-gray-900">
                        {item?.price > 0
                          ? new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                            }).format(item?.price / 100)
                          : " "}
                      </p>
                      <p className="mt-2 text-sm md:text-base text-gray-700 line-clamp-3">{item?.description}</p>
                    </div>
                   
                    <button
                      className="bg-orange-500 text-white py-2 px-6 cursor-pointer mt-3 rounded-lg hover:bg-orange-600 text-sm hover:-translate-y-1 hover:scale-105"
                      onClick={() => handleAddToCart(item)}
                    >
                      ADD +
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-8">Loading...</div>
      )}
    </div>
  );
};


export default RestaurantMenu
