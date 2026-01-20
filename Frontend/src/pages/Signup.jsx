import axios from "axios";
import { useState } from "react";
import API from "../backendRouting/userRouting";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    userType: "user",
    adminKey: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Admin key check
    if (
      data.userType === "Admin" &&
      data.adminKey !== import.meta.env.VITE_adminkey
    ) {
      toast.error("Invalid Admin Key");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("userType", data.userType);
      if (data.userType === "Admin") {
        formData.append("adminKey", data.adminKey);
      }

      const response = await axios.post(API.signup.url, formData,
      );

      if (response.data.status === 200) {
        toast.success(response.data.message);
        navigate("/login"); // redirect to login
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-100">
        <div className="col-12 col-sm-10 col-md-6 col-lg-4 mx-auto">
          <div className="card signupcard p-4 shadow d-flex flex-column">
            <h2 className="text-center mb-1">Signup</h2>
            <form onSubmit={handleSubmit} className="signupform mt-1">
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="name"
                  value={data.name}
                  placeholder="Enter your Name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  onChange={handleChange}
                  type="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label me-2">ID Type</label>
                <div>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="userType"
                    value="user"
                    checked={data.userType === "user"}
                    className="radioOption me-1"
                  />
                  <label className="me-3">User</label>

                  <input
                    onChange={handleChange}
                    type="radio"
                    name="userType"
                    value="Admin"
                    checked={data.userType === "Admin"}
                    className="radioOption me-1"
                  />
                  <label>Admin</label>
                </div>
              </div>

              {data.userType === "Admin" && (
                <div className="mb-3">
                  <label className="form-label">Secret key</label>
                  <input
                    onChange={handleChange}
                    type="password"
                    className="form-control"
                    name="adminKey"
                    value={data.adminKey}
                    placeholder="Enter your secret key"
                    required
                  />
                </div>
              )}

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  className="form-control"
                  name="password"
                  value={data.password}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btnclass w-100">
                Sign Up
              </button>
            </form>

            <p className="text-center mt-3">
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
