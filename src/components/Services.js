import React from 'react'
import ServiceService from '../services/ServiceService'
class Services extends React.Component {
    constructor(props) {
        super(props)
        this.serviceService = ServiceService.getInstance()
        this.state = {
            services: [],
            serviceName: '',
            updateId: -1
        }

        this.editService = this.editService.bind(this)
        this.deleteService = this.deleteService.bind(this)
        this.createService = this.createService.bind(this)
        this.updateService = this.updateService.bind(this)
        this.handleServiceNameChange = this.handleServiceNameChange.bind(this)
    }

    componentDidMount() {
        this.serviceService
            .findAllServices()
            .then(services =>
                this.setState({
                    services: services
                })
            )
    }

    editService(service, e) {
        e.stopPropagation();
        this.setState({
            serviceName: service.serviceName,
            updateId: service.id
        })
    }

    deleteService(service, e) {
        e.stopPropagation();
        this.serviceService.deleteService(service).then(() =>
            this.serviceService.findAllServices()
                .then(services =>
                    this.setState({
                        services: services
                    })));
    }

    createService() {
        var newService = {
            serviceName: this.state.serviceName
        };

        this.serviceService.createService(newService).then(() =>
            this.serviceService.findAllServices()
                .then(services =>
                    this.setState({
                        services: services
                    })));
    }

    updateService() {
        var updatedService = {
            serviceName: this.state.serviceName,
            id: this.state.updateId
        };

        this.serviceService.updateService(updatedService).then(() =>
            this.serviceService.findAllServices()
                .then(services =>
                    this.setState({
                        services: services,
                        serviceName: ''
                    })));
    }

    handleServiceNameChange(event) {
        this.setState({
            serviceName: event.target.value
        })
    }

    selectService(id) {
        this.props.history.push('/admin/services/' + id)
    }

    render() {
        return(
            <div>
                <h3>Services</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Service Name</th>
                            <th>&nbsp;</th>
                        </tr>
                        <tr>
                            <th><input type="text" onChange={this.handleServiceNameChange} value={this.state.serviceName}
                                       placeholder="Service Name"/></th>
                            <th>
                                <button type="button" onClick={this.updateService} className="btn btn-primary btn-block">Save
                                </button>
                            </th>
                            <th>
                                <button type="button" onClick={this.createService}
                                        className="btn btn-primary btn-block">Create
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.services
                            .map(service =>
                                <tr onClick={() => this.selectService(service.id)} key={service.id}>
                                    <td>{service.serviceName}</td>
                                    <th>
                                        <button type="button" onClick={(e) => this.editService(service, e)}
                                                className="btn btn-primary btn-block">Edit
                                        </button>
                                    </th>
                                    <th>
                                        <button type="button" onClick={(e) => this.deleteService(service, e)}
                                                className="btn btn-primary btn-block">Delete
                                        </button>
                                    </th>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Services
