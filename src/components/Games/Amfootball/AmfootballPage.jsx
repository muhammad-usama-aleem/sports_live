import React from 'react';
import Amfootball from './container/Amfootball';
import './AmfootballPage.css';

class AmfootballPage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="column2">
                    <Amfootball />
                </div>
            </div>
        )
    }
}

export default AmfootballPage;