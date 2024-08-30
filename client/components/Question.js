import React from 'react';
import "@/styles/question.scss";

const Question = props =>{
    return(
        <div className="question">
            <h3>{props.title}</h3>
            <p className="tags">{props.tags}</p>
            <p>{props.text}</p>
        </div>
    )
}
export default Question;