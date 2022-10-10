import Buton from "../buton/Buton";
import "./Card.css";

const Card = ({ language, btn, img }) => {
  // console.log(props);
  // const { language, btn, img } = props;  //!destr.
  return (
    <div className="title">
      <h1>{language}</h1>
      <img className="images" src={img} alt="img" />
      <Buton btn={btn} />
    </div>
  );
};

export default Card;
