import React from 'react'
import ServiceCategoryService from '../services/ServiceCategoryService'
import ServiceCategoriesList from './ServiceCategoriesList'
class ServiceCategoriesContainer extends React.Component {
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


    render() {
        return(
            <ServiceCategoriesList
                serviceCategories={this.state.serviceCategories}
                name={this.state.name}
                handleNameChange={this.handleNameChange}
                createServiceCategory={this.createServiceCategory}
                editServiceCategory={this.editServiceCategory}
                updateServiceCategory={this.updateServiceCategory}
                deleteServiceCategory={this.deleteServiceCategory}
            />
        )
    }
}

export default ServiceCategoriesContainer