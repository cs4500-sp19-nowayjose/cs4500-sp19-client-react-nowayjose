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
      
        this.compareByViewCount = this.compareByViewCount.bind(this);
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
                            serviceCategories[count].services = services.sort(this.compareByViewCount)
                            count = count + 1
                            if (count == serviceCategories.length) {
                                this.setState({serviceCategories : serviceCategories})
                            }
                            
                    })
                }
            }
        )
    }
    compareByViewCount(a, b) {
        if (a.count > b.count) return 1;
        if (b.count > a.count) return -1;
        return 0;
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