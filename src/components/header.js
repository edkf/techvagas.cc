import React from 'react'
import styled from 'styled-components'

import { Container } from '../styles/global'

const Content = styled.div`
  grid-column-start: 3;
  grid-column-end: 31;
  margin-top: 90px;
  border-top: 10px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`

const Logo = styled.h1`
  font-size: 32px;
  cursor: pointer;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: #0000EE;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`

const Header = ({title, formUrl}) => {
  return (
    <Container>
      <Content>
        <Logo>vagas.cc</Logo>
        <Link
          href={formUrl}
          target="_blank"
          without
          rel="noopener noreferrer"
          >
          Adicionar vaga
        </Link>
      </Content>
    </Container>
  )
}

export default Header