import React from 'react'
import styled from 'styled-components'

import checkIcon from '../images/checkbox-icon.svg'

import slugify from '../utils/slugify'

const Box = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #FFF;
  margin-right: 20px;

  @media (max-width: 375px) {
    width: 30px;
    height: 30px;
  }
`

const Label = styled.label`
  font-size: 20px;
  margin-bottom: 20px;
  display: inline-block;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const Input = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;

  &:checked {
    ~ ${Box} {
      background-image: url(${checkIcon});
      background-color: #FFF;
      background-position: center center;
      background-repeat: no-repeat;
    }
  }
`

const Checkbox = ({value, handleChange}) => {

  const checkboxVal = slugify(value.fieldValue)

  return (
    <>
      <Label className="control checkbox"name={checkboxVal}>
        <Input type="checkbox" name={checkboxVal} onChange={() => handleChange(checkboxVal)} />
        <Box />
        {value.fieldValue} ({value.totalCount})
      </Label>
      <br />
    </>
  )
}

export default Checkbox