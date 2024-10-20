import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} TravelBuddy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
