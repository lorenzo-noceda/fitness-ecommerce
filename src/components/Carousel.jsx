import React from "react";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide my-4"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active d-flex justify-content-center">
            <img
              className="d-block w-100 max-h-500"
              src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/4853705/pexels-photo-4853705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/4853705/pexels-photo-4853705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </a>
      </div>
    </>
  );
};

export default Carousel;
