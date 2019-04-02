
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
}