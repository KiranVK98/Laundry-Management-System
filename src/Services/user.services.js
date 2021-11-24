import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + '');
  }

  getDashUser() {
    return axios.get(API_URL + 'DashUser', { headers: authHeader() });
  }

  getDashAdmin() {
    return axios.get(API_URL + 'DashAdmin', { headers: authHeader() });
  }

  // getAdminBoard() {
  //   return axios.get(API_URL + 'admin', { headers: authHeader() });
  // }
}

export default new UserService();