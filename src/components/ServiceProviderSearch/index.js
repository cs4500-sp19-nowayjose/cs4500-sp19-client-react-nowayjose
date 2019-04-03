import React from 'react'
import ProviderSearchService from '../../services/ProviderSearchService'
import ProviderResultsList from './providerResultsList'
import SearchBar from '../SearchBar/SearchBar'

class ServiceProviderSearch extends React.Component {
  providerSearchService = ProviderSearchService.getInstance()
  state = {
    providers: [],
    providerSearch: '',
    zipSearch: '',
  }

  componentDidMount() {
    this.providerSearchService
      .findAllProvidersForServiceId(this.props.serviceId || '')
      .then(providers => this.setState({providers: providers}))
  }

  onSubmit = async (e) => {
    if (e) e.preventDefault();
    const data = await this.providerSearchService.searchProviders(this.state.zipSearch, this.state.providerSearch)
    this.setState({ providerSearch: '', zipSearch: '', providers: data });
  }

  onChange = (e, target) => {
    this.setState({ [`${target}Search`]: e.target.value });
  }

  render() {
    const { providerSearch, zipSearch } = this.state;
    return (
      <div>
        <SearchBar
          onSubmit={this.onSubmit} 
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          providerValue={providerSearch}
          zipValue={zipSearch}
        />
        <ProviderResultsList providers={this.state.providers} />
      </div>
    )
  }
}

export default ServiceProviderSearch
