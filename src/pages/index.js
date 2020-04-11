import React from "react"

import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import ogImagePath from '../images/vagascc.png'

// Styles
import { GlobalStyle } from '../styles/global'

import Home from './home'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query AllData {
    allAirtable {
      nodes {
        data {
          Vaga
          Empresa
          Local
          Contato
          Categoria
        }
        id
      }
      categories: group(field: data___Categoria) {
        fieldValue
        totalCount
      }
      local: group(field: data___Local) {
        fieldValue
        totalCount
      }
    }
    site {
      siteMetadata {
        title
        description
        heroHeadline
        formUrl
        footer
      }
    }
  }  
  `)

  return (
    <>
      <GlobalStyle />
      <SEO
        title="Home"
        image={ogImagePath}
        />
      <Home data={data} />
    </>
  )

}

export default IndexPage
