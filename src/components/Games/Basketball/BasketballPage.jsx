import React from 'react';
import Basketball from './container/Basketball';
import './BasketballPage.css';

class BasketballPage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="column2">
                    <Basketball />
                </div>
            </div>
        )
    }
}

export default BasketballPage;