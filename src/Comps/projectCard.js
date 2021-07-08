/* eslint-disable jsx-a11y/alt-text */
import React,{useState} from 'react';
import '../styles/projectCard.css';

function ProjectTile(props) {

    const [tileHover, setHover] = useState(false);

    const hovered = () => {
        setHover(true);
        // console.log(true);
    }
    const unhovered = () => {
        setHover(false);
        // console.log(false)
    }

    return (
        <div className="project-tile" onMouseOver={hovered} onMouseOut={unhovered}>
            <img src={props.pic} />
            <div className={(tileHover)?"active":"inactive"}>{props.title}</div>
        </div>
    )
}

export default ProjectTile
