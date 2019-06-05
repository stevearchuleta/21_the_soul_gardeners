import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  register: function(userData) {
    return axios.post("api/users/register", userData);
  },
  login: function(userData) {
    return axios.post("api/users/login", userData);
  },
  getEtWater: function(region) {
    return axios.get(`api/etwater/${region}`);
  },
  getPoem: function(poemData) {
    return axios.get("api/inspirations")
  }
};
