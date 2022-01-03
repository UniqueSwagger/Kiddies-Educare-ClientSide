import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../../../components/BreadCrumb/BreadCrumb";
import Loader from "../../../../components/Loader/Loader";
import useEvents from "../../../../hooks/useEvents";
const EventDetails = () => {
  const { id } = useParams();
  const events = useEvents();
  const event = events?.find((event) => event._id === id);
  return (
    <Fragment>
      {event ? (
        <div>
          <BreadCrumb title={event?.title} />
        </div>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

export default EventDetails;
