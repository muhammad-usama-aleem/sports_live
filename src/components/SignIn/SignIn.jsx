import React from 'react';
import '../../pages/Sign-In-Up/SignInUp.css';

class SignIn extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        signInEmail: '',
        signInPassword: ''
      }
    }
  
    onEmailChange = (event) => {
        console.log(event.target.value,"emial")
      this.setState({signInEmail: event.target.value});
    
    }
  
    onPasswordChange = (event) => {
      console.log(event.target.value,"pass")
      this.setState({signInPassword: event.target.value});

    }
  
    onSubmitSignIn = () => {
      console.log("sama");
      fetch('https://sports-server-api.herokuapp.com/signin', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.state.signInEmail,
          password: this.state.signInPassword,

        })
      })
        .then(response => response.json())
        .then(data => {
            console.log(data);
          if (data === 'success') {
            window.location.href='/';
        
          }
        })
    }

    render(){
        return (
            <div>
                  <main className="form form-login">
                    <fieldset>
                    <legend>Please, enter your email and password for login.</legend>
                    <div className="input-block">
                        <label htmlFor="login-email">E-mail</label>
                        <input id="login-email" 
                        type="email"
                        onChange={this.onEmailChange} 
                        required />
                    </div>
                    <div className="input-block">
                        <label htmlFor="login-password">Password</label>
                        <input id="login-password" 
                        type="password"
                        onChange={this.onPasswordChange} 
                        required />
                    </div>
                    </fieldset>
                    <button 
                    type="submit"
                    className="btn-login"
                    onClick={this.onSubmitSignIn}>
                        Login
                    </button>
                </main>        
            </div>
        )
    }
}

export default SignIn;