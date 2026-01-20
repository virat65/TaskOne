import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../backendRouting/userRouting";

import cookie from "js-cookie"
import { useNavigate } from "react-router-dom";
const MyProfile = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null);
const getcookies = cookie.get("userInfo");
  const getProfile = async () => {
    try {
      const availableCookie = getcookies ? JSON.parse(getcookies) : null;
console.log(availableCookie,"coookiiie")
      const response = await axios.post(`${API.finduserbyid.url}/${availableCookie._id}`);

      setUser(response.data.body);
    } catch (error) {
      console.log("Error fetching profile", error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card ">
            <div className="card-header bg-primary text-white text-center">
              <h4>My Profile</h4>
            </div>

            <div className="card-body">
              {user ? (
                <>
                  <div className="mb-3">
                    <strong>Name:</strong>
                    <p>{user.name}</p>
                  </div>

                  <div className="mb-3">
                    <strong>Email:</strong>
                    <p>{user.email}</p>
                  </div>

                  <div className="mb-3">
                    <strong>Age:</strong>
                    <p>{user.age}</p>
                  </div>

                  <div className="mb-3">
                    <strong>Role:</strong>
                    <p>{user.userType}</p>
                  </div>

                
                </>
              ) : (
                <p className="text-center">Loading profile...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
