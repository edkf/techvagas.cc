import React from 'react'
import styled from 'styled-components'

const Title = styled.h3`
  width: 100%;
  font-size: 32px;
  font-weight: 500;
  margin: 0;
  line-height: 1.3;
  margin-bottom: 10px;
  opacity: 1;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 375px) {
    font-size: 16px;
  }
`
const Description = styled.p`
  width: 100%;
  color: #808080;
  margin: 0;
  line-height: 1.3;
  transition: color .3s ease;
`

const ReportLink = styled.a`
  text-decoration: none;
  color: #808080;
  font-size: 16px;
  font-weight: normal;
  opacity: 0;
  transition: opacity .3s ease;
`

const Content = styled.a`
  width: 100%;
  display: inline-block;
  text-decoration: none;
  color: #000;
  margin-bottom: 80px;
  transition: color .3s ease;

  &:hover {
    color: #0000EE;

    ${Description} {
      color: #0000EE;
    }

    ${ReportLink} {
      display: inline-block;
      opacity: 1;
      pointer-events: auto;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`


const JobItem = (props) => {

  const {
    Contato,
    Empresa,
    Local, 
    Vaga
  } = props.data

  const localStr = Local.map((item, index) => index === Local.length - 1 ? item : item + ', ')

  return (
    <Content href={Contato.includes('@') ? `mailto:${Contato}?subject=Vaga ${Vaga}` : Contato} target="_blank" without="true" rel="noopener noreferrer">
      <Title>{Vaga}</Title>
      <Description>{Empresa} - {localStr} </Description>
    </Content>
  )
}

export default JobItem