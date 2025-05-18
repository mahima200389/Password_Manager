import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center w-full'>
    <div className='text-2xl text-white font-bold'>
                    <span className='text-green-700'>&lt;</span>
                    <span>Pass</span>
                    <span className='text-green-500'>OP/&gt;</span>
                </div>
    <div className='flex justify-center items-center italic'>Created With <img  className="w-7 mx-2" src="heart.gif" alt=""/>By Mahima Sharma</div></div>
  )
}

export default Footer