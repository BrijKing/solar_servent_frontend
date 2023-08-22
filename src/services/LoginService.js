import api from "../utils/axiosInstance";

export default async function loginUserApi(data) {
  return await api.post("/auth/user/token", data);
}
