export default class ProviderSearchService {
  static instance = null;
  static host = 'https://cs4500-sp19-nowayjose.herokuapp.com'
  static getInstance() {
      if(ProviderSearchService.instance === null) {
          ProviderSearchService.instance = new ProviderSearchService();
      }
      return this.instance;
  }
  findMatchingProviders = (id, query) =>
    fetch(`${ProviderSearchService.host}/api/provider-search/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(query)
    })
      .then(response => response.json());
}
