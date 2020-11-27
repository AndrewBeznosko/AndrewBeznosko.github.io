import axios from 'axios';

const client = axios.create({
    baseURL: process.env.VUE_APP_CRYPTOCOMPARE_API_BASE_URL,
    params: {
        api_key: process.env.VUE_APP_CRYPTOCOMPARE_API_KEY,
        extraParams: 'my_crypto'
    }
});

export default {
    pricemultifull(params) {
        return client.get(`pricemultifull`, params);
    },
    histohour(params) {
        return client.get(`v2/histohour`, params);
    },
    topTotalvolfull(params) {
        return client.get(`top/totalvolfull`, params);
    },
};
