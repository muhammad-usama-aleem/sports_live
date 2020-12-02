import React from 'react';
import Basketball from './container/Basketball';
import './BasketballPage.css';
import Base from '../Utility/Base.js';


if(!(window.sessionStorage.getItem('Basketball')))
{
window.sessionStorage.setItem('Basketball',true);
}

class BasketballPage extends React.Component {
     componentWillUnmount()
  {
      console.log("componenet wll unmount");
      window.sessionStorage.setItem('Basketball',true);
  }

    render() {
    	if(window.sessionStorage.getItem('Basketball')==='true')
		{		
		Base('Basketball');
	    }
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