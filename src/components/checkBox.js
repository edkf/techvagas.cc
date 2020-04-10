import React from 'react'
import slugify from '../utils/slugify'
const Checkbox = ({value, handleChange}) => {

  const checkboxVal = slugify(value.fieldValue)

  return (
    <>
      <label class="control checkbox"name={checkboxVal}>
        <input type="checkbox" name={checkboxVal} onChange={() => handleChange(checkboxVal)} />
        <span class="control-indicator"></span>
        {value.fieldValue} ({value.totalCount})
        <br />
      </label>
      <br />
    </>
  )
}

export default Checkbox