import React from 'react'

import Checkbox from '../components/checkBox'

const Filter = ({categories, local, handleChange}) => {

  return (
    <>
      <div>
        <h4>Áreas</h4>
        {categories.map((item) => (
          <Checkbox value={item} handleChange={(checkboxVal) => handleChange(checkboxVal)} />
        ))}
        <h4>Local</h4>
        {local.map((item) => (
          <Checkbox value={item} handleChange={(checkboxVal) => handleChange(checkboxVal)} />
        ))}
      </div>
    </>
  )
}

export default Filter