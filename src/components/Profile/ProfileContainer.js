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
                    this.setState({
                        user: user,
                        firstName: user.firstName,
                        lastName: user.lastName,
                      
                        addStreet: user.addStreet,
                        addCity: user.addCity,
                        addState: user.addState,
                        addZip: user.addZip,
                        username: user.username,
                    });
										if(user.dob == null)
											 this.setState({
											 		dobMonth: 1,
											 		dobDay: 1,
												 	dobYear: 2001,
											 });
										else
											 this.setState({
											 		dobMonth: user.dob.split("-")[1],
													dobDay: user.dob.split("-")[2],
													dobYear: user.dob.split("-")[0],
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
        var newUser = {
            "id": this.state.user.id,
            "username": this.state.user.username,
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "dob": new Date(this.state.dobYear, this.state.dobMonth - 1, this.state.dobDay),
            "addStreet": this.state.addStreet,
            "addCity": this.state.addCity,
            "addState": this.state.addState,
            "addZip": this.state.addZip,
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