const axios = require('axios');

const getSonyTvIp = () => {
    return localStorage.getItem('sony-tv-ip' || '192.168.2.66') ;
}

const getIRCCUrl = () => `http://${getSonyTvIp()}/sony/ircc`;
const getSystemInfoUrl = () => `http://${getSonyTvIp()}/sony/system`;
const IRCC_headers = {
    'POST': '/sony/ircc HTTP/1.1',
    'Accept': '*/*',
    'Content-Type': 'application/xml; charset=utf-8',
    'SOAPACTION': '"urn:schemas-sony-com:service:IRCC:1#X_SendIRCC"',
    'X-Auth-PSK': 1234
}

const generateXMLString = irccCode => {
    return  `
        <s:Envelope 
            xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"
            s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
            <s:Body>
                <u:X_SendIRCC xmlns:u="urn:schemas-sony-com:service:IRCC:1">
                <IRCCCode>${irccCode}</IRCCCode>
                </u:X_SendIRCC>
            </s:Body>
        </s:Envelope>
  `;
};

const sendIRCCCommand = async command => {
    const data = generateXMLString(command);
    const config = {
        url: getIRCCUrl(),
        method: 'POST',
        data,
        headers: { ...IRCC_headers },
    };
    try {
        return await axios(config);
    } catch (error) {
        console.error('Oops, there was an error:', error);
        return { success: false, errorEnum: 'NETWORK_ERROR' }
    }
}

const isTurnedOn = async () => {
    const config = {
        url: getSystemInfoUrl(),
        method: 'POST',
        data: JSON.stringify({
            "method": "getPowerStatus",
            "id": 50,
            "params": [],
            "version": "1.0"
        })
    }
    try {
        const response = await axios(config);
        console.log(response.data.result[0].status);
        return response.data.result[0].status === 'active';

    } catch (error) {
        console.error('Oops, cannot fetch system information:', error);
        return { success: false, errorEnum: 'NETWORK_ERROR' }
    }
}

const pingTv = async () => {
    try {
         const response = await isTurnedOn();
         return response.errorEnum ? false : true;
    } catch (error) {
        return false;
    }
 }

module.exports = {
    sendIRCCCommand,
    isTurnedOn,
    pingTv
}