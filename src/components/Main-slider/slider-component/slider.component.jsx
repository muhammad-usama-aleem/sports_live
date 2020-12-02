import React from 'react';
import './slider.style.css';

class Slider extends React.Component {
    // componentDidMount(){
    //     window.location.reload();
    // }
    render() {
            return (
            <div className="module">
                <img 
                src={this.props.logo}
                alt="nothing"
                className="img"
                width="40px" 
                height="30px"
                />
                <p className="text">
                {this.props.title}
                </p>
            </div>
        )
    }
    
}

export default Slider;
