import React from 'react';
import Cricket from './container/Cricket';
import './CricketPage.css';
import Base from '../Utility/Base.js';


if(!(window.sessionStorage.getItem('Cricket')))
{
window.sessionStorage.setItem('Cricket',true);
}
class CricketPage extends React.Component {


  componentWillUnmount()
  {
  
  	window.sessionStorage.setItem('Cricket',true);
  }







    render() {
    	  	if(window.sessionStorage.getItem('Cricket')==='true')
		{		
		Base('Cricket');
	    }
        return (
            <div className="row">
                <div className="column2">
                    <Cricket />
                </div>
            </div>
        )
    }
}

export default CricketPage;