import axios from "axios";

const BASE_URL = "https://67be1434321b883e790f0bbd.mockapi.io/api/";

const api = axios.create({
  baseURL: BASE_URL,
});

// 1. il facem pe resourceApi sa fie o componenta reutilizabila
const resourceApi = (resource) => {
  return {
    getAll: () => api.get(`/${resource}`),
    get: (id) => api.get(`/${resource}/${id}`),
    create: (data) => api.post(`/${resource}`, data),
    update: (id, data) => api.put(`/${resource}/${id}`, data),
    delete: (id) => api.delete(`/${resource}/${id}`),
  };
};

const tutorsApi = resourceApi("tutors");
const citiesApi = resourceApi("cities");

export { tutorsApi, citiesApi };
