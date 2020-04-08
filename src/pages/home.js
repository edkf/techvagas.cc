import React, { Component } from 'react'

import JobList from '../components/jobList'

class Home extends Component {

  constructor (props) {
    super(props)
    this.state = {
      jobList: [],
      categories: [],
      local: []
    }
  }

  componentDidMount () {

    const { nodes, categories, local } = this.props.data.allAirtable

    this.setState({
      jobList: nodes,
      categories,
      local
    })

  }

  render () {

    const { jobList } = this.state

    return (
      <>
        {jobList && <JobList data={jobList} />}
      </>
    )
  }
}

export default Home