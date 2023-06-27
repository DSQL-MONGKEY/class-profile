import { motion } from "framer-motion"

import { styles } from "../style"
import { fadeIn, textVariant } from "../utils/motion"

export const About = () => {
   return (
      <section className={`${styles.section} ${styles.padding} bg-white dark:bg-midnight`} id="about">
         <motion.div variants={textVariant(0.5)}>
            <p className={`${styles.sectionHeadText} font-poppins text-zinc-800 dark:text-slate-200`}>
               Introduction
            </p>
            <h2 className={`${styles.sectionSubText} font-semibold capitalize `}>
               tak kenal maka tak tau
            </h2>
         </motion.div>

         <motion.div variants={fadeIn("", "", 0.5, 1)}
            className={`mt-4 text-zinc-800 flex flex-col gap-2 dark:text-slate-300 font-poppins px-5 text-xl sm:w-1/2 `}>
            <p className=" mt-3 sm:mt-10">
               Terdiri dari 19 orang mahasiswa/i yang memiliki semangat dan cita-cita yang tinggi dalam meraih masa depan yang lebih baik, Mendapat kesempatan menempuh dalam nya sumur ilmu pengetahuan.
            </p> &nbsp;
            <p className="">
               <span className="font-semibold text-3xl">Teknik Komputer</span>
               , mampu mendesain dan mengimplementasi sistem yang terintegrasi baik software maupun hardware.
            </p> &nbsp; 
            <p>
               <span className="font-semibold text-sm capitalize">*intinya pengen lulus tepat waktu</span>
            </p>
         </motion.div>
      </section>
   )
}
