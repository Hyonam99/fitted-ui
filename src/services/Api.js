import axios from 'axios';

export const fittedService = axios.create({
    baseURL: "https://fitted-portal-api.herokuapp.com/api/v1/bank/"
})

export const getAllBanks = async () => {
    const response = fittedService.get('/banks')
    return (await response).data
}


export const validateBank = async (payload) => {
    const response = fittedService.post('/resolveAccount', payload)
    return (await response).data
}
