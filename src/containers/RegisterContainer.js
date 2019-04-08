import React from 'react'
import UserService from '../services/UserService'
import Register from '../components/Register/Register'

export default class RegisterContainer extends React.Component {
    constructor(props) {
        super(props);

        this.userService = UserService.getInstance()

        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            password: ""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleCreate = event => {
        var user = this.state; 
        this.userService.registerUser(user).then(resp => {
            console.log(resp)
        })
    }

    render() {
        return (<Register
            handleChange={this.handleChange}
            handleCreate={this.handleCreate}
        />);
    };
}