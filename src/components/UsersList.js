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
                <th><input type="text" onChange={props.renderUsername} value={props.username} placeholder={"Username"}/></th>
                <th><input type="text" onChange={props.renderFirstName} value={props.firstName} placeholder={"First Name"}/></th>
                <th><input type="text" onChange={props.renderLastName} value={props.lastName} placeholder={"Last Name"}/></th>
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
                    .slice((props.page-1)*props.recordsNumber,
                        Math.min(props.page*props.recordsNumber,
                            props.users.length))
                    .filter(props.passesFilter)
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
            <tfoot>
            <tr>
                <td>
                    <select onChange={props.handleRecordsNumberChange} value={props.recordsNumber}>
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                        <option>100</option>
                        <option>All</option>
                    </select>
                </td>
                <td>
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" onClick={props.handlePageChange} disabled={props.page === 1}>Previous</a></li>
                        {
                            props.getPageNumbers().map(num =>
                                <li key={num} className="page-item"><a className="page-link" onClick={props.handlePageChange}>{num}</a></li>
                            )
                        }
                        <li className="page-item"><a className="page-link" onClick={props.handlePageChange} disabled={props.page === Math.round(props.users.length/props.recordsNumber)}>Next</a></li>
                    </ul>
                </td>
                <td>
                    <button className="btn btn-secondary btn-block" onClick={props.handleFilterChange}>
                        {
                            (props.filter.username === undefined && props.filter.firstName === undefined && props.filter.lastName === undefined) ? 'Search' : 'Clear Search'
                        }
                    </button>
                </td>
            </tr>
            </tfoot>
        </table>
    </div>

export default UsersList



