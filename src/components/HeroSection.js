import React from "react";
import facebooklogo from "../../assets/herosection/Facebook.png";
import googlelogo from "../../assets/herosection/Google.png";
import partimage1 from "../../assets/herosection/heropart1.png";
import partimage2 from "../../assets/herosection/heropart2.png";
import passwordimage from "../../assets/herosection/Password.png";

const HeroSection = () => {
  return (
    <div className="bg-purple-100 py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start lg:gap-5">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            Explore your <span className="text-blue-500">hobby</span> or{" "}
            <span className="text-pink-500">passion</span>
          </h1>
          <p className="text-lg mb-8">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities...
          </p>
          <div className="flex justify-center items-center space-x-4 gap-11">
            <img src={partimage1} alt="Hobby 1" className="h-32 w-auto" />
            <img src={partimage2} alt="Hobby 2" className="h-32 w-auto" />
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
          <div className="flex flex-col items-center lg:items-start space-y-4 mb-6 w-full">
            <button className="flex items-center px-4 py-2 bg-white rounded shadow hover:bg-gray-100 w-full justify-center">
              <img src={googlelogo} alt="Google" className="h-6 mr-2" />
              Continue with Google
            </button>
            <button className="flex items-center px-4 py-2 bg-white rounded shadow hover:bg-gray-100 w-full justify-center">
              <img src={facebooklogo} alt="Facebook" className="h-6 mr-2" />
              Continue with Facebook
            </button>
          </div>
          <div className="w-full relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative text-center">
              <span className="bg-purple-100 px-2 text-gray-700">
                or connect with
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-4 w-full mb-4">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 border rounded w-full"
            />
            <div className="relative w-full">
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-2 border rounded w-full pr-10"
              />
              <button className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600">
                <img src={passwordimage} alt="show" className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center w-full mb-4">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember-me-2" className="h-4 w-4" />
              <label htmlFor="remember-me-2">Remember me</label>
            </div>
            <a href="#" className="text-blue-500">
              Forgot password?
            </a>
          </div>
          <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 w-full">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
