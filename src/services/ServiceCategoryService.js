export default class ServiceCategoryService {
    static instance = null;
    static getInstance() {
        if(ServiceCategoryService.instance === null) {
            ServiceCategoryService.instance = new ServiceCategoryService()
        }
        return this.instance
    }
    findServiceCategoryById = categoryId =>
        fetch(`http://cs4500-sp19-nowayjose.herokuapp.com/api/service-categories/${categoryId}`)
            .then(response => response.json())
    findAllServiceCategories = () =>
        fetch("http://cs4500-sp19-nowayjose.herokuapp.com/api/service-categories")
            .then(response => response.json())

    createServiceCategory(serviceCategory) {
        return fetch('http://cs4500-sp19-nowayjose.herokuapp.com/api/service-categories', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceCategory)
        })
            .then(response => response.json())
    }

    deleteServiceCategory(serviceCategory) {
        return fetch('http://cs4500-sp19-nowayjose.herokuapp.com/api/service-categories/' + serviceCategory.id, {
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    updateServiceCategory(serviceCategory) {
        return fetch('http://cs4500-sp19-nowayjose.herokuapp.com/api/service-categories/' + serviceCategory.id, {
            method: 'put',
            body: JSON.stringify(serviceCategory),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(function (response) {
                return response.json();
            });
    }
}