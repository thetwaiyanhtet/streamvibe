import React from "react";
import { FaMobile, FaTablet, FaTv, FaLaptop, FaGamepad,FaHeadset} from 'react-icons/fa';
 const devices = [
    {
        name: "Smartphones",
        icon: ( <FaMobile/>),
        text: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
    {
        name: "Tablet",
        icon: ( <FaTablet/>),
        text: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
    {
        name: "Smart TV",
        icon: ( <FaTv/>),
        text: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
    {
        name: "Laptops",
        icon: ( <FaLaptop/>),
        text: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
    {
        name: "Gaming Consoles",
        icon: ( <FaGamepad/>),
        text: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
    {
        name: "VR Headsets",
        icon: ( <FaHeadset/>),
        text: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    }
 ]


const Card = () =>{
    return(
        <div>
            <div className=" grid md:grid-cols-3 gap-4">
                {devices.map((item, index)=>(
                    <div key={index} className=" space-y-4 border rounded-md border-bdPrimary px-6 py-10 bg-gradient-to-r from-gray-900 via-transparent to-red-950">
                        <div className=" flex items-center gap-3">
                            <p className=" text-buttonPrimary text-3xl bg-glass p-3 rounded-md border-gray-800 border">{item.icon}</p>
                            <p>{item.name}</p>
                        </div>
                        <p>
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

const Devices = () => {
  return (
    <div className=" p-5 md:px-20">
      <div className=" mb-10">
        <h1>we provide you streaming experience across various devices.</h1>
        <p className=" text-tSecondary max-w-screen-xl leading-6">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </p>
      </div>
      <Card/>
    </div>
  );
};

export default Devices;
