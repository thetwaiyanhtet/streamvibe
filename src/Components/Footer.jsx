import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const footerMenu = [
  ["Home", "Category", "Devices", "Pricing", "FAQ"],
  ["Movies", "Genres", "Trending", "New Release", "Popular"],
  ["Shows", "Genres", "Trending", "New Release", "Popular"],
  ["Support", "Contact Us"],
  ["Subscription", "Plans", "Features"],
  [
    "Connect With Us",
    <div className="flex gap-3" key="social-icons">
      <div className="p-3 bg-glass rounded-md w-11 cursor-pointer">
        <FaFacebook size={20}/>
      </div>
      <div className="p-3 bg-glass rounded-md w-11 cursor-pointer">
        <FaTwitter size={20}/>
      </div>
      <div className="p-3 bg-glass rounded-md w-11 cursor-pointer">
        <FaLinkedin size={20}/>
      </div>
    </div>,
  ],
];

const Footer = () => {
  return (
    <footer className="p-5 md:px-20 bg-gray-800">
        <div className="flex justify-between py-10 md:flex-nowrap flex-wrap">
          {footerMenu.map((section, index) => (
            <div key={index} className=" p-3">
              <h3 className="text-xl mb-3">{section[0]}</h3>
              <ul className="list-none">
                {section.slice(1).map((item, subIndex) => (
                  <li key={subIndex} className="mb-2">
                    {typeof item === "string" ? (
                      <a href="#" className="hover:underline text-tSecondary">
                        {item}
                      </a>
                    ) : (
                     item
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className=" md:flex md:space-y-0 space-y-5 justify-between border-t py-7 border-glass">
            <div className=" md:text-base text-sm">@2024 StreamVibe,All rights Reserved</div>
            <ul className=" flex gap-5 md:text-base text-sm">
                <li>Terms of Use</li>
                <li className=" border-r border-l px-5 border-glass">Privacy Policy</li>
                <li>Cookie Policy</li>
            </ul>
        </div>
    </footer>
  );
};

export default Footer;
