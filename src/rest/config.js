require('dotenv').config();
const { VUE_APP_HOST, VUE_APP_PROTOCOL } = process.env;
export const baseUrl = `${VUE_APP_PROTOCOL}://${VUE_APP_HOST}`
export const getIrccRequestConfig = code => ({
    method: 'post',
    url: `${baseUrl}/ircc`,
    data: JSON.stringify({ code }),
    headers: { 'content-type': 'application/json' }
});
