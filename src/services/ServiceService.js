export default class ServiceService {
    static instance = null;
    static host = "https://cs4500-sp19-nowayjose.herokuapp.com"
    // static host = "http://localhost:8080"
    static getInstance() {
        if(ServiceService.instance === null) {
            ServiceService.instance = new ServiceService()
        }
        return this.instance
    }

    searchServices = query =>
      fetch(`${ServiceService.host}/api/services-search?q=${query}`)
      .then(response => response.json())

    findServiceById = serviceId =>
        fetch(`https://cs4500-sp19-nowayjose.herokuapp.com/api/services/${serviceId}`)
            .then(response => response.json())
    findAllServices = () =>
        fetch("https://cs4500-sp19-nowayjose.herokuapp.com/api/services")
            .then(response => response.json())

    createService(service) {
        return fetch('https://cs4500-sp19-nowayjose.herokuapp.com/api/services', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(response => response.json())
    }

    deleteService(service) {
        return fetch('https://cs4500-sp19-nowayjose.herokuapp.com/api/services/' + service.id, {
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    updateService(service) {
        return fetch('https://cs4500-sp19-nowayjose.herokuapp.com/api/services/' + service.id, {
            method: 'put',
            body: JSON.stringify(service),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(function (response) {
                return response.json();
            });
    }
}
