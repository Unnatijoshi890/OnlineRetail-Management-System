import axios from "axios";

const BASE_URL = "http://localhost:8080";

class Registration {
  createUser(user) {
    return axios.post(`${BASE_URL}/createRegUser`, user);
  }

  loginUser(user) {
    return axios.post(`${BASE_URL}/userLogin`, user);
  }
}

export default new Registration();
