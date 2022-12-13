import nagrade from "../data/nagrade.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { useBeautyBalls } from "../context/BeautyBallsContext";

SwiperCore.use([Navigation]);

const Products = () => {
  const [swiper, setSwiper] = useState(0);
  const { jumpToSlide } = useBeautyBalls();

  return (
    <div className="beautyball-products-wrapper">
      <Swiper
        initialSlide={jumpToSlide}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        loopFillGroupWithBlank={true}
        onSwiper={(swiper) => setSwiper(swiper)}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {nagrade.map((nagrada) => (
          <SwiperSlide key={nagrada.id}>
            <div className="container">
              <div className="c-item-content-wrap">
                <h3 className="c-item-title"> {nagrada.name} </h3>
                <div className="c-item-conten">
                  <span className="c-item-desc">
                    {" "}
                    <p>{nagrada.desc}</p>
                    <p>&nbsp;</p>
                    <ul>
                      {nagrada.natuknice.map((linija, i) => (
                        <li key={i}>{linija}</li>
                      ))}
                    </ul>
                  </span>
                </div>
                <div className="c-item-img--wrap">
                  <div className="c-item-img--wrapper">
                    <img
                      src={nagrada.imgUrl}
                      className="c-item-img"
                      alt={nagrada.name}
                    />
                    <div
                      className="swiper-button-next "
                      role="button"
                      aria-label="Next slide"
                    ></div>
                    <div
                      className="swiper-button-prev "
                      role="button"
                      aria-label="Previous slide"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div></div>
    </div>
  );
};

export default Products;
