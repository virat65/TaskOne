import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import API from "../backendRouting/userRouting";

const ViewUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const res = await axios.post(`${API.finduserbyid.url}/${id}`);
      console.log(res,"Resss")
      setUser(res.data.body);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return <p>Loading user...</p>;
  }

  return (
    <div style={{ width: "400px", margin: "40px auto" }}>
      <h3>View User</h3>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>

      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default ViewUser;
