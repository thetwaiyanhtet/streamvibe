import React, { useState, useEffect, useRef } from "react";
import MiniSlider from "./MiniSlider";
import CategoryCard from "./CategoryCard";
import SlideBar from "./SlideBar";

const Genres = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const containerRef = useRef(null);

  const items = [
    { start: 0, name: "Action" },
    { start: 4, name: "Comedy" },
    { start: 8, name: "Drama" },
    { start: 12, name: "Horror" },
    { start: 16, name: "Thriller" },
  ];

  const handleScroll = () => {
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.firstChild.offsetWidth;
    const visibleItem = Math.round(scrollLeft / itemWidth);
    setCurrentItem(visibleItem);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="px-3">
        <div className="flex justify-between items-center mb-7">
          <h1>Our Genres</h1>
          <div className="md:flex hidden">
            <MiniSlider />
          </div>
        </div>
        <div
          className="flex justify-between my-10 overflow-x-scroll hide-scrollbar gap-5"
          ref={containerRef}
        >
          {items.map((item, index) => (
            <CategoryCard key={index} start={item.start} name={item.name} />
          ))}
        </div>
        <div className="flex justify-center md:hidden">
          <SlideBar currentItem={currentItem} totalItems={items.length} />
        </div>
      </div>
    </div>
  );
};

export default Genres;
