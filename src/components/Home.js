import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import ServiceCategoryPills from './ServiceCategoryPills/ServiceCategoryPills'

const Home = ({history, pillServiceCategories}) =>
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
            <ServiceCategoryPills serviceCategories={pillServiceCategories}/>
        </div>
        <br/>
        <br/>
        <br/>
        {/*<ServiceTabNavigator*/}
            {/*serviceCategories={serviceCategories}/>*/}
    </div>

export default Home