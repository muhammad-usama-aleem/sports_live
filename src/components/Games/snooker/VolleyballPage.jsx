import React from 'react';
import Volleyball from './container/Volleyball';
import './VolleyballPage.css';

class VolleyballPage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="column2">
                    <Volleyball />
                </div>
            </div>
        )
    }
}

export default VolleyballPage;