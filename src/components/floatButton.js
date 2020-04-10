import React from 'react'
import styled from 'styled-components'

import filterIcon from '../images/filter-icon.svg'
import closeIcon from '../images/close-icon.svg'

const Container = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 5px solid #000;
  position: absolute;
  bottom: 90px;
  left: -60px;
  z-index: 3;
  background-color: #FFF;
  cursor: pointer;
  background-image: ${props => props.isFilterOpened ? `url(${closeIcon})` : `url(${filterIcon})`};
  background-repeat: no-repeat;
  background-position: center center;
  pointer-events: auto !important;
  

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    left: -40px;
    bottom: 30px;
  }
`

const Badge = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #FFFFFF;
  background-color: #0000EE;
  position: absolute;
  top: -10px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const FloatButton = ({toggleFilter, isFilterOpened, selectedFilters}) => {

  const badgeCounter = selectedFilters.length

  return (
    <Container isFilterOpened={isFilterOpened} onClick={() => toggleFilter()}>
      { (!isFilterOpened && (badgeCounter > 0)) && <Badge>{badgeCounter}</Badge>}
    </Container>
  )
}

export default FloatButton