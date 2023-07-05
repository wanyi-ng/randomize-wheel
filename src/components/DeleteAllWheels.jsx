import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAllWheels } from '../store/reducers/wheelSlice'
import { TrashIcon } from '@heroicons/react/24/solid'


export default function DeleteAllWheels() {
  const dispatch = useDispatch()

  const handleDeleteAllWheels = async () => {
    await dispatch(deleteAllWheels())
  }

  return (
    <button
      className="mt-6 flex items-center rounded-md text-red11 bg-red4 hover:bg-red5 focus:shadow-red7 px-3.5 py-2.5 text-sm font-semibold shadow-sm focus:shadow-[0_0_0_2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  focus-visible:outline-indigo-600"
      aria-label='Delete all wheels'
      onClick={handleDeleteAllWheels}
    >
      <TrashIcon className='w-5 h-5' />
      <span className='ml-2'>Delete All Wheels</span>
    </button>
  )
}
