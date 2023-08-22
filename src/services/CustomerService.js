import api from "../utils/axiosInstance";

export async function getAllCustomer(pageNo) {
  return await api.get(`/customer/getAll?pageNo=${pageNo}`);
}

export async function searchCustomer(email) {
  return await api.get(`/customer/getCustomer/${email}`);
}
