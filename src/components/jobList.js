import React from 'react'

import JobItem from './jobItem'

const JobList = (props) => {

  return (
    <div>
      {
        props.data.map(item => (
          <JobItem data={item.data} />
        ))
      }
    </div>
  )
}

export default JobList