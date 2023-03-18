import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/ProjectDisplay.css";
import { Link } from "react-router-dom";


function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
      <div className="project">

      <h1 >  {project.name}</h1>
        <Link to={project.url}>
      <img src={project.image} />
    </Link>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <Link to="https://github.com/Nidhi9804">

      <GitHubIcon />
      </Link>
    
      
    </div>
  );
}

export default ProjectDisplay;