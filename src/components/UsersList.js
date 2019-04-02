import React from 'react'
import { Link } from 'react-router-dom'

const UsersList = props =>
    <div>
        <h3>Users</h3>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Username</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th>&nbsp;</th>
            </tr>
            <tr>
                <th><input type="text" onChange={props.renderUsername} value={props.username}
                           placeholder="username"/></th>
                <th><input type="text" onChange={props.renderFirstName} value={props.firstName}
                           placeholder="firstName"/></th>
                <th><input type="text" onChange={props.renderLastName} value={props.lastName}
                           placeholder="lastName"/></th>
                <th>
                    <button type="button" onClick={props.createUser}
                            className="btn btn-primary btn-block">Create
                    </button>
                </th>
                <th>
                    <button type="button" onClick={props.updateUser}
                            className="btn btn-primary btn-block">Save
                    </button>
                </th>
            </tr>
            </thead>
            <tbody>
            {
                props.users
                    .map(user =>
                        <tr key={user.id}>
                            <td>
                                <Link to={`/admin/users/${user.id}`}>
                                    {user.username}
                                </Link>
                            </td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>
                                <button type="button" onClick={() => props.deleteUser(user)}
                                        className="btn btn-primary btn-block">Delete
                                </button>
                                <button type="button" onClick={() => props.renderUser(user)}
                                        className="btn btn-primary btn-block">Edit
                                </button>
                            </td>
                        </tr>
                    )
            }
            </tbody>
        </table>
    </div>

export default UsersList



