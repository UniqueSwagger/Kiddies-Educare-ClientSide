import React from "react";
import useEvents from "../../hooks/useEvents";
import Event from "./Event/Event";

const Events = () => {
  const events = useEvents();

  return (
    <section>
      <div className="text-center w-11/12 sm:w-6/12 lg:w-8/12 mx-auto space-y-8">
        <h1 className="text-5xl text-medium text-slate-800 italic">
          Latest Events
        </h1>
        <p className="text-slate-600 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          distinctio eveniet aspernatur, nam nihil in modi aliquam facilis eaque
          ex culpa est incidunt eum accusantium vel atque molestias consequuntur
          deleniti?
        </p>
      </div>
      <div className="py-12 w-10/12 mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 sm:gap-4 lg:gap-8 text-sm">
        {events.length &&
          events.map((event) => <Event key={event.id} event={event} />)}
      </div>
    </section>
  );
};

export default Events;
