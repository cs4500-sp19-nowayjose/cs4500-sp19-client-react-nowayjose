import React from 'react'
import ProviderSearchService from '../../services/ProviderSearchService'
import ProviderResultsList from './providerResultsList'

class ServiceProviderSearch extends React.Component {
  constructor(props) {
    super(props)
    this.providerSearchService = ProviderSearchService.getInstance()
    this.serviceId = props.serviceId
    this.state = {
      providers: [{
        id: 1,
        firstName: "First",
        lastName: "Last",
        starRating: 4.2
      }]
    }
  }

  componentDidMount() {
    // this.providerSearchService
    //   .findAllProvidersForServiceId(this.serviceId)
    //   .then(providers => this.setState({providers: providers}))
  }

  render() {
    return (
      <div>
        <ProviderResultsList providers={this.state.providers} />
      </div>
    )
  }
}

export default ServiceProviderSearch
