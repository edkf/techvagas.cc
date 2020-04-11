import React from 'react'
import styled from 'styled-components'

import Checkbox from '../components/checkBox'
import FloatButton from '../components/floatButton'

import { Container } from '../styles/global'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
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

const Filter = ({categories, local, handleChange, isFilterOpened, toggleFilter, selectedFilters}) => {

  return (
    <Wrapper isFilterOpened={isFilterOpened}>
      <Container>
        <FilterContainer isFilterOpened={isFilterOpened}>
          <FloatButton
            toggleFilter={() => toggleFilter()}
            isFilterOpened={isFilterOpened}
            selectedFilters={selectedFilters}
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

export default Filter