import { useState, useRef } from "react";
import { getRandomColor } from "./homepage.utils";
import "./homepage.styles.scss";

const Homepage = () => {
  const [letters, setLetters] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const prevColor = useRef();

  const handleInputChange = (e) => {
    setLetters(e.target.value);
  };
  const handleClose = () => {
    setIsOpen((prev) => !prev);
  };
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
    <main>
      <section style={{ width: isOpen ? "20%" : "1%" }} className="sidenav">
        <span onClick={handleClose} className="close">
          {isOpen ? "-" : "+"}
        </span>
        <div>{isOpen && "Sidenav"}</div>
      </section>
      <section style={{ width: isOpen ? "80%" : "99%" }} className="major">
        <input
          type="text"
          onChange={handleInputChange}
          value={letters}
          placeholder="Type Your String"
          className="homepage__input"
        />
        <div className="homepage__container">
          {[...letters].map((char, i) => (
            <div
              key={i}
              style={{
                borderColor: (i + 1) % 3 === 0 && getColor(),
              }}
              className="homepage__box"
            >
              {char}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Homepage;
