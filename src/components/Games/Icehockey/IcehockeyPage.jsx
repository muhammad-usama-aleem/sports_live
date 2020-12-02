import React from 'react';
import Icehockey from './container/Icehockey';
import './IcehockeyPage.css';
import Base from '../Utility/Base.js';


if(!(window.sessionStorage.getItem('Icehockey')))
{
window.sessionStorage.setItem('Icehockey',true);
}
class IcehockeyPage extends React.Component {

 componentWillUnmount()
  {
    
      window.sessionStorage.setItem('Icehockey',true);
  }
    
    
    render() {
    		if(window.sessionStorage.getItem('Icehockey')==='true')
        {        
        Base('Icehockey');
        }

        return (
            <div className="row">
                <div className="column2">
                    <Icehockey />
                </div>
            </div>
        )
    }
}

export default IcehockeyPage;