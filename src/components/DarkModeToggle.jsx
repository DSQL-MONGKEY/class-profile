import { motion } from "framer-motion"
import PropTypes from "prop-types"

export const DarkModeToggle = ({ setDarkTheme, darkTheme }) => {
   return (
      <div className={`flex w-[70px] h-[25px] ${darkTheme ? 'justify-end' : 'justify-start'} rounded-full p-[5px] cursor-pointer bg-gray-200 sm:bg-gray-300 dark:bg-gray-700 `} onClick={() => setDarkTheme(!darkTheme)}>
         <motion.div
            layout 
            initial={false}
            transition={spring} 
            className={`w-[15px] h-[15px] rounded-full my-auto ${darkTheme ? 'bg-slate-200' : 'bg-zinc-800'}`} />
      </div>
   )
}

const spring = {
   type: "spring",
   stiffness: 600,
   damping: 30,
   ease: "easeIn",
   duration: 2
}

DarkModeToggle.propTypes = {
   setDarkTheme: PropTypes.func,
   darkTheme: PropTypes.bool
}
