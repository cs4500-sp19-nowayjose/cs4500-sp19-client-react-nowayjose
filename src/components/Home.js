import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import ServiceCategoryNavigator from './ServiceCategoryNavigationTabs/ServiceCategoryNavigator'
import serviceCategories from '../data/service-categories.mock.json'

const Home = ({history}) =>
    <div>
        <div className="row">
            <div className="col-8">
                <h1>
                    Find professionals near you.
                </h1>
                <SearchBar history={history}/>
            </div>
        </div>

        <br/>
        <br/>
        <br/>
        <div>
            {/*<ServiceCategoryPills/>*/}
        </div>
        <br/>
        <br/>
        <br/>
        <ServiceCategoryNavigator serviceCategories={serviceCategories}/>
    </div>

export default Home