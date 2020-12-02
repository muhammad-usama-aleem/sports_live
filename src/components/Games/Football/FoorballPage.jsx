import React from 'react';
import Football from './container/Football';
import './FootballPage.css';
import Base from '../Utility/Base.js';


if(!(window.sessionStorage.getItem('Football')))
{
window.sessionStorage.setItem('Football',true);
}

class FootballPage extends React.Component {
  componentWillUnmount()
  {
 
      window.sessionStorage.setItem('Football',true);
  }
    render() {
    if(window.sessionStorage.getItem('Football')==='true')
        {        
        Base('Football');
        }
        return (
            <div className="row">
                <div className="column2" ref={this.parent}>
                    <Football />
                </div>
            </div>
        )
    }
}

export default FootballPage;