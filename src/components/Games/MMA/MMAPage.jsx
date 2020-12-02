import React from 'react';
import MMA from './container/MMA';
import './MMAPage.css';

class MMAPage extends React.Component {


    componentDidMount(){
        window.location = "http://127.0.0.1:3000/MMA" 
        console.log("loading")
        // this.setState({route: true})
        // this.reload();
        // this.setState({route: false})
    }
    n = 1;
    reload = () =>{
        if(this.n === 1){
            setTimeout(function(){ 
                window.location.reload(true);
                console.log("load")
            }, 2000);
            console.log(this.parent);
        }
        
        this.n = this.n + 1;
        console.log(this.n);
        
    }

    render() {
        return (
            <div className="row">
                <div className="column2">
                    <MMA  />
                </div>
            </div>
        )
    }
}

export default MMAPage;