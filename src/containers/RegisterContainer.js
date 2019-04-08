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
        var newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            password: this.state.password
        };

        this.userService.registerUser(newUser).then(resp => {
            if (resp.status == 403) {
                alert('Error: Username already taken')
            }
            else {
                this.props.history.push('/profile')
            }
        })
    }

    render() {
        return (<Register
            handleChange={this.handleChange}
            handleCreate={this.handleCreate}
        />);
    };
}