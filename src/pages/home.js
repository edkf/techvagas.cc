import React, { Component } from 'react'

import JobList from '../components/jobList'
import Filter from '../components/filter'

import slugify from '../utils/slugify'

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

    this.filterJobs()

  }


  filterJobs () {

    // TODO: Fix later
    const { jobList, selectedFilters } = this.state
    // this.state.filteredJobs = jobList.filter(j => selectedFilters.every(filter => j.allCategories.includes(filter)))

    this.setState(prevState => ({
      filteredJobs: jobList.filter(j => prevState.selectedFilters.every(filter => j.allCategories.includes(filter)))
    }))

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
          data={filteredJobs.length > 0 ? filteredJobs : jobList}
        />
      </>
    )
  }
}

export default Home