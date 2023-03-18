import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Project.css";

function Project() {
  return (
    <div className="projects container">
      <h1 className="para"> My Personal Projects</h1>
      <div className="projectList" >
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem  id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Project;