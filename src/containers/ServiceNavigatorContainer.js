import React from 'react'
import ServiceCategoryService from '../services/ServiceCategoryService'
import ServiceNavigator from '../components/ServiceNavigator/ServiceNavigator';

class ServiceNavigatorContainer extends React.Component {
    constructor(props) {
        super(props)
        this.serviceCategoryService = ServiceCategoryService.getInstance()
        this.state = {
            serviceCategories: [],
        }
    }
    componentDidMount() {
        this.serviceCategoryService
            .findAllServiceCategories()
            .then(serviceCategories => {
                var count = 0; 
                for(var i = 0; i<serviceCategories.length; i++) { 
                    var category = serviceCategories[i]
                    this.serviceCategoryService.findAllServicesForCategory(category.id)
                        .then(services => {
                            serviceCategories[count].services = services
                            count = count + 1
                            if (count == serviceCategories.length) {
                                this.setState({serviceCategories : serviceCategories})
                            }
                            
                    })
                }
            }
        )
    }

    render() {
        return (
            <ServiceNavigator
                serviceCategories={this.state.serviceCategories}
            />
        )
    }
}

export default ServiceNavigatorContainer