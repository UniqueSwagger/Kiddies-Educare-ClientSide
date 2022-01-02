import {
  CakeIcon,
  GiftIcon,
  HomeIcon,
  PlayIcon,
} from "@heroicons/react/outline";
import React from "react";

const Features = () => {
  return (
    <section className="py-12 w-10/12 mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 sm:gap-4 lg:gap-8 text-sm">
      <div className="px-4">
        <div className="flex items-end space-x-2">
          <PlayIcon className="w-12 h-12 text-cyan-500 hover:traslate-y-3 hover:transition-transform" />
          <h2 className="text-xl text-gray-500">Play Time</h2>
        </div>
        <div className="text-gray-600 mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo rerum
          blanditiis dolorum vel, non expedita vero ipsa quam! Quam, repellat.
        </div>
      </div>
      <div className="px-4">
        <div className="flex items-end space-x-2">
          <HomeIcon className="w-12 h-12 text-indigo-500 hover:traslate-y-3 hover:transition-transform" />
          <h2 className="text-xl text-gray-500">Day Care</h2>
        </div>
        <div className="text-gray-600 mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo rerum
          blanditiis dolorum vel, non expedita vero ipsa quam! Quam, repellat.
        </div>
      </div>
      <div className="px-4">
        <div className="flex items-end space-x-2">
          <CakeIcon className="w-12 h-12 text-teal-500 hover:traslate-y-3 hover:transition-transform" />
          <h2 className="text-xl text-gray-500">Healthy Meal</h2>
        </div>
        <div className="text-gray-600 mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo rerum
          blanditiis dolorum vel, non expedita vero ipsa quam! Quam, repellat.
        </div>
      </div>
      <div className="px-4">
        <div className="flex items-end space-x-2">
          <GiftIcon className="w-12 h-12 text-rose-500 hover:traslate-y-3 hover:transition-transform" />
          <h2 className="text-xl text-gray-500">Events</h2>
        </div>
        <div className="text-gray-600 mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo rerum
          blanditiis dolorum vel, non expedita vero ipsa quam! Quam, repellat.
        </div>
      </div>
      <div className="px-4">
        <div className="flex items-end space-x-2">
          <CakeIcon className="w-12 h-12 text-purple-500 hover:traslate-y-3 hover:transition-transform" />
          <h2 className="text-xl text-gray-500">Outdoor</h2>
        </div>
        <div className="text-gray-600 mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo rerum
          blanditiis dolorum vel, non expedita vero ipsa quam! Quam, repellat.
        </div>
      </div>
      <div className="px-4">
        <div className="flex items-end space-x-2">
          <CakeIcon className="w-12 h-12 text-pink-500 hover:traslate-y-3 hover:transition-transform" />
          <h2 className="text-xl text-gray-500">Learning</h2>
        </div>
        <div className="text-gray-600 mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo rerum
          blanditiis dolorum vel, non expedita vero ipsa quam! Quam, repellat.
        </div>
      </div>
    </section>
  );
};

export default Features;
