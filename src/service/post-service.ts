import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com";

class PostService {
  getAllPosts() {
    return axios.get(`${API_URL}/posts`);
  }
}

export default new PostService();
