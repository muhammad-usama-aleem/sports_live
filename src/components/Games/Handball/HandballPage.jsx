import React from 'react';
import Handball from './container/Handball';
import './HandballPage.css';

class HandballPage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="column2">
                    <Handball />
                </div>
            </div>
        )
    }
}

export default HandballPage;