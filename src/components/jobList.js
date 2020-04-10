import React from 'react'
import styled from 'styled-components'

import JobItem from './jobItem'

import { Container } from '../styles/global'

const Content = styled.div`
  grid-column-start: 3;
  grid-column-end: 17;

  @media (max-width: 768px) {
    grid-column-end: 31;
  }
`

const JobList = (props) => {

  return (
    <Container>
      <Content>
        {
          props.data.map(item => (
            <JobItem key={item.id} data={item} />
          ))
        }
      </Content>
    </Container>
  )
}

export default JobList