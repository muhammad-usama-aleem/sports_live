import React from 'react';
import Volleyball from './container/Volleyball';
import './VolleyballPage.css';
import Base from '../Utility/Base.js';


if(!(window.sessionStorage.getItem('Volleyball')))
{
window.sessionStorage.setItem('Volleyball',true);
}
class VolleyballPage extends React.Component {

     componentWillUnmount()
  {

      window.sessionStorage.setItem('Volleyball',true);
  }

    render() {
    	if(window.sessionStorage.getItem('Volleyball')==='true')
		{		
		Base('Volleyball');
	    }
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