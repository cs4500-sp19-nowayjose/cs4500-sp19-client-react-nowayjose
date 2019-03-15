import React from 'react'
import ServiceCategoryService from '../services/ServiceCategoryService'
class ServiceCategories extends React.Component {
    constructor(props) {
        super(props)
        this.serviceCategoryService = ServiceCategoryService.getInstance()
        this.state = {
            serviceCategories: [],
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
    render() {
        return(
            <div>
                <h3>Service Categories</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.serviceCategories
                            .map(serviceCategory =>
                                <tr key={serviceCategory.id}>
                                    <td>{serviceCategory.title}</td>
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