import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="https://media.sciencephoto.com/c0/39/63/81/c0396381-800px-wm.jpg"
          className="card-img"
          alt="Background-Image"
          height="600px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2 ">
              SHOP YOUR FAVOURITE ITEMS OR ADD TO CART
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
