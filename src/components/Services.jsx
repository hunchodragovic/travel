import "./Services.css";

const Services = () => {
  return (
    <div className="service-container">
      <h1>Our Services</h1>
      <p>
        Explore the world with ease—our travel agency offers top-notch services
        to make your journey unforgettable.
      </p>

      <div className="service-cards">
        <div className="service-card">
          <h2>Flight Booking</h2>
          <p>
            Get the best flight deals with seamless online booking and exclusive
            discounts.
          </p>
        </div>

        <div className="service-card">
          <h2>Hotel Reservation</h2>
          <p>
            Find and book the perfect accommodation at the best prices
            worldwide.
          </p>
        </div>

        <div className="service-card">
          <h2>Tour Packages</h2>
          <p>
            Enjoy all-inclusive tours with expertly planned itineraries for a
            stress-free vacation.
          </p>
        </div>

        <div className="service-card">
          <h2>Travel Insurance</h2>
          <p>
            Travel with peace of mind—our insurance covers unexpected events and
            emergencies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
