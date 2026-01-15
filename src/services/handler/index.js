import api from '../../constants/index'
export const loginHandler = (username,password)=> api.post('/api/login/',{username,password})