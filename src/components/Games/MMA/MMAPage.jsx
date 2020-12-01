import React from 'react';
import MMA from './container/MMA';
import './MMAPage.css';

class MMAPage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="column2">
                    <MMA />
                </div>
            </div>
        )
    }
}

export default MMAPage;