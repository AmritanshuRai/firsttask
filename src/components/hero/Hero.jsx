import Carousel from "../carousel/Carousel";

import { v4 as uuidv4 } from "uuid";
const Hero = () => {
  const slides = [1, 2, 3, 4, 5, 6].map((name) => {
    return {
      images: [`/img/${name}.jpg`],
      title: name,
      _id: uuidv4(),
    };
  });

  const config = {
    key: "hero",
    viewportConfig: {
      skipSnaps: false,
    },
  };
  return <Carousel config={config} slides={slides} />;
};

export default Hero;
