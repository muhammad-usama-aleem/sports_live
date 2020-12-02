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
      this.setState({signInEmail: event.target.value});
      console.log('email', this.state.signInEmail);
    }
  
    onPasswordChange = (event) => {
      this.setState({signInPassword: event.target.value});
      console.log('pass', this.state.signInPassword);
    }
  
    onSubmitSignIn = () => {
      console.log("sama");
      fetch('https://sports-server-api.herokuapp.com/signin', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.state.signInEmail,
          password: this.state.signInPassword,
          time:new Date()
        })
      })
        .then(response => response.json())
        .then(data => {
            console.log('receive something');
          if (data === 'success') {
            window.location = 'http://127.0.0.1:3000/';
            alert('wrong credientials')
          }
        })
    }

    render(){
        return (
            <div>
                  <form className="form form-login">
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
                </form>        
            </div>
        )
    }
}

export default SignIn;