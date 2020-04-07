import React from 'react'

const JobItem = (props) => {

  const {Contato, Empresa, Local, Vaga} = props.data

  const localStr = Local.map((item, index) => index === Local.length - 1 ? item : item + ', ')

  return (
    <a href={Contato.includes('@') ? `mailto:${Contato}?subject=Vaga ${Vaga}` : Contato} target="_blank" without rel="noopener noreferrer">
      <h3>{Vaga}</h3>
      <p>{Empresa} - {localStr} </p>
      <hr/>
    </a>
  )
}

export default JobItem