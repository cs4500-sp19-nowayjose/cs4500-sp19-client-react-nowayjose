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
				var cred = this.userService.getProfile();
        this.userService
						.findUserByCredentials(cred)
            .then(user => {
										console.log(user);
                    this.setState({
                        user: user,
                        firstName: user.firstName,
                        lastName: user.lastName,
                      
//                        dobMonth: user.dob.getMonth(),
//                        dobDay: user.dob.getDay(),
//                        dobYear: user.dob.getYear(),
                        
                        addStreet: user.addStreet,
                        addCity: user.addCity,
                        addState: user.addState,
                        addZip: user.addZip,
                        username: user.username,
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
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "dob": new Date(this.state.dobYear, this.state.dobMonth, this.state.dobDay),
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