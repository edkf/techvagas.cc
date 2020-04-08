import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import JobList from '../components/jobList'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query Vagas {
    allAirtable {
      nodes {
        data {
          Contato
          Empresa
          Local
          Vaga
        }
        id
      }
    }
  }  
  `)

  console.log(data.allAirtable)

  return (
    <Layout>
      <SEO title="Home" />
      <JobList data={data.allAirtable.nodes} />
    </Layout>
  )

}

export default IndexPage
