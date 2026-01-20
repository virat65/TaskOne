import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../backendRouting/userRouting"; // make sure API is imported

const DeleteUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${API.deleteuserbyid.url}/${id}`);
      if (response.data.status === 200) {
        toast.success(response.data.message);
        navigate("/alluser"); // Redirect to All Users page
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.log("Error deleting user:", error);
      toast.error("Server error. Try again later.");
    }
  };

  const handleCancel = () => {
    navigate("/alluser"); // Go back to All Users page
  };

  return (
    <div style={{ width: "400px", margin: "50px auto", textAlign: "center" }}>
      <h3>Are you sure you want to delete this user?</h3>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handleDelete}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Yes, Delete
        </button>
        <button
          onClick={handleCancel}
          style={{
            padding: "10px 20px",
            backgroundColor: "gray",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteUser;
