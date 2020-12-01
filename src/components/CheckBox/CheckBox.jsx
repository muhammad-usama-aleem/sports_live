import React from 'react';
import SingleBox from './SingleBox/SingleBox';
import './CheckBox.css';

function CheckBox() {
    return (
        <>
            <form>
                <SingleBox title='Sample Country' />
                <SingleBox title='Sample' />
                {/* <SingleBox title='Sample Country' />
                <SingleBox title='Sample Country' />
                <SingleBox title='Sample Country' />
                <SingleBox title='Sample Country' />
                <SingleBox title='Sample Country' />
                <SingleBox title='Sample Country' />
                <SingleBox title='Sample Country' />
                <SingleBox title='Sample Country' /> */}
            </form>
        </>
    )
}

export default CheckBox
