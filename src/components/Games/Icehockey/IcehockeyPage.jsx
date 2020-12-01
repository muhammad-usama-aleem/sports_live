import React from 'react';
import Icehockey from './container/Icehockey';
import './IcehockeyPage.css';

class IcehockeyPage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="column2">
                    <Icehockey />
                </div>
            </div>
        )
    }
}

export default IcehockeyPage;