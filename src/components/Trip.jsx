import "./Trip.css";
import TripData from "./TripData";
const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps</p>
      <div className="trip-card">
        <TripData
          image="../../public/Images/5.jpg"
          heading="Trip in Indonesia"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil sit reiciendis in quo quas animi aut omnis dolore? Incidunt, quisquam doloribus? Quos error provident ipsum."
        />
        <TripData
          image="../../public/Images/6.jpg"
          heading="Trip in Melburn"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil sit reiciendis in quo quas animi aut omnis dolore? Incidunt, quisquam doloribus? Quos error provident ipsum."
        />
        <TripData
          image="../../public/Images/8.jpg"
          heading="Trip in France"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil sit reiciendis in quo quas animi aut omnis dolore? Incidunt, quisquam doloribus? Quos error provident ipsum."
        />
      </div>
    </div>
  );
};

export default Trip;
