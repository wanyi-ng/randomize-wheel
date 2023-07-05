import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full bg-indigo-700 py-12">
      <div className="container mx-auto xl:flex text-center xl:text-left lg:text-left">
        <div className="xl:w-3/6 sm:w-full mb-6 xl:mb-0">
            <p className="text-white text-center xl:text-left">2023 Randomizer Wheel. All Rights Reserved</p>
        </div>
        <div className="xl:w-3/6 sm:w-full">
          <ul className="xl:flex lg:flex md:flex sm:flex justify-around">
            <li className="text-white hover:text-gray-300 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
              <Link to="/terms-and-conditions">Terms of service</Link>
            </li>
            <li className="text-white hover:text-gray-300 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
              <Link to="/terms-and-conditions#privacyPolicy">Privacy Policy</Link>
            </li>
            <li className="text-white hover:text-gray-300 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
              <Link to="/sitemap">Sitemap</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    // <footer className='fixed bottom-0 left-0 right-0 w-full px-4 flex justify-between items-center text-info-content'>
    // <footer className='bg-white w-full px-4 flex justify-between items-center text-info-content'>
    //   <div>
    //     <p>&copy; 2023 Randomizer Wheel. All rights reserved.</p>
    //   </div>
    //   <div>
    //   <Link className="link link-secondary">Contact</Link>
    //   </div>
    // </footer>
  )
}
