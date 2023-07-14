import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import EmptyState from "../components/EmptyState";
import AddWheel from "../components/AddWheel";
import DeleteAllWheels from "../components/DeleteAllWheels";
import Wheel from "../components/Wheel";

export default function CreateWheel() {
  const wheels = useSelector((state) => state.wheels.wheels);

  return (
    <main className="bg-white min-h-screen">
      {wheels.length <= 0 ? (
        <EmptyState />
      ) : (
        <section className="py-32 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <p className="leading-8 text-gray-900">
              You have created{" "}
              <span className="font-semibold underline underline-offset-4">
                {`${wheels.length}`} wheels
              </span>{" "}
              so far
            </p>
            {/* memo() */}
            <span className="flex justify-center items-center gap-4">
              <AddWheel />
              <DeleteAllWheels />
            </span>
          </div>

          <div className="mt-24 max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center gap-4 xl:gap-x-12">
            {wheels.map((wheel) => (
              <Wheel
                key={wheel.id}
                wheel={wheel}
                randomOption={wheel.selectedOption}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
