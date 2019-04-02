import React from 'react'
import { withRouter } from 'react-router-dom';

import ProviderSearchService from '../../services/ProviderSearchService'
import ProviderResultsList from './providerResultsList'

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
        <ProviderResultsList providers={this.state.providers} />
      </div>
    )
  }
}

export default ServiceProviderSearch
