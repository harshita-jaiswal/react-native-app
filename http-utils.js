import axios from 'axios';

const API_BASE_URL = `http://${apiContext.get('HOST')}:${apiContext.get('PORT')}/v1`;
module.exports = {
    setAuthHeader(value) {
        axios.defaults.headers.common.Authorization = value;
    },
    removeAuthHeader() {
        delete axios.defaults.headers.common.Authorization;
    },
    get(url, successCb, failureCb) {
        axios.get(`${API_BASE_URL}${url}`).then(successCb, failureCb);
    },
    post(url, requestDataObj, successCb, failureCb) {
        axios.post(`${API_BASE_URL}${url}`, requestDataObj).then(successCb, failureCb);
    },
    put(url, requestDataObj, successCb, failureCb) {
        axios.put(`${API_BASE_URL}${url}`, requestDataObj).then(successCb, failureCb);
    },
    delete(url, successCb, failureCb) {
        axios.delete(`${API_BASE_URL}${url}`).then(successCb, failureCb);
    }
};
