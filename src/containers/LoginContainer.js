import React from 'react'
import UserService from '../services/UserService'
import Login from '../components/Login/Login'

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);

        this.UserService = UserService.getInstance()

        this.state = {
            username: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleChange = event =>  {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleLogin = event => {
        var credentials = {
            username: this.state.username,
            password: this.state.password
        }

        this.UserService.loginUser(credentials).then(resp => {
            if (resp.status === 403) {
                alert('Invalid credentials. Please try again.')
            }
            else {
                this.props.history.push('/profile')
            }
        })
    }

    render() {
        return (<Login 
            handleChange = {this.handleChange}
            handleLogin = {this.handleLogin}
        />)
    }
}

export default LoginContainer