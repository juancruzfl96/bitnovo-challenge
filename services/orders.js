import axios from "axios";

const headers = { "X-Device-Id": "098f3102-bb2f-4666-a0b9-884381eca365" };
const API_BASE_URL = "https://payments.pre-bnvo.com/api/v1";

const getCripto = () =>
  axios.get(`${API_BASE_URL}/currencies`, {
    headers,
  });

const postOrders = (body) =>
  axios.post(`${API_BASE_URL}/orders/`, body, { headers });

const getOrderInfo = (identifier) =>
  axios.get(`${API_BASE_URL}/orders/info/${identifier}`, { headers });

const servicesCripto = {
  getCripto,
  postOrders,
  getOrderInfo,
};
export default servicesCripto;
