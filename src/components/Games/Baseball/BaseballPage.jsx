import React from 'react';
import Baseball from './container/Baseball';
import './BaseballPage.css';

class BaseballPage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="column2">
                    <Baseball />
                </div>
            </div>
        )
    }
}

export default BaseballPage;