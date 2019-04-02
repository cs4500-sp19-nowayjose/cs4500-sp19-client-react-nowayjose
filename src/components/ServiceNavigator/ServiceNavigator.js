import React from 'react'
import ServiceCategoryList from './ServiceCategoryList'

const ServiceNavigator = ({ serviceCategories }) =>
    <div>
        <div className="row">
            <div className="col-3">
                <ServiceCategoryList
                    serviceCategories={serviceCategories} />
            </div>
        </div>
    </div>

export default ServiceNavigator