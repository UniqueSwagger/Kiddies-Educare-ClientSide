import React from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../../../components/BreadCrumb/BreadCrumb";
import useEvents from "../../../../hooks/useEvents";
const EventDetails = () => {
  const { id } = useParams();
  const events = useEvents();
  const event = events?.find((event) => event._id === id);
  return (
    <div>
      <BreadCrumb title={event?.title} />
    </div>
  );
};

export default EventDetails;
