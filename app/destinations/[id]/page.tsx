import React from "react";
import { Destination } from "../../types/index";
import { notFound } from "next/navigation";
import Image from "next/image";

interface DestinationDetailProps {
  params: { id: string };
}

const DestinationDetail: React.FC<DestinationDetailProps> = async ({
  params,
}) => {
  const destination = await fetchDestination(params.id);

  if (!destination) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{destination.name}</h1>
      <Image
        width={100}
        height={100}
        quality={100}
        loading="lazy"
        src={destination.image}
        alt={destination.name}
        className="w-full h-auto object-cover mb-4"
      />
      <p className="text-gray-700 mb-4">{destination.description}</p>
      <h2 className="text-2xl font-semibold mb-2">Top Attractions</h2>
      <ul className="list-disc pl-5">
        {destination.attractions.map((attr, index) => (
          <li key={index} className="mb-1">
            {attr}
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function generateStaticParams() {
  // Replace with real data fetching logic
  const destinations = [{ id: "1" }, { id: "2" }, { id: "3" }];

  return destinations.map((destination) => ({
    id: destination.id,
  }));
}

async function fetchDestination(id: string): Promise<Destination | null> {
  // Replace with real API call
  const destinationData: Record<string, Destination> = {
    "1": {
      id: "1",
      name: "Paris, France",
      description:
        "Paris is the capital city of France, known for its art, gastronomy, and culture.",
      image: "/images/paris.webp",
      attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
    },
    "2": {
      id: "2",
      name: "Tokyo, Japan",
      description:
        "Tokyo is Japan’s capital, known for its modernity, technology, and rich culture.",
      image: "/images/tokyo.webp",
      attractions: ["Shibuya Crossing", "Tokyo Tower", "Meiji Shrine"],
    },
    "3": {
      id: "3",
      name: "New York, USA",
      description:
        "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean.",
      image: "/images/newyork.webp",
      attractions: ["Statue of Liberty", "Central Park", "Times Square"],
    },
  };

  return destinationData[id] || null;
}

export default DestinationDetail;
