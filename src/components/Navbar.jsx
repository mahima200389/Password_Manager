import React from 'react'

const Navbar = () => {
  return (
<nav className='bg-slate-800 text-white py-2'>
    <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
    <div className='logo font-bold text-2xl text-white'>
    <span className='text-green-800'>&lt;</span>
    PASSWORD-MANAGER<span className='text-green-800'> /&gt;</span></div>
    {/* <ul>
        <li className='flex gap-4'>
            <a className="hover:font-bold" href="/">Home</a>
            <a className="hover:font-bold" href="/About">About</a>
            <a className="hover:font-bold" href="/Contact">Contact</a>
            <a className="hover:font-bold" href="/SignUp">Sign-Up</a>
            <a className="hover:font-bold" href="/Login">Login</a>
        </li>
    </ul> */}
    <button className='text-white bg-green-700 my-5 mx-2 flex justify-between items-center rounded-full ring-white'>
      <img className="invert py-1 w-10 " src="src/assets/github.svg" alt="github logo"/>
    <span className=' font-bold px-2'>GitHub</span>
    </button>
    </div>
</nav>
  )
}

export default Navbar