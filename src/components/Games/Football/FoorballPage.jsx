import React from 'react';
import Football from './container/Football';
import './FootballPage.css';

class FootballPage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="column2">
                    <Football />
                </div>
            </div>
        )
    }
}

export default FootballPage;