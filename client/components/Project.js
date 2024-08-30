import React from 'react';
import "@/styles/project.scss";

const Project = ({title,date,description,link})=>{
    return(
        <div className="one">
            <h1>{title}</h1>
            <h4>data premiery - {date}</h4>
            <p>{description}</p>
            <a href={link} target="_blank"><button>Sprawdź</button></a>
        </div>
    )
}
export default Project;