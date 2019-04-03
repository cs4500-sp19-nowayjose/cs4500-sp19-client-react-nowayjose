import React from 'react'
import ProviderSearchService from '../../services/ProviderSearchService'
import ProviderResultsList from './providerResultsList'
import SearchBar from '../SearchBar/SearchBar'

class ServiceProviderSearch extends React.Component {
  constructor(props) {
    super(props)
    this.providerSearchService = ProviderSearchService.getInstance()
    this.serviceId = props.serviceId
    this.state = {
      providers: []
    }
  }

  componentDidMount() {
    this.providerSearchService
      .findAllProvidersForServiceId(this.props.serviceId || '')
      .then(providers => this.setState({providers: providers}))
  }

  render() {
    return (
      <div>
        <SearchBar history={this.props.history} />
        <ProviderResultsList providers={this.state.providers} />
      </div>
    )
  }
}

export default ServiceProviderSearch
