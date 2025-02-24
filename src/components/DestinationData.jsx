import "./Destination.css";

const DestinationData = (props) => {
  return (
    <div className={props.className}>
      <div className="image">
        <img src={props.img1} alt="img" />
        <img src={props.img2} alt="img" />
      </div>
      <div className="desc-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default DestinationData;
