import React, { Component } from 'react'

import JobList from '../components/jobList'
import Filter from '../components/filter'

class Home extends Component {

  
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.filterJobs = this.filterJobs.bind(this)

    this.state = {
      jobList: [],
      categories: [],
      local: [],
      selectedFilters: [],
      filteredJobs: []
    }
  }

  componentDidMount () {

    const { nodes, categories, local } = this.props.data.allAirtable

    const jobList = nodes.map((job) => {
      const newObj = Object.assign(job.data, {
        id: job.id,
        allCategories: [...job.data.Local, job.data.Categoria]
      })
      return newObj
    })

    this.setState({
      jobList,
      categories,
      local
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

  }

  componentDidUpdate(prevProps, prevState) {
    this.filterJobs()
  }


  filterJobs () {
  }

  render () {

    const { jobList, categories, local, filteredJobs, selectedFilters } = this.state

    return (
      <>
        <Filter
          categories={categories}
          local={local}
          handleChange={(checkboxVal) => this.handleChange(checkboxVal)}
        />
        <JobList
          data={selectedFilters.length > 0 ? filteredJobs : jobList}
        />
      </>
    )
  }
}

export default Home