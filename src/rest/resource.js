import axios from 'axios';
import { baseUrl } from './config';

export const isTurnedOn = async () => {
    try {
        return await axios(`${baseUrl}/power`)
    } catch (error) {
        console.error('Oops, cannot fetch system information:', error)
        return error;
    }
}

export const pingTv = async () => {
    try {
        const response = await isTurnedOn()
        return response.errorEnum ? false : true
    } catch (error) {
        return false
    }
}

export const sendIRCCCommand = async code => {
    const config = {
        method: 'post',
        url: `${baseUrl}/ircc`,
        data: JSON.stringify({ code }),
        headers: { 'content-type': 'application/json' }
    };
    try {
        const response = await axios(config);
        return response.errorEnum ? false : true
    } catch (error) {
        return false
    }
}
