import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-indigo-700">
      <div className="container mx-auto text-center xl:flex xl:text-left lg:text-left">
        <div className="xl:w-3/6 sm:w-full xl:mb-0">
          <p className="text-center text-white xl:text-left">
            &copy; 2023 Randomizer Wheel. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
