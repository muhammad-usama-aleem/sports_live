import React from 'react';
import MMA from './container/MMA';
import './MMAPage.css';
import Base from '../Utility/Base.js';
if(!(window.sessionStorage.getItem('MMA')))
{
window.sessionStorage.setItem('MMA',true);
}
class MMAPage extends React.Component {

 componentWillUnmount()
  {
     
      window.sessionStorage.setItem('MMA',true);
  }
    
    render() {
            if(window.sessionStorage.getItem('MMA')==='true')
        {        
        Base('MMA');
        }
        return (
            <div className="row">
                <div className="column2">
                    <MMA  />
                </div>
            </div>
        )
    }
}

export default MMAPage;