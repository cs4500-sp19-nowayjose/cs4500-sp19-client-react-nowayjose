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
            dobMonth: 1,
            dobDay: 1,
            dobYear: 1,
            addStreet: "",
            addCity: "",
            addState: "",
            addZip: 0,
            username: "",
            next: false,
        }
       
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }
    
    componentDidMount() {
        this.userService
            .findAllUsers()
            .then(users => {
                    this.setState({
                        user: users[0],
                        firstName: users[0].firstName,
                        lastName: users[0].lastName,
                      
                        // Setting DOB fields using lowercase versions
                        // Still trying to figure out why this is an issue
                        // These fields don't update
                        dobMonth: users[0].dobmonth,
                        dobDay: users[0].dobday,
                        dobYear: users[0].dobyear,
                        
                        addStreet: users[0].addStreet,
                        addCity: users[0].addCity,
                        addState: users[0].addState,
                        addZip: users[0].addZip,
                        username: users[0].username,
                    });
                }
            )
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
  
    handleUpdate(event) {
        console.log(this.state);
      
        var newUser = {
            "id": this.state.user.id,
            "username": this.state.user.username,
            "username": this.state.user.username,
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "dobMonth": this.state.dobMonth,
            "dobDay": this.state.dobDay,
            "dobYear": this.state.dobYear,
            "addStreet": this.state.addStreet,
            "addCity": this.state.addCity,
            "addState": this.state.addState,
            "addZip": this.state.addZip,
        };
      
        console.log(newUser);
      
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
                username = {this.state.username}
          
                handleChange = {this.handleChange}
                handleUpdate = {this.handleUpdate}
            />
        )
      else
        return(<ProfileNavigate props={this.props} />)
    }
}

export default ProfileContainer