import React from 'react'
import ServiceService from '../services/ServiceService'
import ServicesList from './ServicesList'

class ServicesContainer extends React.Component {
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
        this.selectService = this.selectService.bind(this)
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
                        services: services,
                        serviceName: ''
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
            <ServicesList
                services={this.state.services}
                serviceName={this.state.serviceName}
                handleServiceNameChange={this.handleServiceNameChange}
                createService={this.createService}
                selectService={this.selectService}
                editService={this.editService}
                updateService={this.updateService}
                deleteService={this.deleteService}
            />
        )
    }
}

export default ServicesContainer
