import React from 'react'

import JobItem from './jobItem'

const JobList = (props) => {

  return (
    <div>
      {
        props.data.map(item => (
          <JobItem key={item.id} data={item} />
        ))
      }
    </div>
  )
}

export default JobList