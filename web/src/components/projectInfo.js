import React from "react";
import star_01 from './../images/star_01.svg';
import fork_01 from './../images/fork_01.svg';

const ProjectInfo = ({info}) => {
    let iconUrl = "";
    if(info.namespace){
        iconUrl = info.namespace.avatar_url;
    }
    return (
        <div className="project-info">
            <div className="project-id">
                <div className="project-pic">
                    <img src={iconUrl} alt=""/>
                </div>
                <div className="project-name">
                    <p id="projectName">{info.name}</p>
                    <p id="projectId">Project ID: {info.id}</p> 
                </div>
            </div>

            <div className="project-options">

                <div className="options">

                    <button className="option-name">
                        <img id="option-image" src={star_01} alt=""/>
                        <p>Star</p>
                    </button>

                    <div className="counter">
                        <p>{info.star_count}</p>
                    </div>

                </div>

                <div className="options">

                    <button className="option-name">
                        <img id="option-image" src={fork_01} alt=""/>
                        <p>Fork</p>
                    </button>

                    <div className="counter">
                        <p>{info.forks_count}</p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default ProjectInfo;
