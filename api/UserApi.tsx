import apiClient from "./ClientApi";
import { User, UserLoginInfo, UserPreviewInfo, UserRegInfo } from "../model/UserModel"

const getAllUsers = async () => {
    return apiClient.get("/user");
};

const register = async (userJson: UserRegInfo) => {
    return apiClient.post("/auth/register", userJson);
};

const login = async (userJson: UserLoginInfo) => {
    return apiClient.post("/auth/login", userJson);
};

// const uploadImage = async (image: any) => {
//   return apiClient.post("/file/file", image);
// };

export default {
    getAllUsers,
    register,
    login
    // uploadImage
};