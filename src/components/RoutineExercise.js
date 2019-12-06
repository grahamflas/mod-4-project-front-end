import React from 'react';
import {Link} from 'react-router-dom';

const RoutineExercise = (props) => {
    let {id, name, video_url, muscle_group, exercise_type} = props.exercise 

    return (
        <div className="ui card eight wide column margin-class">
            <div className="content">
                <div className="header">
                    {name}
                </div>
                <iframe src={video_url}></iframe>
            </div>
            <p><em>{muscle_group}</em></p>
            <Link to={`/exercises/${id}`}>
                <button class="ui inverted secondary button">
                Show Details
                </button>
            </Link>
        </div> 
    )
}

export default RoutineExercise