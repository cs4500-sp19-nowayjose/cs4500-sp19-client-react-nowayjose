import React from 'react'
import ServiceCategoryList from './ServiceCategoryList'
import ServiceCategorySectionList from './ServiceCategorySectionList'

const ServiceNavigator = ({ serviceCategories }) =>
    <div>
        <div className="row">
            <div className="col-3">
                <ServiceCategoryList
                    serviceCategories={serviceCategories} />
            </div>
            <div className="col-9">
                <ServiceCategorySectionList
                    serviceCategories={serviceCategories} />
            </div>
        </div>
    </div>

export default ServiceNavigator