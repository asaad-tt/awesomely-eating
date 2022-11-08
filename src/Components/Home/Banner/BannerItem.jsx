import React from "react";
import "./BannerItem.css";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Its awesome eating delicious <br />
          Homemade food
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 mt-20 top-1/3">
        <p className="text-xl text-white"></p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-2/4">
        <button className="btn btn-warning mr-5">Get your meal</button>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
