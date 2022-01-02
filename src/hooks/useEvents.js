import { useState, useEffect } from "react";

const useEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("./events.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvents(data);
      });
  }, []);
  return events;
};

export default useEvents;
