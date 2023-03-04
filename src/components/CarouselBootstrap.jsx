import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselBootstrap = () => {
  return (
    <Carousel fade interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100 max-h-600"
          src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 max-h-600"
          src="https://images.pexels.com/photos/4853705/pexels-photo-4853705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 max-h-600"
          src="https://www.verywellfit.com/thmb/mL7JGVDWrbS-o8UgRT-OSlximQk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1196098904-acf09b4e923d499a84151b51371b126c.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselBootstrap;
