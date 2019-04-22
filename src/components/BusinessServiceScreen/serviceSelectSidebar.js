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
    let chooseButtonClass = isSelected => {
      if (isSelected) return "btn btn-primary"
      else return "btn btn-light"
    }
    let buttonStyle = {
      display: "block",
      width: "90%",
      margin: "5px auto"
    }
    let searchStyle = {
      width: "100%"
    }
    return (
      <div className="service-search">
        <h4>Search Services</h4>
        <input style={searchStyle} type="text" placeholder="Search services" value={this.props.query} onChange={(e) => this.handleSearchUpdate(e.target.value)}></input>
        <div className="service-search-results">
          {
            this.props.possibleServices.map(service => (
              <button style={buttonStyle} className="btn btn-light" onClick={() => this.props.addService(service)}>{service.serviceName}</button>
            ))
          }
        </div>
        <div className="selected-services">
          <h4>Selected Services</h4>
          {
            this.props.selectedServices.map(service => (
              <button style={buttonStyle} className={chooseButtonClass(service.id === this.props.activeServiceId)}>
                <span onClick={() => this.props.selectService(service.id)}>{service.serviceName}</span>
                <span onClick={() => this.props.removeService(service.id)}> x</span>
              </button>
            ))
          }
        </div>
      </div>
    )
  }
}

export default ServiceSelectSidebar
