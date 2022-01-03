import axios from "axios";
import { useState, useEffect } from "react";

const useEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const res = await axios.get("./events.json");
      setEvents(res.data);
    };
    getEvents();
  }, []);
  return events;
};

export default useEvents;
