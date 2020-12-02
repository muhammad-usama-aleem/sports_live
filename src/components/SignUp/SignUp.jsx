import React from 'react';
import '../../pages/Sign-In-Up/SignInUp.css';

class SignUp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        name: ''
      }
    }
  
    onNameChange = (event) => {
      this.setState({name: event.target.value});
      console.log(this.state.name)
    }
  
    onEmailChange = (event) => {
      this.setState({email: event.target.value});
      console.log(this.state.email)
    }
  
    onPasswordChange = (event) => {
      this.setState({password: event.target.value});
      console.log(this.state.password);
    }
  
    loadUser = (data) => {
        this.setState({user: {
          id: data.id,
          name: data.name,
          email: data.email,
          entries: data.entries,
          joined: data.joined
        }})
    }

    onSubmitSignIn = () => {
      fetch('https://sports-server-api.herokuapp.com/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          name: this.state.name,
           time:new Date()
        })
      })
        .then(response => 
    
        {  
   
        return response.json()}
        )
        .then(user => {
     
          if (user) {
            this.loadUser(user)
            console.log(user);
            
          }
        })
    }

    render(){
        return (
            <div>
                <main className="form form-signup">
                    <fieldset>
                    <legend>Please, enter your email, password and password confirmation for sign up.</legend>
                    <div className="input-block">
                        <label htmlFor="name">Name</label>
                        <input
                        onChange={this.onNameChange} 
                        required />
                    </div>
                    <div className="input-block">
                        <label htmlFor="signup-email">E-mail</label>
                        <input 
                        id="signup-email" 
                        type="email"
                        onChange={this.onEmailChange}
                        required />
                    </div>
                    <div className="input-block">
                        <label htmlFor="signup-password">Password</label>
                        <input 
                        id="signup-password" 
                        type="password" 
                        onChange={this.onPasswordChange}
                        required />
                    </div>
                    </fieldset>
                    <button 
                    type="submit" 
                    className="btn-signup"
                    onClick={this.onSubmitSignIn}>
                        Continue
                    </button>
                </main>                    
            </div>
        )
    }
    
}

export default SignUp;
