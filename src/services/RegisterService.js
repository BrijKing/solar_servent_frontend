import api from "../utils/axiosInstance";

export default async function registerUserApi(data) {
  return await api.post("/auth/user/register", data);
}
