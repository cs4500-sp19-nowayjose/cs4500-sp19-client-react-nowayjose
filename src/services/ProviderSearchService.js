export default class ProviderSearchService {
  static instance = null;
  static host = 'https://cs4500-sp19-nowayjose.herokuapp.com'
  static getInstance() {
      if(ProviderSearchService.instance === null) {
          ProviderSearchService.instance = new ProviderSearchService();
      }
      return this.instance;
  }
  findAllProvidersForServiceId = id =>
    fetch(`${ProviderSearchService.host}/api/provider-search/${id}`)
      .then(response => response.json());
  
  searchProviders = (zip, title) => 
    fetch(`${ProviderSearchService.host}/api/service-provider/filter?title=${title}&zip=${zip}`)
      .then(response => response.json())
}
