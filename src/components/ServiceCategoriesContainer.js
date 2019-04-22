import React from 'react'
import ServiceCategoryService from '../services/ServiceCategoryService'
import ServiceCategoriesList from './ServiceCategoriesList'
import UsersList from "./UsersList";
class ServiceCategoriesContainer extends React.Component {
    constructor(props) {
        super(props)
        this.serviceCategoryService = ServiceCategoryService.getInstance()
        this.state = {
            serviceCategories: [],
            name: 'New category',
            updateId: -1,
            recordsNumber: 10,
            page: 1
        }

        this.editServiceCategory = this.editServiceCategory.bind(this)
        this.deleteServiceCategory = this.deleteServiceCategory.bind(this)
        this.createServiceCategory = this.createServiceCategory.bind(this)
        this.updateServiceCategory = this.updateServiceCategory.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.getPageNumbers = this.getPageNumbers.bind(this)
        this.handleRecordsNumberChange = this.handleRecordsNumberChange.bind(this)
        this.handlePageChange = this.handlePageChange.bind(this)

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

    handlePageChange(event) {
        var newPage = this.state.page;
        if(event.target.innerHTML == "Previous") newPage = Math.max(newPage - 1, 1);
        else if(event.target.innerHTML == "Next") newPage = Math.min(newPage + 1,
            Math.ceil(this.state.serviceCategories.length/this.state.recordsNumber));
        else newPage = event.target.innerHTML;

        this.setState({
            page: newPage
        })
    }

    getPageNumbers() {
        var nums = [];
        for(var i = Math.max(1, this.state.page - 3); i < Math.min(this.state.page + 3,
            this.state.serviceCategories.length/this.state.recordsNumber + 1); i++) {
            nums.push(i)
        }
        return nums
    }

    handleRecordsNumberChange(event) {
        this.setState({
            recordsNumber: event.target.value != "All" ? event.target.value : this.state.users.length
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
                getPageNumbers = {this.getPageNumbers}
                handlePageChange = {this.handlePageChange}
                handleRecordsNumberChange = {this.handleRecordsNumberChange}
            />
        )
    }
}

export default ServiceCategoriesContainer