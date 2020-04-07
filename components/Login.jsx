import React, { Component } from 'react'

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            'username': "None",
            'password': "Password",
            'postId': ''
        }
        this.submitClicked = this.submitClicked.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async submitClicked(event){
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({ username: this.state.username, password: this.state.password })
        };
        const response = await fetch('http://localhost:5000/login', requestOptions);
        if(response.status === 302){
            sessionStorage.setItem('username',this.state.username);
            event.history.push("/");
        }
        else{
            document.getElementById('Loginform').reset();
            alert('User not found')
        }
        event.preventDefault();
    }

    handleChange(event){
        if(event.target.type === 'password')
            this.setState({password: event.target.value});
        else
            this.setState({username: event.target.value});
    }

    render() {
        return (
            <div>
                <form id='Loginform'>
                    <span>Enter email: </span>
                    <input type='email' onChange={this.handleChange}/>
                    <span>Enter password: </span>
                    <input type='password' onChange={this.handleChange}/>
                    <button type='button' onClick={this.submitClicked}>Submit</button>
                </form>
            </div>
        );
    };
}
export default Login;