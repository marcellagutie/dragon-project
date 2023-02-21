import axios from "axios";
export const BASE_URL =  "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon";

export class DragonService {
  public getDragon() {
    return axios.get(`${BASE_URL}`);
  }

  public getDragonById(id: string) {
    return axios.get(`${BASE_URL}/${id}`);
  }

  public postDragon({ ...data }) {
    return axios.post(`${BASE_URL}`, data);
  }

  public putDragon(id: string, { ...data }) {
    return axios.put(`${BASE_URL}/${id}`, data);
  }

  public deleteDragon(id: string) {
    return axios.delete(`${BASE_URL}/${id}`);
  }
}
