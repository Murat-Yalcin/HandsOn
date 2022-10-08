import React from "react";
import data from "../helper/data";

const Picture = ({ item }) => {
  //   console.log(props);
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={item.src.large} alt={`Image by ${item.photographer}`} />
      </div>
      <div className="info">
        <p style={{ color: "steelblue" }}>{item.photographer}</p>
      </div>
    </div>
  );
};

export default Picture;
