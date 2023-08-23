import api from "../utils/axiosInstance";

export async function getAllEmployeeApi(pageNo) {
  return await api.get(`/employee/getAll?pageNo=${pageNo}`);
}

export async function searchEmployeeApi(email) {
  return await api.get(`/employee/findUser/${email}`);
}
