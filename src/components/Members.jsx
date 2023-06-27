import { motion } from "framer-motion"

import { styles } from "../style"
import { Card } from "./Card"
import { textVariant } from "../utils/motion"
import { members } from "../constants"
import { SelectBox } from "./SelectBox"
import { useState } from "react"

export const Members = () => {
  const [currentName, setCurrentName] = useState('')
  const buttonHandling = (e) => {
    console.log(e.target.value)
    setCurrentName(e.target.value)
  }


  return (
      <section className={`${styles.sectionAuto} ${styles.padding} bg-white dark:bg-halfnight`}>
          <motion.p 
          variants={textVariant()} 
          className={`${styles.heroHeadText} m-5 text-zinc-800 dark:text-slate-200`}>
            Members
          </motion.p>

        <div className={`flex justify-center items-center`}>
          <Card items={members} name={currentName} />
        </div>

        <div className={`sm:hidden`}>
          <SelectBox items={members} />
        </div>         

        <div className={`hidden sm:flex flex-wrap gap-3 sm:justify-evenly p-5 rounded-full font-semibold`}>
          {
            members.map((member, i) => (
              <button 
              key={i} 
              id={member.name} 
              value={member.name} 
              onClick={buttonHandling}
              className={`text-zinc-400 text-[20px] hover:text-cyan-500 focus:text-pink-500`}
              >
                {member.name}
              </button>
            ))
          }
        </div>
      </section>
  )
}
