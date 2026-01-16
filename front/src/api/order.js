import api from './axios'

export const addOrder = () => {
    api.post('/order')
}