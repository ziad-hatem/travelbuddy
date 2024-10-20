import React from "react";
import DestinationCard from "./_components/DestinationCard";
import { Destination } from "./types/index";

interface HomeProps {
  destinations: Destination[];
}

const Home: React.FC<HomeProps> = () => {
  // For demonstration, we're using hardcoded data. Replace this with real API calls as needed.
  const destinations: Destination[] = [
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
  ];

  return (
    <div>
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to TravelBuddy</h1>
        <p className="text-gray-700">
          Discover amazing destinations, plan your itineraries, and make your
          trips unforgettable.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
