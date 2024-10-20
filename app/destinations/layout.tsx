import React from "react";
import { ReactNode } from "react";

interface DestinationsLayoutProps {
  children: ReactNode;
}

const DestinationsLayout: React.FC<DestinationsLayoutProps> = ({
  children,
}) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Explore Destinations</h1>
      {children}
    </div>
  );
};

export default DestinationsLayout;
