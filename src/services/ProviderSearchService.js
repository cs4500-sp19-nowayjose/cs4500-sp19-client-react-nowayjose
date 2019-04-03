export default class ProviderSearchService {
  static instance = null;
  static host = 'https://cs4500-sp19-nowayjose.herokuapp.com'
  static getInstance() {
      if(ProviderSearchService.instance === null) {
          ProviderSearchService.instance = new ProviderSearchService();
      }
      return this.instance;
  }
  findAllProviders = () =>
    fetch(`${ProviderSearchService.host}/api/service-provider`)
    .then(response => response.json())

  findMatchingProviders = query =>
    fetch(`${ProviderSearchService.host}/api/service-provider/filter`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(query)
    })
      .then(response => response.json());
  
  searchProviders = (zip, title) => 
    fetch(`${ProviderSearchService.host}/api/service-provider/filter?title=${title}&zip=${zip}`)
      .then(response => response.json())
}
