import React from 'react'
import styled from 'styled-components'

import { Container } from '../styles/global'

import responsive from '../utils/responsive'

const Content = styled.div`
  grid-column-start: 3;
  grid-column-end: 31;
  margin-top: 6vh;
  margin-bottom: 10.5vh;
`

const Headline = styled.h2`
  font-size: ${responsive(50, 260)};
  font-weight: 500;
  margin: 0;
  margin-bottom: 60px;
  letter-spacing: -4px;
  line-height: 1;
`


const Description = styled.p`
  color: #808080;
  margin: 0;
  line-height: 1.3;
`

const Hero = ({heroHeadline, description}) => {
  return (
    <Container>
      <Content>
        <Headline>{heroHeadline}</Headline>
        <Description dangerouslySetInnerHTML={{ __html: description }}></Description>
      </Content>
    </Container>
  )
}

export default Hero