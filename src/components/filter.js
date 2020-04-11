import React, { Component } from 'react'
import styled from 'styled-components'
import Div100vh from 'react-div-100vh'

import Checkbox from '../components/checkBox'
import FloatButton from '../components/floatButton'

import { Container } from '../styles/global'

const Wrapper = styled(Div100vh)`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  transition: opacity .6s ease;
  cursor: pointer;
  pointer-events: ${props => props.isFilterOpened ? 'auto' : 'none'};
`

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 1;
  pointer-events: ${props => props.isFilterOpened ? 'auto' : 'none'};
  opacity: ${props => props.isFilterOpened ? '1' : '0'};
`

const FilterContainer = styled.div`
  width: 100%;
  height: 100vh;
  color: #FFF;
  background-color: ${props => props.isFilterOpened ? '#000' : 'transparent'};
  grid-column-start: 21;
  grid-column-end: 33;
  transition: all .3s ease .1s;
  position: relative;
  z-index: 2;
  transform: ${props => props.isFilterOpened ? 'translateX(0px)' : 'translateX(calc(100% - 160px))'};
  pointer-events: ${props => props.isFilterOpened ? 'auto' : 'none'};

  @media (max-width: 1556px) {
    grid-column-start: 16;
  }

  @media (max-width: 1020px) {
    grid-column-start: 10;
  }

  @media (max-width: 768px) {
    grid-column-start: 1;
  }
`

const FilterContent = styled.div`
  width: 60%;
  margin: 0 auto;
  height: 100vh;
  pointer-events: ${props => props.isFilterOpened ? 'auto' : 'none'};
  opacity: ${props => props.isFilterOpened ? '1' : '0'};

  @media (max-width: 768px) {
    width: 75%;
  }
`

const ListTitle = styled.h4`
  font-size: 32px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`

const CheckboxList = styled.div`
  margin-bottom: 90px;
`

const Scroll = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  padding-top: 120px;

  @media (max-width: 768px) {
    padding-top: 60px;
  }
`

class Filter extends Component {

  constructor (props) {
    super(props)

    this.handleScroll = this.handleScroll.bind(this)

    this.state = {
      isScrollingDown: false,
      isIOS: false
    }
  }

  componentDidMount () {
    
    this.handleScroll()

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream

    this.setState({
      isIOS
    })
  }

  componentWillUnmount () {
    this.handleScroll()
  }

  handleScroll (event) {
    var scrollPos = 0;
    // adding scroll event
    var lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop){
          // downscroll code
          this.setState({
            isScrollingDown: true
          })
        } else {
          // upscroll code
          this.setState({
            isScrollingDown: false
          })
      }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }, false);
  }

  render () {

    const {
      categories,
      local,
      handleChange,
      isFilterOpened,
      toggleFilter,
      selectedFilters
    } = this.props

    const { isScrollingDown, isIOS } = this.state

    return (
      <Wrapper isFilterOpened={isFilterOpened} style={{minHeight: '100rvh'}}>
      <Container>
        <FilterContainer isFilterOpened={isFilterOpened}>
          <FloatButton
            toggleFilter={() => toggleFilter()}
            isFilterOpened={isFilterOpened}
            selectedFilters={selectedFilters}
            isIOS={isIOS}
            isScrollingDown={isScrollingDown}
          />
          <Scroll>
            <FilterContent isFilterOpened={isFilterOpened}>
              <ListTitle>Áreas</ListTitle>
              <CheckboxList>
                {categories.map((item) => (
                  <Checkbox key={item.fieldValue} value={item} handleChange={(checkboxVal) => handleChange(checkboxVal)} />
                ))}
              </CheckboxList>
              <ListTitle>Local</ListTitle>
              <CheckboxList>
                {local.map((item) => (
                  <Checkbox key={item.fieldValue} value={item} handleChange={(checkboxVal) => handleChange(checkboxVal)} />
                ))}
              </CheckboxList>
            </FilterContent>
          </Scroll>
        </FilterContainer>
      </Container>
      <Overlay isFilterOpened={isFilterOpened} onClick={() => toggleFilter()} />
    </Wrapper>
    )
  }
}

export default Filter