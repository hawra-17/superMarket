import React, { useState } from "react";
import SmallCard from "./SmallCard";
import Orange from "../images/Orange.png";
import Eggplant from "../images/Eggplant.png";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { title: "Fresh Tomato", img: Orange, price: "7$" },
    { title: "Fresh Eggplant", img: Eggplant, price: "10$" },
    { title: "Fresh Tomato", img: Orange, price: "7$" },
    { title: "Fresh Eggplant", img: Eggplant, price: "10$" },
    { title: "Fresh Tomato", img: Orange, price: "7$" },
    { title: "Fresh Eggplant", img: Eggplant, price: "10$" },
  ];

  const slidesToShow = 4; // Number of slides to show at a time

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - slidesToShow : prevSlide - 1
    );
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - slidesToShow ? 0 : prevSlide + 1
    );
  };

  const visibleSlides = slides.slice(currentSlide, currentSlide + slidesToShow);

  return (
    <div className="flex flex-col">
      <p className="text-red-500 text-start">Our items</p>
      {/* div for text with two buttons to the slider */}
      <div className="flex flex-row items-center justify-between">
        <p
          className="text-red-500 text-start text-4xl"
          style={{ marginBottom: "40px", textAlign: "start" }}
        >
          Always healthy grocery with Lemona shop
        </p>

        <div className="flex flex-row gap-2">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            style={{
              backgroundColor: "#1d4ed8", // Tailwind's blue-700 color
              borderRadius: "9999px", // Fully rounded
              padding: "0.625rem", // Tailwind's p-2.5
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.875rem", // Tailwind's text-sm
              transition: "background-color 0.3s",
              marginBottom: "40px",
            }}
            onClick={handlePrevClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
              />
            </svg>
          </button>

          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            style={{
              backgroundColor: "#1d4ed8", // Tailwind's blue-700 color
              borderRadius: "9999px", // Fully rounded
              padding: "0.625rem", // Tailwind's p-2.5
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.875rem", // Tailwind's text-sm
              transition: "background-color 0.3s",
              marginBottom: "40px",
            }}
            onClick={handleNextClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* div for the slider card  */}
      <div
        className="flex flex-row"
        style={{ marginBottom: "20px", marginRight: "40px" }}
      >
        {visibleSlides.map((slide, index) => (
          <SmallCard
            key={index}
            title={slide.title}
            img={slide.img}
            price={slide.price}
          />
        ))}
      </div>
    </div>
  );
}
