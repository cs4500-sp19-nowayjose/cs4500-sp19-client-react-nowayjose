import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import BusinessForm from '../components/BusinessScreen/businessForm';
import UserService from '../services/UserService';

export class BusinessScreen extends Component {
  state = { paymentMethod: '' }

  componentDidMount() {
    this.fetchProviderInfo();
  }

  fetchProviderInfo = async () => {
    const user = localStorage.getItem("@user");
    const info = await UserService.getInstance().getProviderDetail(user);
    if (!info) {
      alert('No permission to view this page');
      this.props.history.goBack();
      return;
    }
    this.setState({ ...info, serviceQuestionAnswers: null, yearsInBusiness: 2019 - info.yearsInBusiness, original: info })
  }

  onClickSave = async () => {
    const info = this.checkInputsForUpdate();
    UserService
      .getInstance()
      .updateProviderInfo(info)
      .then(updated => {
        this.setState({ ...updated, serviceQuestionAnswers: null, yearsInBusiness: 2019 - info.yearsInBusiness, original: updated })
      });
  }

  checkInputsForUpdate() {
    const info = JSON.parse(JSON.stringify(this.state));
    if (this.state.yearsInBusiness > 2019) {
      info.yearsInBusiness = this.state.original.yearsInBusiness;
    }

    if (this.state.email && !this.state.email.includes('@')) {
      info.email = this.state.original.email;
    }

    if (this.state.zipCode && this.state.zipCode.length !== 5) {
      info.zipCode = this.state.original.zipCode;
    }

    info.paymentMethod = (this.state.paymentMethod || "").split(",").filter(v => v.length).join(",");
    delete info.original;
    return info;
  }

  onChangeValue = (field, e) => {
    if (!e.target) return;
    let { value } = e.target;
    value = this.validateInput(field, value);
    this.setState({ [field]: value });

  }

  validateInput(field, input) {
    switch (field) {
      case 'yearsInBusiness':
        if (!this.isNumber(input)) return this.state.yearsInBusiness;
        return input;
      case 'employees':
        if (!this.isNumber(input)) return this.state.employees;
        return input;
      case 'zipCode':
      if (!this.isNumber(input)) return this.state.zipCode;
      return input;
      default:
        return input;
    }
  } 

  isNumber(input) {
    return input.length === 0 || /^\d+$/.test(input);
  }

  onChangePaymentMethod = (e, option) => {
    const { paymentMethod } = this.state;
    if (paymentMethod === null) {
      this.setState({ paymentMethod: option });
    } else if (paymentMethod.toLowerCase().includes(option.toLowerCase())) {
      let remaining = paymentMethod.split(",");
      remaining = remaining.filter(v => v.length && v.toLowerCase() !== option.toLowerCase());
      this.setState({ paymentMethod: remaining.join(",")})
    } else {
      this.setState(prevState => ({
        paymentMethod: `${prevState.paymentMethod},${option}`
      }))
    }
  }
    

  render() {
    console.log(this.state);
    return (
      <div>
        <BusinessForm 
          data={this.state} 
          onSave={this.onClickSave} 
          onChangeValue={this.onChangeValue} 
          onChangePaymentMethod={this.onChangePaymentMethod}
        />
      </div>
    )
  }
}

export default withRouter(BusinessScreen)
