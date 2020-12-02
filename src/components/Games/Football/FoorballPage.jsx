import React from 'react';
import Football from './container/Football';
import './FootballPage.css';

class FootballPage extends React.Component {
    constructor() {
        super()
        this.parent = React.createRef();
    }

    n = 1;
    // componentDidMount(){
    //     // window.location.reload();
    //     this.setState({route: true})
    //     this.reload();
    //     this.setState({route: false})
    // }
   
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
                <div className="column2" ref={this.parent}>
                    <Football />
                    <div onLoad={this.reload()} />
                </div>
            </div>
        )
    }
}

export default FootballPage;