import React from "react";
import DestinationCard from "../_components/DestinationCard";
import { Destination } from "../types/index";

const Destinations = async () => {
  const destinations = await fetchDestinations();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {destinations.map((dest) => (
        <DestinationCard key={dest.id} destination={dest} />
      ))}
    </div>
  );
};

async function fetchDestinations(): Promise<Destination[]> {
  // Replace this with your actual data fetching logic, e.g., API calls
  return [
    {
      id: "1",
      name: "Paris, France",
      description: "The city of love and lights.",
      image: "/images/paris.webp",
      attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
    },
    {
      id: "2",
      name: "Tokyo, Japan",
      description: "A bustling metropolis blending tradition and modernity.",
      image: "/images/tokyo.webp",
      attractions: ["Shibuya Crossing", "Tokyo Tower", "Meiji Shrine"],
    },
    {
      id: "3",
      name: "New York, USA",
      description: "The city that never sleeps.",
      image: "/images/newyork.webp",
      attractions: ["Statue of Liberty", "Central Park", "Times Square"],
    },
    // Add more destinations as needed
  ];
}

export default Destinations;
