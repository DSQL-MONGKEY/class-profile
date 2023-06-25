import Select from "react-select"
import PropTypes from 'prop-types'

export const SelectBox = ({ items }) => {
   return (
      <>
         <Select
         className="basic-single"
         classNamePrefix="select"
         defaultValue={items.name}
         options={items.name}
         />
      </>
  )
}

SelectBox.propTypes = {
   items: PropTypes.any
}
