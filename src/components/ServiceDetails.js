import React from 'react'
import ServiceService from '../services/ServiceService'
import ServiceCategoryService from '../services/ServiceCategoryService'

class ServiceDetails extends React.Component {
    constructor(props) {
        super(props)
        this.serviceService = ServiceService.getInstance()
        this.serviceCategoryService = ServiceCategoryService.getInstance()
        this.state = {
            services: [],
            categories: [
                {
                    serviceCategoryName: '',
                    id: -1
                }
            ],
            category: '',
            categoryId: -1,
            service: {
                serviceName: '',
                id: 1
            }
        }
    }
    componentDidMount() {
        this.findAllServices()
        this.findAllCategories()
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

    findAllCategories = () =>
        this.serviceCategoryService
            .findAllServiceCategories()
            .then(categories => {
                    this.setState({
                        categories: categories
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

    updateCategory = id => {
        this.serviceCategoryService
            .findServiceCategoryById(id)
            .then(category => {
                if (category === undefined)
                    return;
                this.setState({
                    category: category.serviceCategoryName,
                    categoryId: category.id,
                })
            })
    }



    updateCategoryRelationship = () => {
        this.serviceCategoryService.addServiceToCategory(this.state.service.id, this.state.categoryId);
    }



    createService = () =>
        this.serviceService
            .createService(this.state.service)
            .then(this.findAllServices)

    deleteService = id =>
        this.serviceService
            .deleteService(id)
            .then(this.findAllServices())

    updateService = () => {
        if (this.state.category !== "" || this.state.category !== "None") {
            this.updateCategoryRelationship();

        }

        this.serviceService
            .updateService(this.state.service)
    }

    render() {
        return(
            <div>
                <h3>Service Details</h3>
                <label>Service Id</label><br/>
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
                <br/>
                <label>Service</label><br/>
                <input
                    onChange={e => this.updateForm(e)}
                    className="form-control"
                    value={this.state.service.serviceName}/>
                <br/>
                <label>Service Category</label><br/>
                <select
                    value={this.state.categoryId}
                    onChange={(e) => this.updateCategory(e.target.value)}
                    className="form-control">
                    <option>None</option>
                    {
                        this.state.categories
                            .map(category =>
                                <option
                                    value={category.id}
                                    key={category.id}>
                                    {category.serviceCategoryName}
                                </option>
                            )
                    }

                </select>
                <br/>
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
