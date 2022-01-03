import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useEvents from "../../../hooks/useEvents";
import Event from "./Event/Event";

const Events = () => {
  const events = useEvents();

  return (
    <section className="my-5">
      <SectionTitle
        title="Latest Events"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          distinctio eveniet aspernatur, nam nihil in modi aliquam facilis eaque
          ex culpa est incidunt eum accusantium vel atque molestias consequuntur
          deleniti?"
      />
      <div className="py-12 w-10/12 mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 sm:gap-4 lg:gap-8 text-sm">
        {events.length &&
          events.map((event) => <Event key={event.id} event={event} />)}
      </div>
    </section>
  );
};

export default Events;
