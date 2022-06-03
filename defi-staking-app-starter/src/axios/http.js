import axios from 'axios';

const _http = axios.create();
const interceptor = (config)=>{
    config.headers.Authorization = `Bearer xyz`;
    return config;
}

_http.interceptors.request.use(interceptor);

const http = {
    get: _http.get,
    put:_http.get,
    post:_http.post,
    delete:_http.delete
}

export default http;
