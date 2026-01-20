import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../backendRouting/userRouting.js";
import { useNavigate } from "react-router-dom";

const Allluser = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()
  const getData = async () => {

    try {
      console.log("hi from get all users");
      const response = await axios.post(API.findallusers.url);
      setUsers(response.data.body);
      console.log(response.data.body, "users");
    } catch (error) {
      console.log("Error in getData", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="user-table-wrapper pt-5">
        <div className="top-usertable d-flex justify-content-evenly mb-2">
          <h2>User Table</h2>

          <div className="d-flex align-items-center gap-2">
            <input
              type="text"
              id="username"
              className="form-control"
              style={{ width: "250px" }}
              placeholder="🔍 Search by name..."
            />
          </div>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr border>
              <th>S.no</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>User View</th>
              <th>User Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.length > 0 ? (
              users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => navigate(`viewuser/${user._id}`)}
                    >
                      View
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => navigate(`deleteuser/${user._id}`)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allluser;
