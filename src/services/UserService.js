
const USER_API_URL = 'https://cs4500-sp19-nowayjose.herokuapp.com/api/users';
const API = 'https://cs4500-sp19-nowayjose.herokuapp.com/api/';

export default class UserService {
    static instance = null;
    static getInstance() {
        if(UserService.instance === null) {
            UserService.instance = new UserService()
        }
        return this.instance
    }
    findUserById = userId =>
        fetch(USER_API_URL + `/${userId}`)
            .then(response => response.json())
    findAllUsers = () =>
        fetch(USER_API_URL)
            .then(response => response.json())

    createUser = (user) => {
        fetch(USER_API_URL, {
            body: JSON.stringify(user),
            headers: {
                'Content-Type' : 'application/json'
            },
            method: 'POST'
        }).then(response => {
            return response.json();
        })
    }

    updateUser = (userId, user) => {
        fetch(API + `${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    }

    deleteUser = (userId) => {
        fetch(USER_API_URL + `${userId}`, {
            method: 'DELETE'
            }
        ).then(response => {
                return response;
            });
    }
}