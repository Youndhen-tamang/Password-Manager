import React from 'react'

export default function Footer() {
  return (
    <div className='bg-slate-800 flex flex-col justify-center items-center h-20 w-full'>
      <div className='flex flex-row justify-center items-center'>
      <div className='logo font-bold text-white text-2xl flex flex-row'>
      <span className='text-green-700'>&lt;</span>
      Pass
      <span className='text-green-700'>Store/ &gt;</span>
      </div>
      <div className='text-white font-bold flex justify-center items-center'>
        created with <img className='w-10 invert' src='github.png' alt="love"></img>
      </div>
      </div>   
    </div>
  )
}
