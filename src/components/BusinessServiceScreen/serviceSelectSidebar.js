import React from 'react'
import ServiceService from '../../services/ServiceService'

class ServiceSelectSidebar extends React.Component {
  serviceService = ServiceService.getInstance();

  handleSearchUpdate(query) {
    this.props.setQuery(query)
    this.serviceService.searchServices(query)
      .then(s => this.props.setPossibleServices(s))
  }

  render() {
    return (
      <div className="service-search">
        <h4>Search Services</h4>
        <input type="text" placeholder="Search services" value={this.props.query} onChange={(e) => this.handleSearchUpdate(e.target.value)}></input>
        <div className="service-search-results">
          {
            this.props.possibleServices.map(service => (
              <div onClick={() => this.props.addService(service)}>{service.serviceName}</div>
            ))
          }
        </div>
        <div className="selected-services">
          <h4>Selected Services</h4>
          {
            // TODO highlight on selection
            this.props.selectedServices.map(service => (
              <div onClick={() => this.props.selectService(service.id)}>
                <span>{(() => {console.log(service); return service.serviceName})()}</span>
                <span onClick={() => this.props.removeService(service.id)}> x</span>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default ServiceSelectSidebar
