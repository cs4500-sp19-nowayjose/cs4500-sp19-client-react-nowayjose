import React from 'react'

const ServiceCards = ({services}) =>
    <div className="row">
        {
            services.map(service =>
                <div key={service.id}
                     className="card no-border col-6">
                    <img src={service.imageUrl == null ? "https://picsum.photos/300/200" : service.imageUrl}
                         className="card-img-top"/>
                    <div className="card-body">
                        <p className="card-text">
                            <a href="/providers"> {service.serviceName}</a>
                        </p>
                    </div>
                </div>
            )
        }
    </div>

export default ServiceCards