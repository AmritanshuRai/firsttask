import { useRef } from "react";
import { getRandomColor } from "../../utils/homepage.utils";
import "./box.styles.scss";

const Box = ({ letters }) => {
  const prevColor = useRef();

  const getColor = () => {
    const color = getRandomColor();
    if (prevColor.current === color) {
      getColor();
    } else {
      prevColor.current = color;
      return color;
    }
  };
  return (
    <div className="box__container">
      {[...letters].map((char, i) => (
        <div
          key={i}
          style={{
            borderColor: (i + 1) % 3 === 0 && getColor(),
          }}
          className="box__box"
        >
          {char}
        </div>
      ))}
    </div>
  );
};

export default Box;
