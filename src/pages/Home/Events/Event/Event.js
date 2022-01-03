import React from "react";
import { ClockIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const Event = ({ event }) => {
  const { title, fromDate, toDate, fromTime, toTime, location, image, id } =
    event;
  const navigate = useNavigate();
  return (
    <div key={id} className="relative space-y-4">
      <div onClick={navigate(`/eventDetails/${id}`)}>
        <img src={image} alt="event" />
        <div className="bg-orange-400 text-gray-200 absolute w-16 h-16 text-base top-0 text-center p-2">
          <span className="text-xl">01</span> <br />
          <span>Jan</span>
        </div>
      </div>
      <div>
        <h3
          onClick={() => navigate(`/eventDetails/${id}`)}
          className="text-gray-600 border-b border-gray-400 pb-3 text-2xl"
        >
          {title}
        </h3>
        <div className="flex text-slate-500 items-center">
          <span>
            <ClockIcon className="w-4 h-4" />
          </span>
          <span>
            {fromDate} {fromTime} {" - "}
            {toDate} {toTime}
          </span>
          <span></span>
        </div>
        <div className="flex text-slate-500 items-center">
          <span>
            <LocationMarkerIcon className="w-4 h-4" />
          </span>
          <span>{location}</span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Event;
