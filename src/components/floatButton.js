import React from 'react'
import styled from 'styled-components'

import filterIcon from '../images/filter-icon.svg'
import closeIcon from '../images/close-icon.svg'

const Container = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: ${props => props.isFilterOpened ? `5px solid #FFF` : `5px solid #000`};
  position: absolute;
  bottom: 90px;
  left: -60px;
  right: auto;
  z-index: 3;
  background-color: #FFF;
  cursor: pointer;
  background-image: ${props => props.isFilterOpened ? `url(${closeIcon})` : `url(${filterIcon})`};
  background-repeat: no-repeat;
  background-position: center center;
  pointer-events: auto !important;
  background-size: 45px 45px;
  transition: all .3s ease;

  @media (max-width: 768px) {
    left: ${props => props.isFilterOpened ? 'auto' : '40px'};
    right: ${props => props.isFilterOpened ? '30px' : 'auto'};
    /* bottom: ${props => props.isIOS ? (props.isScrollingDown ? '30px' : '17.5vh') : '30px'}; */
    bottom: ${props => props.isIOS || props.isAndroid ? (props.isIOS ? (props.isScrollingDown ? '30px' : '17.5vh') : (props.isScrollingDown ? '30px' : '90px')) : '30px'};
    width: 90px;
    height: 90px;
    background-size: 30px 30px;
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

const FloatButton = ({toggleFilter, isFilterOpened, selectedFilters, isScrollingDown, isIOS, isAndroid}) => {

  const badgeCounter = selectedFilters.length

  return (
    <Container isIOS={isIOS} isAndroid={isAndroid} isScrollingDown={isScrollingDown} isFilterOpened={isFilterOpened} onClick={() => toggleFilter()}>
      { (!isFilterOpened && (badgeCounter > 0)) && <Badge>{badgeCounter}</Badge>}
    </Container>
  )
}

export default FloatButton