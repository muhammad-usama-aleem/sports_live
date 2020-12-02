import React from 'react';
import Amfootball from './container/Amfootball';
import './AmfootballPage.css';
import Base from '../Utility/Base.js';


if(!(window.sessionStorage.getItem('Amfootball')))
{
window.sessionStorage.setItem('Amfootball',true);
}

class AmfootballPage extends React.Component {

     componentWillUnmount()
  {
     
      window.sessionStorage.setItem('Amfootball',true);
  }

    render() {
	if(window.sessionStorage.getItem('Amfootball')==='true')
		{		
		Base('Amfootball');
	    }

        return (
            <div className="row">
                <div className="column2">
                    <Amfootball />
                </div>
            </div>
        )
    }
}

export default AmfootballPage;