import React from "react";
import { useInView } from "react-intersection-observer";
import "../styles/Services.css";

const ServiceCard = ({ title, description, icon }) => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.2, 
    rootMargin: "-50px 0px",
  });

  return (
    <div
      ref={ref}
      className={`service__card ${inView ? "visible" : ""}`}
    >
      <span className="service__icon">{icon}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
