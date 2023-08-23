import api from "../utils/axiosInstance";

export async function getAllEmployeeApi(pageNo) {
  return await api.get(`/customer/getAll?pageNo=${pageNo}`);
}

export async function searchEmployeeApi(email) {
  return await api.get(`/customer/getCustomer/${email}`);
}
