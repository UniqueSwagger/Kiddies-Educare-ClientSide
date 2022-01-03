import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../../../components/BreadCrumb/BreadCrumb";
import axios from "axios";
const EventDetails = () => {
  const { id } = useParams();
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios.get("events.json").then((res) => setEvents(res.data));
  });
  const { title } = events?.find((event) => event.id === Number(id));
  return (
    <div>
      <BreadCrumb title={title} />
    </div>
  );
};

export default EventDetails;
