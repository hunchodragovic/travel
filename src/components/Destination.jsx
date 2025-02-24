import React from "react";
import "./Destination.css";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>
      <DestinationData
        className="first-desc"
        heading="Taal Volcan, Batangas"
        text=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis iusto,
          sunt magnam sapiente unde earum eligendi rem assumenda nulla iure,
          quam dignissimos incidunt fugiat. Fuga ducimus recusandae mollitia
          fugit vitae tempora quos numquam. Dolor at quo inventore quos ex? Sunt
          vitae alias nobis? Similique unde magni voluptates a dolor magnam
          suscipit vero molestiae quae, qui at quasi ratione aut labore
          provident harum ipsam iste inventore?"
        img1="../../public/Images/1.jpg"
        img2="../../public/Images/2.jpg"
      />
      <DestinationData
        className="first-desc-reverse"
        heading="Taal Volcan, Batangas"
        text=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis iusto,
          sunt magnam sapiente unde earum eligendi rem assumenda nulla iure,
          quam dignissimos incidunt fugiat. Fuga ducimus recusandae mollitia
          fugit vitae tempora quos numquam. Dolor at quo inventore quos ex? Sunt
          vitae alias nobis? Similique unde magni voluptates a dolor magnam
          suscipit vero molestiae quae, qui at quasi ratione aut labore
          provident harum ipsam iste inventore?"
        img1="../../public/Images/3.jpg"
        img2="../../public/Images/4.jpg"
      />
      <DestinationData
        className="first-desc"
        heading="Taal Volcan, Batangas"
        text=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis iusto,
          sunt magnam sapiente unde earum eligendi rem assumenda nulla iure,
          quam dignissimos incidunt fugiat. Fuga ducimus recusandae mollitia
          fugit vitae tempora quos numquam. Dolor at quo inventore quos ex? Sunt
          vitae alias nobis? Similique unde magni voluptates a dolor magnam
          suscipit vero molestiae quae, qui at quasi ratione aut labore
          provident harum ipsam iste inventore?"
        img1="../../public/Images/6.jpg"
        img2="../../public/Images/8.jpg"
      />
    </div>
  );
};

export default Destination;
