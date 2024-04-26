import axios from 'axios'

const URL = "http://192.168.56.1:9006/api/v1"

export async function getData(endPoint = "", params = {}, header = {}) {
    try {
        const respons = await axios.get(
            URL + endPoint,
            params,
            header
        );
        return respons.data;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export async function postData(endPoint = "", requestBody = {}, header = {}) {
    try {
        const respons = await axios.post(
            URL + endPoint, 
            requestBody, 
            header
        );
        return respons;
    } catch (e) {
        console.log(e);
        return null;
    }
}