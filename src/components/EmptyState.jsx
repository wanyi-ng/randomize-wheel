import React from 'react'
import { SquaresPlusIcon } from '@heroicons/react/24/solid'

import AddWheel from './AddWheel'


export default function EmptyState() {

  return (
    <section className='absolute inset-0 grid grid-cols-1 place-content-center place-items-center lg:place-content-start lg:mt-52'>
      <div className='flex flex-col justify-center items-center'>
        <SquaresPlusIcon className='w-16 h-16 text-gray-500 mb-2' />
        <p className='font-semibold leading-8 text-gray-900'>No wheels</p>
        <p className='text-gray-500'>Get started by creating a new wheel.</p>
      </div>

      <AddWheel />

    </section>
  )
}
