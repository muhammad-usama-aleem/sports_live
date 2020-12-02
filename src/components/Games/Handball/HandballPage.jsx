import React from 'react';
import Handball from './container/Handball';
import './HandballPage.css';
import Base from '../Utility/Base.js';


if(!(window.sessionStorage.getItem('Handball')))
{
window.sessionStorage.setItem('Handball',true);
}
class HandballPage extends React.Component {
	 componentWillUnmount()
  {
    
      window.sessionStorage.setItem('Handball',true);
  }
    render() {
    	if(window.sessionStorage.getItem('Handball')==='true')
        {        
        Base('Handball');
        }
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