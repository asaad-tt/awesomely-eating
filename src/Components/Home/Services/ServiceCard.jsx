import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCard = ({ homeService }) => {
  const { _id, title, img, price, description } = homeService;
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <PhotoProvider>
            <PhotoView src={img}>
              <img src={img} alt="Shoes" />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            {description.length > 100 ? (
              <p>{description.slice(0, 100) + "..."}</p>
            ) : (
              <p>{description}</p>
            )}
          </p>
          <p className="text-xl font-semibold">
            Price: <span className="text-primary">{price}$</span>
          </p>
          <div className="card-actions justify-end">
            <Link to={`/services/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
