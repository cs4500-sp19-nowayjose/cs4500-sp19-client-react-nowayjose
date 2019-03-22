import React from 'react'
import ServiceCategoryService from '../services/ServiceCategoryService'
class ServiceCategories extends React.Component {
    constructor(props) {
        super(props)
        this.serviceCategoryService = ServiceCategoryService.getInstance()
        this.state = {
            serviceCategories: [],
            name: 'New category',
            updateId: -1
        }

         this.editServiceCategory = this.editServiceCategory.bind(this)
         this.deleteServiceCategory = this.deleteServiceCategory.bind(this)
         this.createServiceCategory = this.createServiceCategory.bind(this)
         this.updateServiceCategory = this.updateServiceCategory.bind(this)
         this.handleNameChange = this.handleNameChange.bind(this)

    }
    componentDidMount() {
        this.serviceCategoryService
            .findAllServiceCategories()
            .then(serviceCategories =>
                this.setState({
                    serviceCategories: serviceCategories
                })
            )
    }

    editServiceCategory(serviceCategory, e) {
        e.stopPropagation();
        this.setState({
            name: serviceCategory.serviceCategoryName,
            updateId: serviceCategory.id
        })
    }

    deleteServiceCategory(serviceCategory, e) {
        e.stopPropagation();
        this.serviceCategoryService.deleteServiceCategory(serviceCategory).then(() =>
            this.serviceCategoryService.findAllServiceCategories()
                .then(serviceCategories =>
                    this.setState({
                        serviceCategories: serviceCategories
                    })));
    }

    createServiceCategory() {
        var newCategory = {
            serviceCategoryName: this.state.name
        };

        this.serviceCategoryService.createServiceCategory(newCategory).then(() =>
            this.serviceCategoryService.findAllServiceCategories()
                .then(serviceCategories =>
                    this.setState({
                        serviceCategories: serviceCategories
                    })));
    }

    updateServiceCategory() {
        var updatedCategory = {
            serviceCategoryName: this.state.name,
            id: this.state.updateId
        };

        this.serviceCategoryService.updateServiceCategory(updatedCategory).then(() =>
            this.serviceCategoryService.findAllServiceCategories()
                .then(serviceCategories =>
                    this.setState({
                        serviceCategories: serviceCategories
                    })));
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    selectServiceCategory(id) {
        this.props.history.push('/admin/service-categories/' + id)
    }


    render() {
        return(
            <div>
                <h3>Service Categories</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                        </tr>
                        <tr>
                            <th> <input type="text" onChange={this.handleNameChange} value={this.state.name} placeholder="new category" /> </th>
                            <th>
                                <button type="button" onClick={this.updateServiceCategory}
                                        className="btn btn-primary btn-block">Save
                                </button>
                            </th>
                            <th>
                                <button type="button" onClick={this.createServiceCategory}
                                        className="btn btn-primary btn-block">Create
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.serviceCategories
                            .map(serviceCategory =>
                                <tr onClick={() => this.selectServiceCategory(serviceCategory.id)} key={serviceCategory.id}>
                                    <td>{serviceCategory.serviceCategoryName}</td>
                                    <th>
                                        <button type="button" onClick={(e) => this.editServiceCategory(serviceCategory, e)}
                                                className="btn btn-primary btn-block">Edit
                                        </button>
                                    </th>
                                    <th>
                                        <button type="button" onClick={(e) => this.deleteServiceCategory(serviceCategory, e)}
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

export default ServiceCategories