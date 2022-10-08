import React from "react";
import Picture from "../components/Picture";
import data from "../helper/data";

const Homepage = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <h1>Albums</h1>
      <div className="pictures">
        {data.map((item) => (
          <Picture item={item} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
