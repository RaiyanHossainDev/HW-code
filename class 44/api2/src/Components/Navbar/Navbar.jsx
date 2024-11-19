import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { CiLaptop, CiSearch } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'

const Navbar = () => {
  // ================ custom useStates
  const [dropDown,setDropDown] = useState(false)
  const [mode,setMode]         = useState('Auto')
  const [modeIcon,setModeIcon] = useState(<CiLaptop/>)


  let handleMode = (text,icon) => {
    setMode(text)
    setModeIcon(icon)
  }

  return (
    <nav id='raiyan_navbar'>
        <div className="menu_row">
          <div className='flex gap-[5rem]'>
            <div className="menu_logo">
              <Link to={'/'}><img className='w-[40px]' src="images/logo.png" alt="" />Platzi Fake Store API</Link>
            </div>
            <div className="menu_signup">
              <CiSearch />
              <input type="text" placeholder='Search'/>
            </div>
          </div>
          <div className="theme">
            <Link to={'#'}><FaGithub /></Link>
            <span className='w-[1px] h-[32px] inline-block bg-black'></span>
            <div onClick={() => setDropDown(!dropDown)} className="mode">
              {modeIcon}<h4>{mode}</h4><RiArrowDropDownLine />
              {
                dropDown &&
                    <div className="mode_dropDown">
                      <h2 onClick={() => handleMode('Light' , <IoSunnyOutline/>)} className='w-full text-center'>Light</h2>
                      <h2 onClick={() => handleMode('Dark' , <IoMoonOutline />)} className='w-full text-center'>Dark</h2>
                      <h2 onClick={() => handleMode('Auto' , <CiLaptop/>)} className='w-full text-center'>Auto</h2>
                    </div>
              }
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar