import React from 'react'

const Project = ({project}) => {
  return (
    <div>
        <h3>{project.name}</h3>
        <a href={project.github} target="_blank" rel="noreferrer">Github Link</a>
    </div>
  )
}

export default Project