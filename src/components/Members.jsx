import { motion } from "framer-motion"
import { useState } from "react"

import { styles } from "../style"
import { Card } from "./Card"
import { textVariant } from "../utils/motion"
import { members } from "../constants"

export const Members = () => {
  const [Index, setIndex] = useState("")
  return (
      <section className={`${styles.section} ${styles.padding} bg-white dark:bg-gray-500`}>
          <motion.p 
          variants={textVariant()} 
          className={`${styles.heroHeadText} m-5 text-zinc-800 dark:text-slate-200`}>
            Members
          </motion.p>

        <div className={`flex flex-col gap-10 justify-center items-center`}>
          <Card/>
        </div>
        {window.screen.width <= 640 
        ? 
        <div>
          <select name="members" id="members" className="text-center" >
            {members.map((member, index) => (
              <option value={member.name} key={index}>
                {member.name}
              </option>
            ))}
          </select>
        </div>         
        : 
        <div className={`flex flex-wrap gap-3 sm:justify-evenly my-5 p-5`}>
          {members.map((member, index) => (
            <button key={index} className={`p-2 bg-slate-200 dark:bg-zinc-600 rounded-md`}>
              <span className="p-1 bg-slate-300 dark:bg-gray-700 dark:text-slate-300 font-bold font-poppins rounded">
                {member.name}
              </span>
            </button>
          ))}
        </div>
        }
      </section>
  )
}
