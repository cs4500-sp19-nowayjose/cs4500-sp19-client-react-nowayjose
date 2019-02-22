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
}