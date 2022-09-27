import React from 'react'
import { projects } from '../projects'
import Project from '../components/Project'

const Portfolio = () => {
  return (
    <div className="page">
        <h1>My Projects</h1>
        <div>
            {projects.map((item)=>{
                return <Project key={item.name} project={item}/>
            })}
        </div>
    </div>
  )
}

export default Portfolio