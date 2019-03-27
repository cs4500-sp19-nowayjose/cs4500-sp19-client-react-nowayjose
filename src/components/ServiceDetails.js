import React from 'react'
import ServiceService from '../services/ServiceService'
class ServiceDetails extends React.Component {
    constructor(props) {
        super(props)
        this.serviceService = ServiceService.getInstance()
        this.state = {
            services: [],
            service: {
                serviceName: '',
                id: 1
            }
        }
    }
    componentDidMount() {
        this.findAllServices()
    }

    findAllServices = () =>
        this.serviceService
            .findAllServices()
            .then(services => {
                    this.props.history.push("/admin/services/" + services[0].id)
                    this.setState({
                        services: services,
                        service: services[0]
                    })
                }
            )

    selectService = id =>
        this.serviceService
            .findServiceById(id)
            .then(service => {
                    this.props.history.push("/admin/services/" + id)
                    this.setState({
                        service: service
                    })
                }
            )

    updateForm = e =>
        this.setState({
            service: {
                serviceName: e.target.value,
                id: this.state.service.id
            }
        })

    createService = () =>
        this.serviceService
            .createService(this.state.service)
            .then(this.findAllServices)

    deleteService = id =>
        this.serviceService
            .deleteService(id)
            .then(this.findAllServices())

    updateService = () =>
        this.serviceService
            .updateService(this.state.service)

    render() {
        return(
            <div>
                <h3>Service Details</h3>
                <select
                    value={this.state.service.id}
                    onChange={(e) => this.selectService(e.target.value)}
                    className="form-control">
                    {
                        this.state.services
                            .map(service =>
                                <option
                                    value={service.id}
                                    key={service.id}>
                                    {service.id}
                                </option>
                            )
                    }
                </select>
                <label>Service</label><br/>
                <input
                    onChange={e => this.updateForm(e)}
                    className="form-control"
                    value={this.state.service.serviceName}/>
                <button onClick={this.createService}>
                    Create
                </button>
                <button onClick={() => this.deleteService(this.state.service.id)}>
                    Delete
                </button>
                <button onClick={this.updateService}>
                    Update
                </button>
            </div>
        )
    }
}

export default ServiceDetails
