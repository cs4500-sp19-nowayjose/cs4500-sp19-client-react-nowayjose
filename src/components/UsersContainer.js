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
            updateUserId: -1,
            recordsNumber: 10,
            page: 1,
        }

        this.renderUsername = this.renderUsername.bind(this)
        this.renderFirstName = this.renderFirstName.bind(this)
        this.renderLastName = this.renderLastName.bind(this)
        this.renderUser = this.renderUser.bind(this)
        this.createUser = this.createUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.updateUser = this.updateUser.bind(this)
        this.getPageNumbers = this.getPageNumbers.bind(this)


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

    getPageNumbers() {
        var nums = [];
        for(var i = Math.max(1, this.state.page - 3); i < Math.min(this.state.page + 3, this.state.users.length/this.state.recordsNumber + 1); i++) {
            nums.push(i)
        }
        return nums
    }

    handleRecordsNumberChange(event) {
        this.setState({
            recordsNumber: event.target.value != "All" ? event.target.value : this.state.users.length
        })
    }

    handlePageChange(event) {
        var newPage = this.state.page;
        if(event.target.innerHTML == "Previous") newPage = Math.max(newPage - 1, 1);
        else if(event.target.innerHTML == "Next") newPage = Math.min(newPage + 1, Math.ceil(this.state.users.length/this.state.recordsNumber));
        else newPage = event.target.innerHTML;

        this.setState({
            page: newPage
        })
    }
    render() {
        return(
            <UsersList
                users={this.state.users}
                username={this.state.username}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                page={this.state.page}
                recordsNumber={this.state.recordsNumber}

                renderUsername={this.renderUsername}
                renderFirstName={this.renderFirstName}
                renderLastName={this.renderLastName}
                renderUser={this.renderUser}
                createUser={this.createUser}
                updateUser={this.updateUser}
                deleteUser={this.deleteUser}
                getPageNumbers = {this.getPageNumbers}
                handlePageChange = {this.handlePageChange}
                handleRecordsNumberChange = {this.handleRecordsNumberChange}
            />
        )
    }
}

export default UsersContainer