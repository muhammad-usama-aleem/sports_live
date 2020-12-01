import React from 'react';
import Tennis from './container/Tennis';
import './TennisPage.css';

class TennisPage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="column2">
                    <Tennis />
                </div>
            </div>
        )
    }
}

export default TennisPage;