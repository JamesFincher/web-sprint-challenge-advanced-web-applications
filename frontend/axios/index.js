import * as URI from "../components/URI";
import axios from "axios";

export const axiosGetWithAuth = (endpoint) => {
  return axios.get(endpoint, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};

export const axiosPutWithAuth = (endpoint, data) => {
  return axios.put(endpoint, data, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};

export const axiosPostWithAuth = (endpoint, data) => {
  return axios.post(endpoint, data, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};

export const axiosDeleteWithAuth = (endpoint) => {
  return axios.delete(endpoint, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};

export const axiosLogin = (endpoint, data) => {
  const { username, password } = JSON.parse(data);

  return axios.post(endpoint, { username, password });
};
