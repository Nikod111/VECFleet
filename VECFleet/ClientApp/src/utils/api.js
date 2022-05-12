import axios from 'axios';

const URL = "https://localhost:44343/api/Vehiculo"

export const getVehiculo = async () => {
    return axios.get(`${URL}/Get`)
}

export const createVehiculo = async (data) => {
    return axios.post(`${URL}/Create`, data)
}

export const deleteVehiculo = async (id) => {
    return axios.delete(`${URL}/Delete/${id}`)
}

export const updateVehiculo = async (data) => {
    return axios.put(`${URL}/Update`, data)
}