import {Link, Outlet } from "react-router-dom";
import delivery from "../assets/aboutUs/delivery.svg";
import orderFood from "../assets/aboutUs/orderFood.svg";
import enjoyRecipe from "../assets/aboutUs/enjoyRecipe.svg";
import chef from "../assets/aboutUs/chef.svg"

const About = () => {
  return (
    <>
    {/* Cards */}
    <div className="py-4 px-4 md:px-8" >
    <h1 className="text-xl md:text-xl uppercase font-bold mb-4 md:mx-auto text-center text-orange-600 ">
        About us
      </h1>
      <h1 className="text-xl md:text-2xl font-semibold mb-8 md:mx-auto text-center text-red-600 ">
        Order delivery in just 30 minutes
      </h1>
      <div className="flex flex-col md:flex-row gap-6 md:w-4/5 mx-auto" >
        {/* Order Food Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center md:flex-1" style={{background: "linear-gradient(to right top, #fec0d5, #ffbac4, #ffb7b2, #ffb59e, #f8b58c)"}}>
          <img src={orderFood} alt="Order Food" className="w-24 h-24 mb-4" />
          <h1 className="text-xl font-semibold">Order your food</h1>
          <p className="text-gray-600 text-center">
            Select your favorite food and order from nearby restaurants.
          </p>
        </div>

        {/* Delivery & Pickup Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center md:flex-1" style={{background: "linear-gradient(to right top, #fec0d5, #ffbac4, #ffb7b2, #ffb59e, #f8b58c)"}}>
          <img src={delivery} alt="Delivery & Pickup" className="w-24 h-24 mb-4" />
          <h1 className="text-xl font-semibold">Delivery & Pickup</h1>
          <p className="text-gray-600 text-center">
            Enjoy the convenience of delivery or pick up your order.
          </p>
        </div>

        {/* Enjoy Recipe Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center md:flex-1" style={{background: "linear-gradient(to right top, #fec0d5, #ffbac4, #ffb7b2, #ffb59e, #f8b58c)"}}>
          <img src={enjoyRecipe} alt="Enjoy Recipe" className="w-24 h-24 mb-4" />
          <h1 className="text-xl font-semibold">Enjoy your Recipe</h1>
          <p className="text-gray-600 text-center">
            Explore delicious food recipes from a variety of restaurants with different cuisines.
          </p>
        </div>
      </div>
      <Outlet />
    </div>
    {/* Chef card */}
   <div className="flex flex-col md:flex-row items-center mt-7 md:space-x-10 mx-auto "> 
      <img src={chef} alt="chef" className="w-1/3 h-1/3 mx-auto md:mx-10 md:ml-24" />
      <div className="text-center md:text-left">
        <h1 className="text-xl md:text-2xl font-semibold mb-4 text-red-600 uppercase">Why Choose Us</h1>
        <h1 className="text-3xl font-bold">Every Flavour <br />Become delicious</h1>
        <p className="text-sm md:text-lg mt-4">
          From your neighbourhood, from South Indian <br />
          Spot to the Burger and Fries you crave, Choose <br />
          from a number of different restaurants
        </p>
        <div className="flex flex-col md:flex-row mt-6 md:space-x-6" >
          <div className="bg-white p-4 shadow-lg rounded-lg text-center md:text-left" style={{background: "linear-gradient(to right top, #fec0d5, #ffbac4, #ffb7b2, #ffb59e, #f8b58c)"}}>
            <p className="text-2xl md:text-3xl font-semibold">22K+</p>
            <span className="text-base md:text-xl mt-2 font-semibold">Online Orders</span>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg text-center md:text-left mt-4 md:mt-0" style={{background: "linear-gradient(to right top, #fec0d5, #ffbac4, #ffb7b2, #ffb59e, #f8b58c)"}}>
            <p className="text-2xl md:text-3xl font-semibold">500+</p>
            <span className="text-base md:text-xl mt-2 font-semibold">Trusted Clients</span>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg text-center md:text-left mt-4 md:mt-0" style={{background: "linear-gradient(to right top, #fec0d5, #ffbac4, #ffb7b2, #ffb59e, #f8b58c)"}}>
            <p className="text-2xl md:text-3xl font-semibold">250+</p>
            <span className="text-base md:text-xl mt-2 font-semibold">Reviews</span>
          </div>
        </div>
        <div>
      <Link to="/menu" className="flex self-baseline gap-1 mt-6">
        <button className=" mx-auto sm:mx-0 font-medium rounded-lg drop-shadow-xl text-sm px-4 py-2 text-center bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300">
          Order Now
        </button>
      </Link>
    </div>
  </div> 
</div>



    </>
  );
};

export default About;
