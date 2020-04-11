import React from 'react'
import styled from 'styled-components'

import { Container } from '../styles/global'

const Content = styled.div`
  grid-column-start: 3;
  grid-column-end: 31;
  border-top: 5px solid #000;
  color: #808080;
  margin-top: 60px;
  padding: 30px 0;

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
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