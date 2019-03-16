
const CATEGORY_API = 'http://cs4500-sp19-nowayjose.herokuapp.com/api/categories/'
export default class ServiceCategoryService {
    static instance = null;
    static getInstance() {
        if(ServiceCategoryService.instance === null) {
            ServiceCategoryService.instance = new ServiceCategoryService()
        }
        return this.instance
    }
    findServiceCategoryById = categoryId =>
        fetch(CATEGORY_API + `${categoryId}`)
            .then(response => {

                response.json()
            })
    findAllServiceCategories = () =>
        fetch(CATEGORY_API)
            .then(response => {
                return response.json()})

    createServiceCategory(serviceCategory) {
        return fetch(CATEGORY_API, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceCategory)
        })
            .then(response => response.json())
    }

    deleteServiceCategory(serviceCategory) {
        return fetch(CATEGORY_API + serviceCategory.id, {
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    updateServiceCategory(serviceCategory) {
        return fetch(CATEGORY_API + serviceCategory.id, {
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