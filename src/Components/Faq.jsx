import React, { useState } from "react";
import { QButton } from "./Buttons";
import { FaMinus, FaPlus } from "react-icons/fa";
import { qAndA } from "../Assets/faq";

const QA = () => {
  // State to track which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to handle click on a question
  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="text-2xl flex flex-wrap gap-5 py-5 justify-center">
        {qAndA.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center w-[45%] gap-5 p-3"
            onClick={() => handleClick(index)}
          >
            <div className="bg-glass h-10 w-10 p-2 rounded-md flex justify-center items-center">
              {index + 1}
            </div>
            <div>
              <p>{item.question}</p>
              <p className={`text-base text-gray-500 answer ${openIndex === index ? "answer-visible" : ""}`}>
                {item.answer}
              </p>
            </div>
            <div className="w-5">
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <div className="p-5 md:px-20">
      <div className="md:flex justify-between items-end space-y-5 md:space-y-0">
        <div>
          <h1>frequently asked questions</h1>
          <p className=" text-tSecondary">
            got questions? we've got answers! check out our FAQ section to find
            answers to the most common questions about streamvibe.
          </p>
        </div>
        <div className="flex items-start">
          <QButton />
        </div>
      </div>
      <QA />
    </div>
  );
};

export default Faq;
