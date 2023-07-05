import React from 'react'
import { Link } from 'react-router-dom'

import GradientOne from '../atoms/GradientOne'
import GradientTwo from '../atoms/GradientTwo'

export default function Hero() {
  return (
    <section className="bg-white relative isolate px-6 pt-14 lg:px-8">
        <GradientOne />
        <div className="mx-auto max-w-xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Randomizer Wheel</h1>
            <p className='mt-10 text-lg leading-8 text-gray-600'>
              Add your options, spin the wheel, <br/>
              and let randomness guide your choices.
              {/* Randomizer Wheel takes the stress out of tough decision making by injecting a thrilling dose of unpredictability into your choices! */}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/create"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <a href="#features" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <GradientTwo />
    </section>
  )
}
