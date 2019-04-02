import React, { Component } from 'react'

import { Link, withRouter} from 'react-router-dom'

/**
 * Landing screen is the header.
 */
export class LandingScreen extends Component {
  routes = [
    { to: '/home', text: 'Home', },
    { to: '/services', text: 'Services' },
    { to: '/providers', text: 'Providers', },
    { to: '/admin', text: 'Admin', },
  ]

  renderHeader() {
      return (
        <div className="d-flex flex-row">
          {
            this.routes.map(({ to, text }) => (
              <div className="header-item">
                <Link to={to}>{text}</Link>
              </div>
            ))
          }
        </div>
      )
    }

  render() {
    return (
      this.renderHeader()
    )
  }
}

export default withRouter(LandingScreen)
