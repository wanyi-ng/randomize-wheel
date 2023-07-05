import React from 'react'
import RollButton from './RollButton'

export default function Wheel({ wheel, randomOption }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      {/* <figure>
        <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
      </figure> */}
      <div className="card-body flex flex-col justify-between">
        <div className='space-y-6'>
          <h2 className="card-title">{wheel.name}</h2>
          <ul>
            {wheel.options.map((option, index) => (
              <li key={`${index}-${wheel.id}`}>{option}</li>
            ))}
          </ul>
        </div>
        <div className="card-actions justify-end">
          <RollButton wheelId={wheel.id} />
        </div>
          <div className="mt-2">
            <p>Selected Option: {randomOption}</p>
          </div>
      </div>
    </div>
  )
}
