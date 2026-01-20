📄 Travel Website (React & MERN Stack)

live link -- https://travel-frontend-n3xr.onrender.com
Project Overview

This is a Travel Website built using React and MERN stack. The website allows users to explore travel destinations and provides basic user management functionality with role-based access.

Features Implemented
1. User Authentication

Signup & Login functionality.

Passwords are hashed and stored securely in MongoDB.

Logout functionality clears user session.

2. Role-Based Access

Admin users can:

View all registered users in a table.

View detailed information of each user.

Delete users.

Regular users can:

View their own profile.

Conditional Rendering:

The “All Users” button is shown only if the logged-in user is an Admin.

3. View Users

Admins can see a list of all users.

Click View to see individual user details.

4. Delete Users

Admins can delete users permanently.

Confirmation prompt is shown before deletion.

5. Frontend

Built with React and minimal Bootstrap styling.

Responsive layout for desktop view.


frontend/
  ├─ src/
  │   ├─ pages/          # Pages like AllUser, ViewUser, MyProfile
  │   ├─ backendRouting/ # API route configuration
  │   └─ App.jsx
backend/
  ├─ controllers/        # Backend logic for users
  ├─ models/             # Mongoose user model
  ├─ routes/             # Express routes
  └─ server.js           # Server entry point
  Technologies Used

Frontend: React, Axios, Bootstrap, react-router-dom, react-toastify, js-cookie

Backend: Node.js, Express.js, MongoDB, Mongoose, bcrypt, JWT

6. Notifications

Success and error messages implemented using react-toastify.  
