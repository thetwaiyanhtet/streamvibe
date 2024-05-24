import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
const footerMenu = [
  ["Home", "Category", "Devices", "Pricing", "FAQ"],
  ["Movies", "Gernes", "Trending", "New Release", "Popular"],
  ["Shows", "Gernes", "Trending", "New Release", "Popular"],
  ["Support", "Contact Us"],
  ["Subscription", "Plans", "Features"],
  [
    "Connect With Us",
    <div className=" p-3 bg-glass rounded-md">
      <FaFacebook />
    </div>,
    <div className=" p-3 bg-glass rounded-md">
      <FaTwitter />
    </div>,
    <div className=" p-3 bg-glass rounded-md">
      <FaLinkedin />
    </div>,
  ],
];

export default footerMenu;
