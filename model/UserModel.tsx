import apiClient from "../api/ClientApi"
import UserApi from "../api/UserApi"
import FormData from "form-data"

/**                   
 * Tokens
 */
export type UserTokens = {
  refreshToken: String,
  accessToken: String
}

// /**                   
//  * User CompleteInfo - for debug?
//  */
// export type User = {
//   _id: String,
//   email: String,
//   name: String,
//   password: String,
//   imageUrl: String,   // todo later
//   //tokens?
// }

/**
 * getting from server
 */
export type UserPreviewInfo = {
  _id: String,
  email: String,
  name: String,
  //  no password
  imageUrl: String,   // todo later
}

/**
 * sending to server
 */
export type UserRegInfo = {
  //  no _id
  email: String,
  name: String,
  password: String,
  imageUrl: String,   // todo later
}

/**
 * sending to server
 */
export type UserLoginInfo = {
  //  no _id
  email: String,
  //  no name
  password: String,
  //  no imageUrl
}



const getAllUsers = async () => {
  console.log("getAllUsers()");

  const res: any = await UserApi.getAllUsers();

  let data = Array<UserPreviewInfo>();

  if (res.data) {
    res.data.forEach((obj: any) => {
      // console.log("element: " + obj._id)
      const userInfo: UserPreviewInfo = {
        _id: obj._id,
        email: obj.email,
        name: obj.name,
        imageUrl: obj.imageUrl
      }
      data.push(userInfo);
    });
  }
  return data
};


const register = async (user: UserRegInfo) => {
  console.log("register")

  const data: UserRegInfo = {
    email: user.email,
    name: user.name,
    password: user.password, //unencrypted password/raw
    imageUrl: user.imageUrl
  }
  try {
    const res = UserApi.register(data);
    console.log("user registered successfully: " + user.email);
  } catch (err) {
    console.log("user registration failed: " + err);
  }
};


const login = async (user: UserLoginInfo) => {
  console.log("login")

  const data: UserLoginInfo = {
    email: user.email,
    password: user.password //unencrypted password/raw
  }
  try {
    const res = UserApi.login(data);
    console.log("user log in successfully: " + user.email);
  } catch (err) {
    console.log("user log in failed: " + err);
  }
};


// const uploadImage = async (imageURI: String) => {
//     var body = new FormData();
//     body.append('file', { name: "name", type: 'image/jpeg', uri: imageURI });
//     try {
//         const res = await UserApi.uploadImage(body)
//         if (!res.ok) {
//             console.log("save failed " + res.problem)
//         } else {
//             if (res.data) {
//                 const d: any = res.data
//                 console.log("----= url:" + d.url)
//                 return d.url
//             }
//         }
//     } catch (err) {
//         console.log("save failed " + err)
//     }
//     return ""
// }

export default {
  getAllUsers,
  register,
  login,
  //  uploadImage
}