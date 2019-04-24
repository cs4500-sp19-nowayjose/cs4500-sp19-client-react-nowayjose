
const USER_API_URL = 'https://cs4500-sp19-nowayjose.herokuapp.com/api/users/';

export default class UserService {
    static instance = null;
    static getInstance() {
        if(UserService.instance === null) {
            UserService.instance = new UserService()
        }
        return this.instance
    }
    findUserById = userId =>
        fetch(USER_API_URL + `${userId}`)
            .then(response => response.json())
    findAllUsers = () =>
        fetch(USER_API_URL)
            .then(response => response.json())
		findUserByCredentials = user =>
				fetch(USER_API_URL + `cred/${user.username}/${user.password}`)
						.then(response => response.json())

    createUser = (user) => {
        return fetch(USER_API_URL, {
            body: JSON.stringify(user),
            headers: {
                'Content-Type' : 'application/json'
            },
            method: 'POST'
        }).then(response => {
            return response.json();
        })
    }

    registerUser = (user) => {
        return fetch(USER_API_URL + 'register', {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => {
            localStorage.setItem("@user", JSON.stringify(user));
            return response;
        })
    }

    loginUser = (user) => {
        return fetch(USER_API_URL + 'login', {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        }).then(response => {
            localStorage.setItem("@user", JSON.stringify(user));
            return response;
        })
    }
    
    getProfile = () => {
			var result = JSON.parse(localStorage.getItem("@user"));
			return result;
		}

    updateUser = (user) => {
        return fetch(USER_API_URL + user.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => {
            return response.json();
        });
    }

    deleteUser = (userId) => {
        return fetch(USER_API_URL + `${userId}`, {
            method: 'DELETE'
            }
        );
    }

    getProviderDetail = (user) => 
        fetch('https://cs4500-sp19-nowayjose.herokuapp.com/api/user/service-provider/detail', {
            method: 'POST',
            body: user,
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                if (response.status === 403) {
                    return null;
                }
                return response.json();
            })
    
    updateProviderInfo = (info) => {
        const username = JSON.parse(localStorage.getItem("@user")).username;
        return fetch(`https://cs4500-sp19-nowayjose.herokuapp.com/api/user/service-provider/detail/${username}`, {
            method: 'PUT',
            body: JSON.stringify(info),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                if (response.status === 403) {
                    console.log('error');
                    return null;
                }
                return response.json();
            })
    }

}