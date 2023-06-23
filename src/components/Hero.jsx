import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Typed from "typed.js"

import { styles } from "../style"

export const Hero = () => {
   const el = useRef(null)

   useEffect(() => {
      const typed = new Typed(el.current, {
         strings: ['D3TK','Gunadarma University', '^500 1DC02'],
         showCursor: false,
         typeSpeed: 100,
         backSpeed: 50,
         fadeOut: true
      })
      return () => {
         typed.destroy()
      } 
   },[])

   return (
      <section className="w-full h-screen mx-auto">
         <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row justify-center mt-5`}>
            <div className="flex flex-col text-6xl sm:text-7xl font-bold h-1/5 sm:w-1/2 w-[200px] sm:h-[300px] text-center justify-center items-center text-zinc-700 dark:text-slate-300 p-2 translate-y-12 sm:translate-y-0">
               <span className="" ref={el}/>
            </div>
            <div className='absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center'>
               <a href="#about">
                  <div className='w-[35px] h-[64px] rounded-3xl border-4 border-zinc-600 flex justify-center items-start p-1'>
                  <motion.div
                     animate={{ 
                        y: [0, 30, 0]
                     }}
                     transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: 'loop',
                     }}
                     className='w-3 h-3 rounded-full bg-zinc-700 mb-1'
                  />
                  </div>
               </a>
            </div>
         </div>
      </section>
   )
}
