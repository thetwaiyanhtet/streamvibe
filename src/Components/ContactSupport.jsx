import React from "react";
import indiaFlag from "../Assets/india flag.png";
import { SendMessage } from "../Components/Buttons";
import movies from "../Assets/movies";

const ContactSupport = () => {
  return (
    <div className=" md:px-20 px-5">
      <div className=" md:flex justify-between items-center min-h-screen">
        <div className=" md:w-[480px] space-y-5">
          <h1 className=" md:text-5xl text-xl">welcome to our support page!</h1>
          <p>
            we're here to help you with any problems you may be having with our
            product.
          </p>
          <div className=" flex flex-wrap md:gap-2 gap-6 border-4 border-glass rounded-md overflow-hidden  md:w-full md:h-80 h-64">
            {movies.slice(0, 12).map((item, index) => (
              <div key={index}>
                <img src={item.coverImg} alt="..." className=" md:w-28 w-24" />
              </div>
            ))}
          </div>
        </div>
        <div className=" mt-10 form space-y-5 border rounded-md bg-glass p-7 md:w-[800px]">
          <div className=" md:flex md:space-x-5 space-x-0 md:space-y-0 space-y-5">
            <div className=" form-boxes">
              <p>first name</p>
              <input
                type="text"
                className=" form-inputs"
                placeholder="Enter First Name"
              />
            </div>
            <div className=" form-boxes">
              <p>last name</p>
              <input
                type="text"
                className=" form-inputs"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          <div className=" md:flex md:space-x-5 space-x-0 md:space-y-0 space-y-5">
            <div className="form-boxes">
              <p>email</p>
              <input
                type="text"
                className=" form-inputs"
                placeholder="Enter your Email"
              />
            </div>
            <div className=" form-boxes">
              <p>phone number</p>
              <div className=" flex gap-3">
                <select
                  name="nationality"
                  id="nationality"
                  className=" w-14 bg-transparent border rounded-md"
                >
                  <option value="india">india</option>
                </select>
                <input
                  type="text"
                  className=" form-inputs"
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
          </div>
          <div className=" form-boxes">
            <p>message</p>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your Message"
              className=" p-3 border bg-transparent rounded-md md:w-[740px] w-full md:h-36 h-20"
            ></textarea>
          </div>
          <div className=" md:flex items-center justify-between space-y-5 md:space-y-0">
            <div className=" gap-3 flex text-tSecondary">
              <input type="checkbox" name="" id="terms" />
              <label htmlFor="terms">
                i agree with the terms of use and privacy policy
              </label>
            </div>
            <SendMessage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
