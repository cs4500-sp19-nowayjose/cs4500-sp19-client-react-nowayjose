import React from 'react'
import UserService from '../../services/UserService'
import ProfileForm from './ProfileForm'
import ProfileNavigate from './ProfileNavigate'

class ProfileContainer extends React.Component {
     constructor(props) {
        super(props)
        this.userService = UserService.getInstance()
        this.state = {
            user: null,
            firstName: "",
            lastName: "",
            dobMonth: 0,
            dobDay: 0,
            dobYear: 0,
            addStreet: "",
            addCity: "",
            addState: "",
            addZip: 0,
            email: "",
            next: false,
        }
       
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
       
    }
    
    componentDidMount() {
        this.userService
            .findUserById(367)
            .then(currentUser =>
                this.setState({
                    user: currentUser,
                    firstName: currentUser.firstName,
                    lastName: currentUser.lastName,
                    dobMonth: currentUser.dobMonth,
                    dobDay: currentUser.dobDay,
                    dobYear: currentUser.dobYear,
                    addStreet: currentUser.addStreet,
                    addCity: currentUser.addCity,
                    addState: currentUser.addState,
                    addZip: currentUser.addZip,
                    email: currentUser.email,
                })
            )
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
  
    handleUpdate(event) {
        var newUser = {
            "id": this.state.user.id,
            "username": this.state.user.username,
            "email": this.state.user.email,
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "dobMonth": this.state.dobMonth,
            "dobDay": this.state.dobDay,
            "dobYear": this.state.dobYear,
            "addStreet": this.state.addStreet,
            "addCity": this.state.addCity,
            "addState": this.state.addState,
            "addZip": this.state.addZip,
            "email": this.state.email,
        };
      
        this.userService.updateUser(newUser);
      
        this.setState({
            next: true,
        })
    }

    render () {
      if(!this.state.next)
        return(
            <ProfileForm
                user={this.state.user}
                firstName = {this.state.firstName}
                lastName = {this.state.lastName}
                dobMonth = {this.state.dobMonth}
                dobDay = {this.state.dobDay}
                dobYear = {this.state.dobYear}
                addStreet = {this.state.addStreet}
                addCity = {this.state.addCity}
                addState = {this.state.addState}
                addZip = {this.state.addZip}
                email = {this.state.email}
          
                handleChange = {this.handleChange}
                handleUpdate = {this.handleUpdate}
            />
        )
      else
        return(<ProfileNavigate props={this.props} />)
    }
}

export default ProfileContainer