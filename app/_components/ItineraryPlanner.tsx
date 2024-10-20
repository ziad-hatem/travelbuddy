"use client";
import React, { useState } from "react";

const ItineraryPlanner: React.FC = () => {
  const [itinerary, setItinerary] = useState<string[]>([]);
  const [activity, setActivity] = useState<string>("");

  const addActivity = () => {
    if (activity.trim() !== "") {
      setItinerary([...itinerary, activity.trim()]);
      setActivity("");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Itinerary</h2>
      <ul className="list-disc pl-5 mb-4">
        {itinerary.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex">
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="Add a new activity"
          className="flex-grow p-2 border text-black outline-none rounded-l"
        />
        <button
          onClick={addActivity}
          className="px-4 py-2 bg-blue-600 text-white rounded-r"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ItineraryPlanner;
