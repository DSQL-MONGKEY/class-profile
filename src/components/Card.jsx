import PropTypes from 'prop-types'
import { styles } from '../style'

export const Card = ({ items, name }) => {

  const selectedName = () => (
    items.filter((item) => item.name == name).map((named, i) => (
      <div key={i} className=''>
        <img 
        src={named.img} 
        alt={named.name} 
        className={styles.imgStyle} 
        loading='lazy' />
        <p className={`text-zinc-700 dark:text-slate-300 text-center text-xl font-bold mt-10`}>
          {named.tagline}
        </p>
      </div>
    ))
  )

  return (
    <div className={`w-[350px] h-[350px] flex flex-col gap-2 justify-center items-center`}>
      <div className={`image-card`}>
        {selectedName()}
      </div>
    </div>
  )
}



Card.propTypes = {
    items: PropTypes.array,
    name: PropTypes.string
}