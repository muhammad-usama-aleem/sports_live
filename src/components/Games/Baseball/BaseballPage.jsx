import React from 'react';
import Baseball from './container/Baseball';
import './BaseballPage.css';
import Base from '../Utility/Base.js';


if(!(window.sessionStorage.getItem('Baseball')))
{
window.sessionStorage.setItem('Baseball',true);
}

class BaseballPage extends React.Component {
         componentWillUnmount()
  {
    
      window.sessionStorage.setItem('Baseball',true);
  }
    render() {
if(window.sessionStorage.getItem('Baseball')==='true')
		{		
		Base('Baseball');
	    }	
        return (
            <div className="row">
                <div className="column2">
                    <Baseball />
                </div>
            </div>
        )
    }
}

export default BaseballPage;