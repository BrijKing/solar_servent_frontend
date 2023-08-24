import api from "../utils/axiosInstance";

export async function getAllCustomerApi(pageNo) {
  return await api.get(`/customer/getAll?pageNo=${pageNo}`);
}

export async function searchCustomerApi(email) {
  return await api.get(`/customer/getCustomer/${email}`);
}

export async function addCustomerForRevivew(data) {
  return await api.post(`/customer/forApprovement/add`, data);
}
