import Instance, { TAxios } from 'network/Instance';

class Network extends Instance {
  constructor(baseURL: string, timeout = 30000) {
    super(baseURL, timeout);
  }

  /* USERs */
  async fetchUsers(): TAxios {
    return this.send('get', `/users`);
  }

  /* PHOTOS */
  async fetchPhotos(): TAxios {
    return this.send('get', `/photos`);
  }
}

// const { REACT_APP_BACKEND_URL } = process.env;
// const baseUrl = REACT_APP_BACKEND_URL || window.location.origin;
const baseUrl = 'https://jsonplaceholder.typicode.com';
const network = new Network(baseUrl);

export default network;
