import React from 'react';
import Tennis from './container/Tennis';
import './TennisPage.css';
import Base from '../Utility/Base.js';

if(!(window.sessionStorage.getItem('Tennis')))
{
window.sessionStorage.setItem('Tennis',true);
}
class TennisPage extends React.Component {
	componentWillUnmount()
  {
 
      window.sessionStorage.setItem('Tennis',true);
  }
    render() {

    	   if(window.sessionStorage.getItem('Tennis')==='true')
        {        
        Base('Tennis');
        }
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