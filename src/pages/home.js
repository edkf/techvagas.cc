import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../components/header'
import Hero from '../components/hero'
import JobList from '../components/jobList'
import Filter from '../components/filter'
import Footer from '../components/footer'
import NoResults from '../components/noResults'

import slugify from '../utils/slugify'

const Loading = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #FFF;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  transition: opacity .6s ease .2s;
  opacity: ${props => props.isContentLoaded ? '0' : '1'};
  pointer-events: none;
`

class Home extends Component {

  
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.filterJobs = this.filterJobs.bind(this)
    this.toggleFilter = this.toggleFilter.bind(this)

    this.state = {
      metadata: null,
      jobList: [],
      categories: [],
      local: [],
      selectedFilters: [],
      filteredJobs: [],
      isFilterOpened: false,
      isContentLoaded: false
    }
  }

  componentDidMount () {

    const { nodes, categories, local } = this.props.data.allAirtable
    const metadata = this.props.data.site.siteMetadata

    const jobList = nodes.map((job) => {
      const slugifyLocals = job.data.Local.map((item) => slugify(item))
      const newObj = Object.assign(job.data, {
        id: job.id,
        allCategories: [...slugifyLocals, slugify(job.data.Categoria)]
      })
      return newObj
    })

    this.setState({
      jobList,
      categories,
      local,
      metadata,
      isContentLoaded: true
    })

  }

  handleChange (checkboxVal) {

    const hasValueInFilter = this.state.selectedFilters.some(elem => elem === checkboxVal)

    if (hasValueInFilter) {
      this.setState(prevState => ({
        selectedFilters: prevState.selectedFilters.filter(function(value){ return value !== checkboxVal})
      }))
    } else {
      this.setState(prevState => ({
        selectedFilters: [...prevState.selectedFilters, checkboxVal]
      }))
    }

    this.filterJobs()
  }


  filterJobs () {

    const { jobList } = this.state

    this.setState(prevState => ({
      filteredJobs: jobList.filter(j => prevState.selectedFilters.every(filter => j.allCategories.includes(filter)))
    }))
  }

  toggleFilter () {

    this.setState(prevState => ({
      isFilterOpened: !prevState.isFilterOpened
    }))
  }

  render () {

    const { jobList,
      categories,
      local,
      filteredJobs,
      selectedFilters,
      metadata,
      isFilterOpened,
      isContentLoaded
    } = this.state

    const hasSelectedFilters = selectedFilters.length > 0
    const hasFilteredJobs = filteredJobs.length > 0

    return (
      <>
        <Loading isContentLoaded={isContentLoaded} />
        {metadata && <Header title={metadata.title} formUrl={metadata.formUrl} />}
        {metadata && <Hero heroHeadline={metadata.heroHeadline} jobList={jobList} /> }

        {
          hasSelectedFilters && !hasFilteredJobs ? <NoResults /> : <JobList data={selectedFilters.length > 0 ? filteredJobs : jobList} />
        }

        {
          isContentLoaded &&  <Filter
            categories={categories}
            local={local}
            handleChange={(checkboxVal) => this.handleChange(checkboxVal)}
            isFilterOpened={isFilterOpened}
            toggleFilter={this.toggleFilter}
            selectedFilters={selectedFilters}
        />
        }
        
        {metadata && <Footer content={metadata.footer} />}
      </>
    )
  }
}

export default Home