import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold">
          TravelBuddy
        </Link>
        <div>
          <Link href="/destinations" className="mr-4">
            Destinations
          </Link>
          <Link href="/itinerary" className="mr-4">
            My Itinerary
          </Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
