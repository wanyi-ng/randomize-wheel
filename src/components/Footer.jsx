import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    // <footer className='fixed bottom-0 left-0 right-0 w-full px-4 flex justify-between items-center text-info-content'>
    <footer className='bg-white w-full px-4 flex justify-between items-center text-info-content'>
      <div>
        <p>&copy; 2023 Randomizer Wheel. All rights reserved.</p>
      </div>
      <div>
      <Link className="link link-secondary">Contact</Link>
      </div>
    </footer>  
  )
}
