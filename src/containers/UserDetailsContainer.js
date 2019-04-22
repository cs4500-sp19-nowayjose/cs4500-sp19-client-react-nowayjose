import React from 'react'
import UserService from '../services/UserService'
import UserDetails from '../components/UserDetails'

class UserDetailsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.userService = UserService.getInstance()
        this.state = {
            users: [],
            user: {
                choiceAnswer: '',
                id: 1
            }
        }
    }
    componentDidMount() {
        this.userService
            .findAllUsers()
            .then(users => {
                    this.userService.findUserById(this.props.match.params.id).then(user => {
                        this.setState({
                            users: users,
                            user: user
                        })
                    })
                }
            )
    }

    selectUser = id =>
        this.userService
            .findUserById(id)
            .then(user => {
                    this.props.history.push("/admin/users/" + id)
                    this.setState({
                        user: user
                    })
                }
            )

    render() {
        return (
            <UserDetails
                users={this.state.users}
                user={this.state.user}
                selectUser={this.selectUser}
            />
        )
    }
}

export default UserDetailsContainer