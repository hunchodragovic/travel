import "./Hero.css";

const Hero = (props) => {
  return (
    <div className={props.cName}>
      <img src={props.heroImg} alt="HeroImg" />
      <div className="hero-text">
        <h1
          style={{
            color: props.titleColor || "white",
            WebkitTextFillColor: props.titleColor || "white", // Override transparency
            backgroundColor: "transparent", // Remove background clip effect
          }}
        >
          {props.title}
        </h1>

        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.btnText}
        </a>
      </div>
    </div>
  );
};

export default Hero;
