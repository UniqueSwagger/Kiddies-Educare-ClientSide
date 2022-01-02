import React from "react";
import useEvents from "../../../hooks/useEvents";

const Footer = () => {
  const events = useEvents();
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="px-4 w-10/12 mx-auto">
        {/* top section */}
        <div className="text-gray-500 py-4 grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-gray-400 items-center">
          <div className="flex flex-col justify-center items-center">
            <div>
              <h5>Pages</h5>
              <ul className="p-0 m-0">
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <h5>Events</h5>
              <ul className="p-0 m-0">
                {events?.map((e) => (
                  <li key={e.id}>{e.title}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <h5>Courses</h5>
              <ul className="p-0 m-0">
                <li>Learn English</li>
                <li>Coding For Kids</li>
                <li>Good Handwriting</li>
              </ul>
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className="flex justify-between py-3">
          <span>2022 &copy; Kiddies Educare | All Rights Reserved</span>
          <span>Call us on +44009932324</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
