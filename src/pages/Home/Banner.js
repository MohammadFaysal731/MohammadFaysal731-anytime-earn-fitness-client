import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
import banner4 from "../../assets/images/banner4.png";
const Banner = () => {
  const bannerImages = [
    { _id: 1, name: banner1 },
    { _id: 2, name: banner2 },
    { _id: 3, name: banner3 },
    { _id: 4, name: banner4 },
  ];
  return (
    <>
      <Carousel>
        {bannerImages?.map((banner, index) => (
          <Carousel.Item interval={1500} key={index}>
            <img
              className="d-block w-100 img-fluid"
              src={banner.name}
              alt={banner.name}
              style={{ height: "650px" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Banner;
