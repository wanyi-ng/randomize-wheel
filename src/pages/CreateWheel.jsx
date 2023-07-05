import React from 'react'
import { useSelector } from 'react-redux';

import EmptyState from '../components/EmptyState';
import AddWheel from '../components/AddWheel';
import DeleteAllWheels from '../components/DeleteAllWheels';
import Wheel from '../components/Wheel';

export default function CreateWheel() {

  const wheels = useSelector((state) => state.store.wheels)

  return (
    <main className='bg-white min-h-screen'>
      {/* <div className="h-full relative isolate min-h-screen pattern-dots pattern-blue-400 pattern-bg-white pattern-size-6 pattern-opacity-20 flex justify-center items-center text-center" /> */}
        {wheels.length === 0 ? (
          <EmptyState />
        ) : (
          <section className='py-32 flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='font-semibold leading-8 text-gray-900'>{`You have created ${wheels.length} wheels so far`}</h2>
              <span className='flex justify-center items-center gap-4'>
                <AddWheel />
                <DeleteAllWheels />
              </span>
            </div>

            <div className='mt-24 max-w-7xl flex flex-col justify-center md:flex-row md:flex-wrap gap-4'>
              {wheels.map((wheel) => (
                <Wheel key={wheel.id} wheel={wheel} randomOption={wheel.selectedOption} />
              ))}
              {/* <div className="col-start-1 col-end-5 md:col-end-3 lg:col-end-5"></div> */}
            </div>

          </section>
        )}
    </main>
  )
}

// background violet-2
// text violet 11
// blue 10
// pink 11
// mauve 9 mauve 8