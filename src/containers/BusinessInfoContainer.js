import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import BusinessForm from '../components/BusinessScreen/businessForm';
import UserService from '../services/UserService';

export class BusinessScreen extends Component {
  state = {
    info: {},
  }

  componentDidMount() {
    this.fetchProviderInfo();
  }

  fetchProviderInfo = async () => {
    const user = localStorage.getItem("@user");
    const info = await  UserService.getInstance().getProviderDetail(user);
    if (!info) {
      alert('No permission to view this page');
      this.props.history.goBack();
    }
    this.setState({ info })
  }

  render() {
    return (
      <div>
        <BusinessForm data={this.state.info} />
      </div>
    )
  }
}

export default withRouter(BusinessScreen)
