import React from 'react'
import UserService from '../services/UserService'
import UsersList from './UsersList'
class UsersContainer extends React.Component {
    constructor(props) {
        super(props)
        this.userService = UserService.getInstance()
        this.state = {
            users: [],
            username: 'Username',
            password: 'password',
            firstName: 'First name',
            lastName: 'Last name',
            updateUserId: -1
        }

        this.renderUsername = this.renderUsername.bind(this)
        this.renderFirstName = this.renderFirstName.bind(this)
        this.renderLastName = this.renderLastName.bind(this)
        this.renderUser = this.renderUser.bind(this)
        this.createUser = this.createUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.updateUser = this.updateUser.bind(this)

    }


    componentDidMount() {
        this.userService
            .findAllUsers()
            .then(users =>
                this.setState({
                    users: users
                })
            )
    }
    renderUsername(event) {
        this.setState({
            username: event.target.value
        })
    }
    renderFirstName(event) {
        this.setState({
            firstName: event.target.value
        })
    }
    renderLastName(event) {
        this.setState({
            lastName: event.target.value
        })
    }
    renderUser(user) {
        this.setState({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            updateUserId: user.id
        })
    }
    deleteUser(user) {
        var userId = user.id
        this.userService.deleteUser(userId).then(() =>
            this.userService.findAllUsers()
                .then(users =>
                    this.setState({
                        users: users
                    })));
    }
    createUser() {
        var newUser = {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
        };

        this.userService.createUser(newUser).then(() =>
            this.userService.findAllUsers()
                .then(users =>
                    this.setState({
                        users: users
                    })));
    }
    updateUser() {
        var updatedUser = {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName:this.state.lastName,
            id: this.state.updateUserId
        };
        this.userService.updateUser(updatedUser)
            .then(() => this.userService.findAllUsers()
                .then(users => {
                    console.log(users)
                    this.setState({
                        users: users
                    })
                }));
    }

    render() {
        return(
            <UsersList
                users={this.state.users}
                username={this.state.username}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                renderUsername={this.renderUsername}
                renderFirstName={this.renderFirstName}
                renderLastName={this.renderLastName}
                renderUser={this.renderUser}
                createUser={this.createUser}
                updateUser={this.updateUser}
                deleteUser={this.deleteUser}/>
        )
    }
}

export default UsersContainer