import React from 'react'
import { withRouter } from 'react-router-dom'
import ServiceList from './ServiceList';

import ServiceService from '../../services/ServiceService'

class SearchBar extends React.PureComponent {
  state = {
    services: [],
    searchValue: '',
    zipValue: '',
    isZipError: false,
    isSearchError: false,
  }

  componentDidMount() {
    ServiceService.getInstance()
      .findAllServices()
      .then(services => {
        this.setState({ services })
      })
  }

  onChange = (e, field) => {
    this.setState({ [field]: e.target.value })
  }

  isSearchValid() {
    return this.state.services.filter(service => (
      service.serviceName.toLowerCase() === this.state.searchValue.toLowerCase()
    ));
  }

  onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({ isZipError: false, isSearchError: false })
    const { zipValue } = this.state;
    const toWhichService = this.isSearchValid();
    let trigger = false;
    if (!toWhichService.length || !toWhichService[0].id) {
      this.setState({ isSearchError: true, searchValue: '' });
      trigger = true;
    }
    if (zipValue.length !== 0 && zipValue.length !== 5) {
      this.setState({ isZipError: true });
      trigger = true;
    }

    if (zipValue.length === 5  && isNaN(parseInt(zipValue))) {
      this.setState({ isZipError: true });
      trigger = true;
    }

    if (!trigger) this.props.history.push(`/providers/${toWhichService[0].id}`)
  }

  render() {
    let { className } = this.props;
    const { searchValue, zipValue, isZipError, isSearchError } = this.state;

    return (
      <div className={className}>
        <form onSubmit={this.onSubmit} class="needs-validation" noValidate>
          <div className="input-group input-group-lg">
            <input
              placeholder="What do you need help with?"
              type="search"
              style={{ width: '100px' }}
              onChange={(e) => this.onChange(e, 'searchValue')}
              value={searchValue}
              list="provider-search-list"
              className={`form-control ${ isSearchError ?'is-invalid' : ''}`}
              required
            />
            <span style={{ marginLeft: 0.5 }} />
            { searchValue.length > 0 && <ServiceList services={this.state.services} /> }
            <input
              placeholder="Zip code"
              type="text"
              onChange={(e) => this.onChange(e, 'zipValue')}
              value={zipValue}
              className={`form-control ${ isZipError ?'is-invalid' : ''}`}/>
            <div className="input-group-append">
              <button
                onClick={this.onSubmit}
                className="btn btn-primary"
                type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SearchBar);