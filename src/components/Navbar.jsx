import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { styles } from '../style'
import { navLinks } from '../constants'
import { close, menu } from '../assets'
import { DarkModeToggle } from './DarkModeToggle'

export const Navbar = ({ darkTheme, setDarkTheme }) => {
   const [active, setActive] = useState("")
   const [toggle, setToggle] = useState(false)

   return (
      <>
         <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 font-poppins font-semibold bg-white dark:bg-halfnight`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
               <Link
                  to='/'
                  className='flex items-center gap-2 dark:text-slate-200 text-slate-500'
                  onClick={() => {
                     window.scrollTo(0,0)
                  }}
               >
                  | 1DC02
               </Link>
               <ul className='list-none sm:flex hidden flex-row gap-10'>
                  {navLinks.map((link) => (
                     <li 
                        key={link.id} 
                        className={`${active === link.title ? "text-white" : "text-gray-500"} dark:text-slate-200 hover:text-gray-600 dark:hover:text-white text-[18px] font-medium cursor-pointer`}
                        onClick={() => setActive(link.title)}
                        >
                           <a href={`#${link.id}`}>
                              {link.title}
                           </a>
                     </li>
                  ))}
               </ul>
               <div className='hidden sm:inline-flex'>
                  <DarkModeToggle darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
               </div>
               

               <div className='sm:hidden flex flex-1 justify-end items-center'>
                  <img src={toggle ? close : menu} alt="menu" 
                  className='w-[28px] h-[28px] object-contain cursor-pointer bg-slate-400 dark:bg-zinc-700 rounded-full'
                  onClick={() => setToggle(!toggle)}
                  />

                  <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-slate-300 dark:bg-zinc-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-md -translate-y-5`}>
                     <ul className='list-none flex justify-end items-start flex-col gap-4'>
                        {
                           navLinks.map((link) => (
                              <li key={link.id} 
                              className={`${active === link.title ? 'text-white' :
                              'text-gray-700 dark:text-slate-200'} hover:text-white font-poppins font-medium cursor-pointer text-[16px]`}
                              onClick={() => {
                                 setToggle(!toggle)
                                 setActive(link.title)
                              }}>
                                 <a href={`#${link.id}`}>
                                    {link.title}
                                 </a>
                              </li>
                           ))
                        }
                        <DarkModeToggle darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                     </ul>
                  </div>
               </div>
            </div>
         </nav>
      </>
   )
}


Navbar.propTypes = {
   darkTheme: PropTypes.bool,
   setDarkTheme: PropTypes.func
}