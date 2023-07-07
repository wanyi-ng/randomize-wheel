import React from 'react'
import { useDispatch } from 'react-redux'
import RollButton from './RollButton'
import { TrashIcon } from '@heroicons/react/24/outline'
import { deleteWheel } from '../store/reducers/wheelSlice'
import UpdateWheel from './UpdateWheel'

export default function Wheel({ wheel }) {

  const dispatch = useDispatch()

  const handleDeleteWheel = async () => {
    await dispatch(deleteWheel(wheel.id))
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl h-max">
      {/* <figure>
        <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
      </figure> */}
      <div className="card-body flex flex-col justify-between space-y-8 divide-y divide-gray-500">
        <div className='space-y-6 divide-y divide-gray-500'>
          <div className='flex justify-between'>
            <h2 className="card-title">{wheel.name}</h2>
            <div className='space-x-2 '>
              <UpdateWheel wheel={wheel} />
              <button className='btn btn-accent text-accent-content' type='button' aria-label='Delete wheel' onClick={handleDeleteWheel}>
                <span className='inline-flex justify-center items-center'>
                  <TrashIcon className='w-5 h-5' />
                  {/* Delete */}
                </span>
              </button>
            </div>
          </div>
          <ul className='pt-6'>
            {wheel.options.map((option, index) => (
              <li key={`${index}-${wheel.id}`}>{option}</li>
            ))}
          </ul>
        </div>
        <div className="card-actions w-full flex flex-col items-end">
          <RollButton wheelId={wheel.id} />
          <div className="self-start leading-8 w-full">
            <span>Rolled Option: </span>
            <h2 className='font-bold text-2xl tracking-wide'>{wheel.rolledOption}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}