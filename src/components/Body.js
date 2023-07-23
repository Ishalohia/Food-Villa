import { Link} from "react-router-dom";
import order from "../assets/Body/Order.svg";
import person from "../assets/Body/person.svg";
import bike from "../assets/Body/Bike.svg";
import food from "../assets/Body/Food.svg";


const Body = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-around items-center md:gap-8 md:mt-10 md:max-w-4xl md:mx-auto">
        {/* content */}
        <div className="text-center md:text-left md:w-11/12">
          <button className="font-medium rounded-lg text-sm px-4 py-2 my-4 md:mt-8 bg-orange-200 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-200 dark:hover:bg-orange-300 dark:focus:ring-orange-300">
            More than Faster🍒
          </button>
          <p className="text-4xl md:text-6xl font-bold">Be the Fastest</p>
          <p className="text-4xl md:text-6xl font-bold">In delivering</p>
          <p className="text-4xl md:text-6xl font-bold">
            Your <span className="text-red-700">Food</span>
          </p>
          <p className="text-base md:text-xl text-gray-600 mt-4">
            Our job is to fill your hungry tummy with various <br/>delicious food and with fast and free delivery.
          </p>
          <Link to="/menu">
            <button className="flex items-center w-34 font-medium rounded-lg text-sm px-4 py-1 mt-4 md:mt-8 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">  
             Order Now
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="right-arrow" width="38" height="38">
                <path d="M22.94,16.31a1,1,0,0,0,0-.25V16a.85.85,0,0,0-.06-.31,0,0,0,0,0,0,0h0a.85.85,0,0,0-.19-.3l0,0-5-5a1,1,0,0,0-1.42,1.42L19.59,15H10a1,1,0,0,0,0,2h9.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.19-.3A.3.3,0,0,0,22.94,16.31Z" data-name="right arrow"></path>
              </svg>
            </button>
          </Link>
        </div>
        {/* image */}
        <div className="mt-8 md:mt-0 w-1/2 md:w-3/4">
          <img src={order} alt="order" width={600} height={600} />
        </div>
      </div>
      {/* second section */}
        <div className="container mx-auto mt-10 md:w-3/4">
      <p className="text-center uppercase text-red-500 text-xl font-semibold mb-4">What We Serve</p>
      <p className="text-3xl font-bold text-center mb-6 text-red-800">Your favourite Food Delivery Partner</p>
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/3 px-4 mb-8">
          <img src={person} alt="order" className="h-auto mx-auto w-40 mb-2" />
          <p className="text-center text-2xl font-semibold text-red-700">Easy to order</p>
        </div>
        <div className="w-full sm:w-1/3 px-4 mb-8">
          <img src={bike} alt="order" className="w-40 h-auto mx-auto mb-2" />
          <p className="text-center text-2xl font-semibold text-red-700">Fastest Delivery</p>
        </div>
        <div className="w-full sm:w-1/3 px-4 mb-8">
          <img src={food} alt="order" className="w-40 h-auto mx-auto mb-2" />
          <p className="text-center text-2xl font-semibold text-red-700">Quality Food</p>
        </div>
      </div>
    </div>


    </div>
  );
};

export default Body;
