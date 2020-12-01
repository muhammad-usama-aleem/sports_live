import React from 'react';
import './slider.style.css';

function Slider(props) {
    return (
        <div className="module">
            <img 
             src={props.logo}
             alt="nothing"
             className="img"
             width="40px" 
             height="30px"
             />
            <p className="text">
            {props.title}
            </p>
        </div>
    )
}

export default Slider;
