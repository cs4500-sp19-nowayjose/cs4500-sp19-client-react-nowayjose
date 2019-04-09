import React from 'react'
import Provider from './Provider'
import serviceCategories from '../../data/service-categories.mock.json'
import UserService from '../../services/UserService'

class ProviderContainer extends React.Component {
    constructor(props) {
        super(props)
        const userId = window.location.pathname.split('/')[2]
        this.state = {
            // provider: serviceCategories[0].serviceProviders[0],
            provider: {
                title: '',
                introduction: '',
                reviewsOfMe: [],
                ratingScores: [],
                reviews: [],
                faqs: []
            },
            userId: userId
        }
        this.userService = UserService.getInstance();
    }

    componentDidMount() {
        this.userService.findUserById(this.state.userId)
            .then(provider => this.setState({provider: provider}))
    }

    render() {
        return(
            <Provider
                provider={this.state.provider}/>
        )
    }
}

export default ProviderContainer;