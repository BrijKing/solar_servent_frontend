import api from "../utils/axiosInstance";

export default async function getAllCustomer(pageNo) {
  return await api.get(`/customer/getAll?pageNo=${pageNo}`);
}
