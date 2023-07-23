import { IMG_CDN_URL } from "../config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
return ( 
  <div className="w-80 h-80 rounded-lg shadow-lg p-6 mt-20 hover:translate-y-2 hover:scale-105"
   style={{background: "linear-gradient(to right top, #fec0d5, #ffbac4, #ffb7b2, #ffb59e, #f8b58c)"}}>
  <div className="w-4/5 h-4/5 mx-auto ">
    <img  className="w-4/5 h-4/5  mx-auto -mt-20 object-fill rounded-full"src={IMG_CDN_URL+ cloudinaryImageId } />
  </div>
  <div className="sm:w-60 leading-normal text-gray-800 text-md mb-3 tracking-tighter -mt-8 ">
    <h2 className="text-lg font-semibold">{name}</h2>
    <h3 >{cuisines.join(", ")}</h3>
    <h4 className="text-gray-600">{area}</h4>  
  </div>
  <span className=" flex text-sm justify-between text-gray-600 mr-1 hover:text-red-800  ">
      <h4 className="p-2 rounded-lg "
       style={
            avgRating < 4
              ? { backgroundColor: "red", color:"white"}
              : avgRating === "--"
              ? { backgroundColor: "white", color: "black" }
              : { backgroundColor: "green", color: "white" }
          }>{avgRating} ⭐️ </h4>
        <h4 className="leading-8">{lastMileTravelString}</h4>
        <h4 className="leading-8">{costForTwoString}</h4>
      </span>
  </div>
);
}

export default RestaurantCard;