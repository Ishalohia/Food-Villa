import React from "react";
import logo2 from "../assets/logo2.png";
import twitter from "../assets/SocialMedia/twitter.svg";
import facebook from "../assets/SocialMedia/facebook.svg";
import linkedln from "../assets/SocialMedia/linkedin.svg";
import gmail from "../assets/SocialMedia/gmail.svg";
import myLogo from "../assets/myLogo.png"

const Footer = () => {
  return (
    <footer className="bg-red-200 py-8 md:py-12 px-4 md:px-8 mt-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {/* Company Info */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <p className="text-sm md:text-base">
              We are a food delivery service dedicated to providing the most delicious and
              mouth-watering dishes right to your doorstep. Our mission is to make your dining
              experience convenient and enjoyable, all while ensuring the highest quality of
              ingredients and service.
            </p>
          </div>

          {/* Delivery Locations */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-4">We Deliver To:</h2>
            <ul className="text-sm md:text-base">
              <li>Phagwara</li>
              <li>Jalandhar</li>
              <li>LPU</li>
              <li>Law Gate Road, LPU</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <ul className="text-sm md:text-base">
              <li>Help & Support</li>
              <li>Team with Us</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8">
          <div className="flex items-center mb-4 md:mb-0">
            <img className="h-10 w-40" src={logo2} alt="Food-Villa Logo " />
            
          </div>
          {/* <p className="text-sm md:text-base">Made by Isha Lohia</p> */}
          <img src={myLogo} alt="my-logo" width={180} height={180}/>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="mailto:ishalohia478@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
            >
              <img src={gmail} alt="Gmail" className="h-8 w-8" />
            </a>
            <a
              href="https://twitter.com/isha_lohia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
            >
              <img src={twitter} alt="Twitter" className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/ishalohia478/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
            >
              <img src={linkedln} alt="LinkedIn" className="h-8 w-8" />
            </a>
            <a
              href="https://www.facebook.com/isha.lohia.71"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
            >
              <img src={facebook} alt="Facebook" className="h-8 w-8" />
            </a>
            {/* Add more social media icons here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
