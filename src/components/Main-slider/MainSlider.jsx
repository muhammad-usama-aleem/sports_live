import React from 'react';
import Slider from './slider-component/slider.component';
import { Link } from "react-router-dom";

import FootBall from '../../image/football.png';
import AmericanFootBall from '../../image/amfootball.png';
import baseball from '../../image/baseball.png';
import basketball from '../../image/basketball.png';
import cricket from '../../image/cricket.png';
import handball from '../../image/handball.png';
import icehokey from '../../image/icehockey.png';
import MMA from '../../image/MMA.png';
import tennis from '../../image/tennis.png';
import volleyball from '../../image/volleyball.png';

import boxing from '../../image/boxing.png';
import Rugby from '../../image/rugby.png';
import snooker from '../../image/snooker.png';
import table from '../../image/table_tennis.png';
import darts from '../../image/darts.png';
import futsal from '../../image/futsal.png';

import './MainSlider.css';

function MainSlider() {
    return (
        <div id="container">
            <div id="modules">
                <Link to="/Football">
                    <Slider logo={FootBall} title={'Football'} />
                </Link>
                <Link to="/tennis">
                    <Slider logo={tennis} title={'Tennis'} />
                </Link>
                <Link to="/baseball">
                    <Slider logo={baseball} title={'Baseball'} />
                </Link>
                <Link to="/basketball">
                    <Slider logo={basketball} title={'Basketball'} />
                </Link>
                <Link to="/volleyball">
                    <Slider logo={volleyball} title={'Volleyball'} />
                </Link>
                <Link to="/cricket">
                    <Slider logo={cricket} title={'Cricket'} />
                </Link>
                <Link to="/AmericanFootBall">
                    <Slider logo={AmericanFootBall} title={'Am-FootBall'} />
                </Link>
                <Link to="/handball">
                    <Slider logo={handball} title={'Handball'} />
                </Link>
                <Link to="/icehokey">
                    <Slider logo={icehokey} title={'Ice Hockey'} />
                </Link>
                <Link to="/MMA">
                    <Slider logo={MMA} title={'MMA'} />
                </Link>
                <Link to="/Rugby">
                    <Slider logo={Rugby} title={'Rugby'} />
                </Link>
                <Link to="/futsal">
                    <Slider logo={futsal} title={'Futsal'} />
                </Link>
                <Link to="/darts">
                    <Slider logo={darts} title={'Darts'} />
                </Link>
                <Link to="/table">
                    <Slider logo={table} title={'Table'} />
                </Link>
                <Link to="/boxing">
                    <Slider logo={boxing} title={'Boxing'} />
                </Link>
                <Link to="/snooker">
                    <Slider logo={snooker} title={'Snooker'} />
                </Link>
                
            </div>
        </div>
    )
}

export default MainSlider;
