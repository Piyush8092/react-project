import React from "react";
import facebook from "../../assets/footer/facebook.png";
import twitter from "../../assets/footer/twitter.png";
import instagram from "../../assets/footer/instagram.png";
import pinterest from "../../assets/footer/pinintrest.png";
import googlePlus from "../../assets/footer/googleplus.png";
import youtube from "../../assets/footer/youtube.png";
import telegram from "../../assets/footer/telegram.png";
import email from "../../assets/footer/mail.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="font-bold text-lg">Hobbycue</h2>
          <ul className="mt-4 space-y-2">
            <li>About Us</li>
            <li>Our Services</li>
            <li>Work with Us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="font-bold text-lg">How Do I</h2>
          <ul className="mt-4 space-y-2">
            <li>Sign Up</li>
            <li>Add a Listing</li>
            <li>Claim Listing</li>
            <li>Post a Query</li>
            <li>Add a Blog Post</li>
            <li>Other Queries</li>
          </ul>
        </div>
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="font-bold text-lg">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            <li>Listings</li>
            <li>Blog Posts</li>
            <li>Shop / Store</li>
            <li>Community</li>
          </ul>
        </div>
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="font-bold text-lg">Social Media</h2>
          <div className="flex space-x-4 mt-4">
            <img src={facebook} alt="Facebook" className="h-6" />
            <img src={twitter} alt="Twitter" className="h-6" />
            <img src={instagram} alt="Instagram" className="h-6" />
            <img src={pinterest} alt="Pinterest" className="h-6" />
            <img src={googlePlus} alt="Google Plus" className="h-6" />
            <img src={youtube} alt="YouTube" className="h-6" />
            <img src={telegram} alt="Telegram" className="h-6" />
            <img src={email} alt="Email" className="h-6" />
          </div>
          <h2 className="font-bold text-lg mt-6">Invite Friends</h2>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Email ID"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l"
            />
            <button className="bg-purple-600 text-white px-4 py-2 rounded-r">
              Invite
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-500">
        &copy; Purple Cues Private Limited
      </div>
    </footer>
  );
};

export default Footer;
