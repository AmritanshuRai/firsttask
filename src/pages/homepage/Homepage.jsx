import { useState } from "react";
import { getRandomColor } from "./homepage.utils";
import "./homepage.styles.scss";

const Homepage = () => {
  const [letters, setLetters] = useState("");
  const handleInputChange = (e) => {
    setLetters(e.target.value);
  };
  return (
    <main>
      <section className="sidenav">
        <span className="close">-</span>
        <div>sidenav</div>
      </section>
      <section className="major">
        <input
          type="text"
          onChange={handleInputChange}
          value={letters}
          placeholder="Type Your String"
        />
        <div className="homepage__container">
          {[...letters].map((char, i) => (
            <div
              key={i}
              style={{
                borderColor: (i + 1) % 3 === 0 && getRandomColor(),
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
