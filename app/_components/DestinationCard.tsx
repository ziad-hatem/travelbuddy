import Link from "next/link";
import React from "react";
import { Destination } from "../types/index";
import Image from "next/image";

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image
        width={100}
        height={100}
        quality={100}
        loading="lazy"
        src={destination.image}
        alt={destination.name}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{destination.name}</h2>
        <p className="text-gray-600">{destination.description}</p>
        <Link
          legacyBehavior
          href={`/destinations/${destination.id}`}
          className="text-blue-500 mt-2 block"
        >
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
