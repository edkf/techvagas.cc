import React from 'react'
import styled from 'styled-components'

import { Container } from '../styles/global'

const Content = styled.div`
  grid-column-start: 3;
  grid-column-end: 31;
  padding: 25px 0 70px 0;

  @media (max-width: 768px) {
    margin-top: 30px;
    padding: 0px 0 70px 0;
  }
`

const Title = styled.h3`
  font-size: 32px;
  font-weight: 500;
  margin: 0;
  line-height: 1.3;
  margin-bottom: 10px;
  opacity: 1;

  @media (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 375px) {
    font-size: 16px;
  }
`
const Description = styled.p`
  color: #808080;
  margin: 0;
  line-height: 1.3;
  transition: color .3s ease;
`

const NoResults = () => {
  return (
    <Container>
      <Content>
        <Title>0 vagas encontradas.</Title>
        <Description>Não encontramos vagas para os filtros escolhidos.</Description>
      </Content>
    </Container>
  )
}

export default NoResults