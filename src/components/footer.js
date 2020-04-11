import React from 'react'
import styled from 'styled-components'

import { Container } from '../styles/global'

const Content = styled.div`
  grid-column-start: 3;
  grid-column-end: 31;
  /* border-top: 5px solid #000; */
  color: #808080;
  margin-top: 30px;
  padding: 60px 0;
  line-height: 1.3;

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    grid-column-end: 31;
    margin-bottom: 30px;
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