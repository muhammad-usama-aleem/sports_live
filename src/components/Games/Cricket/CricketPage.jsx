import React from 'react';
import Cricket from './container/Cricket';
import './CricketPage.css';

class CricketPage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="column2">
                    <Cricket />
                </div>
            </div>
        )
    }
}

export default CricketPage;