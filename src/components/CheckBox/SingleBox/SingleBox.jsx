import React from 'react';
import './SingleBox.css'

function SingleBox(props) {
    return (
        <div className="radiobtn">
            <input type="radio" id={props.title}
                    value={props.title}/>
            <label htmlFor={props.title}  className="flag">
                <img src='https://cdn.webshopapp.com/shops/94414/files/54939500/pakistan-flag-icon-free-download.jpg' alt ='' width='25px' height ='20px' />
			    <p className="text-flag">
			        {props.title}
			    </p>
		    </label>
        </div>
    )
}

export default SingleBox;