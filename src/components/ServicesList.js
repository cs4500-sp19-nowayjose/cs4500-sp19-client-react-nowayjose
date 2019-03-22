import React from 'react'


const ServicesList = props =>
    <div>
        <h3>Services</h3>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Service Name</th>
                <th>&nbsp;</th>
            </tr>
            <tr>
                <th><input type="text" onChange={props.handleServiceNameChange} value={props.serviceName}
                           placeholder="Service Name"/></th>
                <th>
                    <button type="button" onClick={props.updateService} className="btn btn-primary btn-block">Save
                    </button>
                </th>
                <th>
                    <button type="button" onClick={props.createService}
                            className="btn btn-primary btn-block">Create
                    </button>
                </th>
            </tr>
            </thead>
            <tbody>
            {
                props.services
                    .map(service =>
                        <tr onClick={() => props.selectService(service.id)} key={service.id}>
                            <td>{service.serviceName}</td>
                            <th>
                                <button type="button" onClick={(e) => props.editService(service, e)}
                                        className="btn btn-primary btn-block">Edit
                                </button>
                            </th>
                            <th>
                                <button type="button" onClick={(e) => props.deleteService(service, e)}
                                        className="btn btn-primary btn-block">Delete
                                </button>
                            </th>
                        </tr>
                    )
            }
            </tbody>
        </table>
    </div>

export default ServicesList
