
const backendpath = import.meta.env.VITE_backendUrl || "http://localhost:3000";
console.log(backendpath, "backendpath");
const API = {
  signup: {
    url: `${backendpath}/user/signup`,
    method: "post",
  },
  login: {
    url: `${backendpath}/user/login`,
    method: "post",
  },
  findallusers: {
    url: `${backendpath}/user/findallusers`,
    method: "get",
  },
  finduserbyid: {
    url: `${backendpath}/user/findbyid`,
    method: "get",
  },
  deleteuserbyid: {
    url: `${backendpath}/user/deleteuser`,
    method: "delete",
  },
  updateuser: {
    url: `${backendpath}/user/updateUser`,
    method: "put",
  },
};
export default API;
