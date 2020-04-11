import React from 'react'
import styled from 'styled-components'

import { Container } from '../styles/global'

const Content = styled.div`
  grid-column-start: 3;
  grid-column-end: 31;
  /* border-top: 5px solid #000; */
  color: #808080;
  padding-bottom: 60px;
  line-height: 1.4;

  a {
    text-decoration: none;
  }

  @media (max-width: 1020px) {
    br {
      display: none;
    }
  }

  @media (max-width: 768px) {
    grid-column-end: 31;
    margin-bottom: 30px;
  }

  @media (max-width: 375px) {
    padding: 0;
    font-size: 12px;
  }
`

const Footer = ({content}) => {

  return (
    <Container>
      <Content dangerouslySetInnerHTML={{ __html: content }}>
      </Content>
    </Container>
  )
}

export default Footer