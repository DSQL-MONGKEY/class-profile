import PropTypes from 'prop-types'
import { styles } from '../style'

export const SelectBox = ({ items, name }) => {

   const selectedName = () => {
      items.filter(item => item.name === name).map((named, i) => (
         <div key={i}>
            <img
            src={named.img} 
            alt={named.named} 
            className={styles.imgStyle}
            />
            <p className={`text-zinc-700 dark:text-slate-300 text-center text-xl font-bold mt-10`}>
               {named.tagline}
            </p>
         </div>
      ))
   }


   return (
      <>
         {selectedName()}
      </>
  )
}

SelectBox.propTypes = {
   items: PropTypes.any,
   name: PropTypes.string
}
