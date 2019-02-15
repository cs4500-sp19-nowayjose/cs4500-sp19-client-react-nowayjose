export default class UserService {
    static instance = null;
    static getInstance() {
        if(UserService.instance === null) {
            UserService.instance = new UserService()
        }
        return this.instance
    }
    findUserById = userId =>
        fetch(`https://cs4500-sp19-nowayjose.herokuapp.com/api/${userId}`)
            .then(response => response.json())
    findAllUsers = () =>
        fetch("https://cs4500-sp19-nowayjose.herokuapp.com/api/users")
            .then(response => response.json())
}