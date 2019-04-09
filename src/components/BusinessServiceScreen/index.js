import React from 'react'
import ServiceSelectSidebar from './serviceSelectSidebar'

class BusinessServiceScreen extends React.Component {
  state = {
    selectedServices: [],
    possibleServices: [],
    activeServiceId: null,
    query: ""
  }

  addService(service) {
    this.setState(s => ({
      selectedServices: [service, ...s.selectedServices]
    }))
  }

  removeService(id) {
    this.setState(s => {
      var activeId = s.activeServiceId
      if (activeId === id) activeId = null
      return {
        selectedServices: s.selectedServices.filter(s => s.id !== id),
        activeServiceId: activeId
      }
    })
  }

  selectService(id) {
    this.setState({
      activeServiceId: id
    })
    // TODO show questions
  }

  render() {
    return (
      <div className="row">
        <div className="col-3">
          <ServiceSelectSidebar
            query={this.state.query}
            setQuery={q => this.setState({query: q})}
            possibleServices={this.state.possibleServices}
            setPossibleServices={s => this.setState({possibleServices: s})}
            activeServiceId={this.state.activeServiceId}
            addService={this.addService.bind(this)}
            removeService={this.removeService.bind(this)}
            selectService={this.selectService.bind(this)}
            selectedServices={this.state.selectedServices} />
        </div>
        <div className="col-9">
          {`Answers for service ${this.state.activeServiceId}`}
        </div>
      </div>
    )
  }

}

export default BusinessServiceScreen
