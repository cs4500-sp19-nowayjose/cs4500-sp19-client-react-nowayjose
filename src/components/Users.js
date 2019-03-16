import React from 'react'
import UserService from '../services/UserService'
class Users extends React.Component {
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
        console.log(updatedUser)
        console.log(this.state.updateUserId)
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
            <div>
                <h3>Users</h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Username</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th>&nbsp;</th>
                    </tr>
                    <tr>
                            <th><input type="text" onChange={this.renderUsername} value={this.state.username}
                                       placeholder="username" readOnly={true}/></th>
                            <th><input type="text" onChange={this.renderFirstName} value={this.state.firstName}
                                       placeholder="firstName"/></th>
                            <th><input type="text" onChange={this.renderLastName} value={this.state.lastName}
                                       placeholder="lastName"/></th>
                            <th>
                                <button type="button" onClick={this.createUser}
                                        className="btn btn-primary btn-block">Create
                                </button>
                            </th>
                        <th>
                            <button type="button" onClick={this.updateUser}
                                    className="btn btn-primary btn-block">Save
                            </button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users
                            .map(user =>
                                <tr key={user.id}>
                                    <td>{user.username}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>
                                        <button type="button" onClick={() => this.deleteUser(user)}
                                                className="btn btn-primary btn-block">Delete
                                        </button>
                                        <button type="button" onClick={() => this.renderUser(user)}
                                                className="btn btn-primary btn-block">Edit
                                        </button>
                                    </td>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Users