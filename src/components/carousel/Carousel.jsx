import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./CarouselButtons";
import { useEmblaCarousel as useCarousel } from "embla-carousel/react";
import { useHistory } from "react-router-dom";

import "./carousel.styles.css";

const Carousel = ({ config, slides }) => {
  const [viewportRef, carousel] = useCarousel(config?.viewportConfig);
  const Image = ({ src, componentName, children }) => {
    return (
      <div
        style={{
          backgroundImage: `url(${src})`,
        }}
        className={`${componentName} carousel__slide_img`}
      >
        {children}
      </div>
    );
  };
  return (
    <div className="carousel">
      <div className={`${config?.key} carousel__viewport`} ref={viewportRef}>
        <div className="carousel__container">
          {slides.length &&
            slides.map((slide) => {
              return (
                <div className="carousel__slide" key={slide._id}>
                  <div className="carousel__slide__inner">
                    <Image src={slide?.images?.[0]} componentName={config?.key}>
                      <section className="carousel__slide__section">
                        {config?.key === "hero" && (
                          <>
                            <h2 className="carousel__slide__heading">
                              Premium Wallpapers
                            </h2>
                          </>
                        )}
                      </section>
                    </Image>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <CarouselBtn carousel={carousel} />
    </div>
  );
};

//made it in a seperate component to prevent re downloading of images of parent component on every re-render.
const CarouselBtn = ({ carousel }) => {
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const scrollPrev = useCallback(
    () => carousel && carousel.scrollPrev(),
    [carousel]
  );
  const scrollNext = useCallback(
    () => carousel && carousel.scrollNext(),
    [carousel]
  );
  const onSelect = useCallback(() => {
    if (!carousel) return;
    setPrevBtnEnabled(carousel.canScrollPrev());
    setNextBtnEnabled(carousel.canScrollNext());
  }, [carousel]);

  useEffect(() => {
    if (!carousel) return;
    carousel.on("select", onSelect);
    onSelect();
  }, [carousel, onSelect]);
  return (
    <>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </>
  );
};

export default Carousel;
