import "./homepage.styles.scss";

const Homepage = () => {
  return (
    <main>
      <input type="text" placeholder="Type your string" />
      <div className="homepage__container">
        <div className="homepage__box">Box1</div>
        <div className="homepage__box">Box2</div>
        <div className="homepage__box">Box3</div>
        <div className="homepage__box">Box4</div>
        <div className="homepage__box">Box5</div>
        <div className="homepage__box">Box6</div>
        <div className="homepage__box">Box7</div>
        <div className="homepage__box">Box8</div>
        <div className="homepage__box">Box9</div>
      </div>
    </main>
  );
};

export default Homepage;
