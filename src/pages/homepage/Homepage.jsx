import { useState } from "react";
import Box from "../../components/box/Box";

import "./homepage.styles.scss";

const Homepage = () => {
  const [letters, setLetters] = useState("react");
  const [isOpen, setIsOpen] = useState(true);

  const handleInputChange = (e) => {
    setLetters(e.target.value);
  };
  const handleClose = () => {
    setIsOpen((prev) => !prev);
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
        <Box letters={letters} />
      </section>
    </main>
  );
};

export default Homepage;
