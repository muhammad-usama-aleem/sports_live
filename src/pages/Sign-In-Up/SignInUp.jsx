import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import './SignInUp.css';

class SignInUp extends React.Component {
    constructor(props) {
        super(props);
        this.login = React.createRef(); 
        this.signUp = React.createRef();       
      }
    
    changeIn = (event) =>{
        event.preventDefault();
        if (event.target.parentElement.className === 'form-wrapper is-active'){
            return;
        }
        else{
            this.signUp.current.className = 'form-wrapper';
            this.login.current.className = 'form-wrapper is-active';
        }
    }
    changeOut = (event) =>{
        event.preventDefault();
        if(event.target.parentElement.className  === 'form-wrapper is-active'){
            return;   
        }
        else{
            this.login.current.className = 'form-wrapper';
            this.signUp.current.className = 'form-wrapper is-active';
        }

    }
    render(){
        return (
            <>
                <section className="forms-section">
                <div className="forms">
                    <div className="form-wrapper is-active" ref={this.login}>
                    <button type="button" className="switcher switcher-login" onClick={this.changeIn}>
                        Login
                        <span className="underline"></span>
                    </button>
                    <SignIn />
                    </div>
                    <div className="form-wrapper" ref={this.signUp}>
                    <button type="button" className="switcher switcher-signup" onClick={this.changeOut}>
                        Sign Up
                        <span className="underline"></span>
                    </button>
                    <SignUp />
                    </div>
                </div>
                </section>    
            </>
        )
    }
    
}

export default SignInUp;
