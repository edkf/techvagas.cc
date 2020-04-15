import React from 'react'
import styled from 'styled-components'

import { Container } from '../styles/global'

import responsive from '../utils/responsive'

const Content = styled.div`
  grid-column-start: 3;
  grid-column-end: 31;
  margin-top: 6vh;
  margin-bottom: 10.5vh;

  @media (max-width: 375px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`

const Headline = styled.h2`
  font-size: ${responsive(50, 260)};
  font-weight: 500;
  margin: 0;
  margin-bottom: 60px;
  letter-spacing: -6px;
  line-height: 1;

  @media (max-width: 768px) {
    letter-spacing: -1px;
  }
`


const Description = styled.p`
  color: #808080;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 1410px) {
    br {
      display: none;
    }
  }

  @media (max-width: 375px) {
    margin-bottom: 30px;
  }
`

const Hero = ({heroHeadline, description, jobList}) => {
  return (
    <Container>
      <Content>
        <Headline>{heroHeadline}</Headline>
        <Description>
          Uma iniciativa que tem por objetivo trazer a esperança de um novo emprego, mesmo em meio à incerteza da pandemia. <br />
          Atualmente temos {jobList.length} vagas disponíveis. Ajude esse número a crescer <a href="https://airtable.com/shrcFKFGDq6WcGZkJ" target="_blank" without="true" rel="noopener noreferrer">adicionando uma vaga</a>.
        </Description>
      </Content>
    </Container>
  )
}

export default Hero