import React from 'react';
import FootballComp from './Football.component';

class Football extends React.Component {
    componentDidMount() {
        FootballComp();
    }
    //   reload = () =>{
    //     window.location.reload(true);
    //     console.log("load")
    // }

    // onLoad={this.reload()}
    render() {
        return (
            <div >
            </div>
        )
    }
}

export default Football;