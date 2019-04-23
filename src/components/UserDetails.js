import React from 'react'
import UserService from '../services/UserService'
const UserDetails = ({ users, user, selectUser }) =>

            <div>
                <h3>User Details</h3>
                <select
                    value={user.id}
                    onChange={(e) => selectUser(e.target.value)}
                    className="selectedUser form-control">
                    {
                        users
                            .map(user =>
                                <option
                                    value={user.id}
                                    key={user.id}>
                                    {user.username}
                                </option>
                            )
                    }
                </select>
                <label>Username</label><br/>
                <input
                    onChange={() => {}}
                    className="username form-control"
                    value={user.username}/>
                <label>First Name</label><br/>
                <input
                    onChange={() => {}}
                    className="firstName form-control"
                    value={user.firstName}/>
                <label>Last Name</label><br/>
                <input
                    onChange={() => {}}
                    className="lastName form-control"
                    value={user.lastName}/>
            </div>


export default UserDetails

