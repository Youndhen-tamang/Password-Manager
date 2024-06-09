import React from 'react'

export default function Navbar() {
  return (
  <nav className='bg-slate-800  '>
    <div className="mycontainer flex justify-between items-center px-4 py-9 h-14 text-white">
    <div className='logo font-bold'>
    <span className='text-green-700'>&lt;</span>
      Pass
      <span className='text-green-700'>Store/ &gt;</span>

      </div>
    <ul>
      <li className='flex gap-4'>
        <a className='hover:font-bold' href="/">Home</a>
        <a className='hover:font-bold'href="#">About</a>
        <a className='hover:font-bold'href="#">Contact</a>
    </li>
    </ul>
    <button className='text-white bg-green-600 my-5 rounded-md flex justify-between items-center ring-white ring-1 w-8 md:w-10'>
      <img className='invert w-8 md:w-10 p-1' src="./github.png" alt=" github logo" />
      <span className='font-bold px-2'>Github</span>
      </button>
    </div>

  </nav>
  )
}
