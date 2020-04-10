import React, { Component } from 'react'

import Header from '../components/header'
import Hero from '../components/hero'
import JobList from '../components/jobList'
import Filter from '../components/filter'

import slugify from '../utils/slugify'

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
      metadata
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

    const { jobList, categories, local, filteredJobs, selectedFilters, metadata, isFilterOpened } = this.state

    return (
      <>
        {metadata && <Header title={metadata.title} formUrl={metadata.formUrl} />}
        {metadata && <Hero heroHeadline={metadata.heroHeadline} description={metadata.description} /> }
        <JobList
          data={selectedFilters.length > 0 ? filteredJobs : jobList}
        />
        <Filter
          categories={categories}
          local={local}
          handleChange={(checkboxVal) => this.handleChange(checkboxVal)}
          isFilterOpened={isFilterOpened}
          toggleFilter={this.toggleFilter}
          selectedFilters={selectedFilters}
        />
      </>
    )
  }
}

export default Home