import { ClockIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import React from "react";

const Event = ({ event }) => {
  return (
    <div className=" relative space-y-4">
      <div>
        <img src={event.image} alt="event" />
        <div className="bg-orange-400 text-gray-200 absolute w-16 h-16 text-base top-0 text-center p-2">
          <span className="text-xl">22</span> <br />
          <span>Oct</span>
        </div>
      </div>
      <div>
        <h3 className="text-gray-600 border-b border-gray-400 pb-3 text-2xl">
          {event.title}
        </h3>
        <div className="flex text-slate-500 items-center">
          <span>
            <ClockIcon className="w-4 h-4" />
          </span>
          <span>
            {event.fromDate} {event.fromTime} {" - "}
            {event.fromDate} {event.fromTime}
          </span>
          <span></span>
        </div>
        <div className="flex text-slate-500 items-center">
          <span>
            <LocationMarkerIcon className="w-4 h-4" />
          </span>
          <span>{event.location}</span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Event;
