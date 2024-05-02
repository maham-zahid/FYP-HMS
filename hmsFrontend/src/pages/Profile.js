import React, { useState } from "react";
import axios from "axios";
import signValidation from "./SignUpValidation";

export default function ProfilePage() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        curpassword: "",
        password: "",
        confirmpassword: "",
    });

    const [errors, setErrors] = useState({});

    const fetchUserDetails = async () => {
      try {
        const userEmail = localStorage.getItem('userEmail');
        if (!userEmail) {
          // Handle case where email is not found
          return;
        }
    
        const response = await fetch(`http://localhost:8081/api/users/${userEmail}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const userData = await response.json();
        console.log('User Data:', userData);
    
        setValues(prevValues => ({
          ...prevValues,
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
        }));
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error
      }
    };
    
  
  

  const handleSubmit = async (event) => {
  event.preventDefault(); // Prevent default form submission
  
  const validationErrors = signValidation(values);
  setErrors(validationErrors);

  if (Object.values(validationErrors).every((error) => error === "")) {
    try {
      const response = await axios.post("http://localhost:8081/Profile", values);
      console.log(response.data);
      window.alert("Successfully saved changes");
    } catch (error) {
      window.alert("Error: Something went wrong");
      console.log("Error:", error.response.data);
    }
  }
};


  return (
    <div
      className="reset-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        border: "25px solid #187A85",
      }}
    >
      <div className="main-body">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div
                  className="d-flex flex-column align-items-center text-center"
                  style={{ width: "300px" }}
                >
                  <img
                    src="b.jpeg"
                    alt="Admin"
                    className="rounded-circle p-1 "
                    width={110}
                    style={{ backgroundColor: "#187A85", marginLeft: "-100px" }}
                  />
                  <div className="mt-3">
                    <h4 style={{ color: "#187A85", marginLeft: "-100px" }}>
                      Ali Ahmed
                    </h4>
                    <div>
                      <input style={{marginBottom: "15px", marginLeft:"35px"}} type="file"></input>
                      <input
                        type="submit"
                        className="profile-edit-btn"
                        name="btnAddMore"
                        value="Change Photo"
                        style={{
                          backgroundColor: "#187A85",
                          color: "#ffffff",
                          marginLeft: "-100px",
                          border: "none",
                          width: "120px",
                        }}
                      />
                      {/* <button className="btn btn-primary">Edit</button> */}
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <div className="mb-3">
                  <h2 style={{ color: "#187A85" }}>Personal Information</h2>
                </div>

                <form onSubmit={handleSubmit}>

                  <div className="mb-3 d-flex flex-row align-items-center">
                  <label htmlFor="name" className="name-label mr-2">
                    <strong>Name</strong>
                  </label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    value={values.name} // Make sure value is set to the corresponding state value
                    onChange={(e) => setValues({ ...values, name: e.target.value })}
                    className="form-control rounded-0 p-1"
                    required
                    style={{
                      backgroundColor: "#cfcfcf",
                      marginTop: "5px",
                      marginLeft: "80px",
                    }}
                  />

                  </div>

                  <div className="mb-3 d-flex flex-row align-items-center">
                  <label htmlFor="email" className="email-label mr-2">
                    <strong>Email</strong>
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    value={values.email}
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
                    className="form-control rounded-0 p-1"
                    required
                    style={{
                      backgroundColor: "#cfcfcf",
                      marginTop: "5px",
                      marginLeft: "82px",
                    }}
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email}</span>
                  )}
                  </div>

                  <div className="mb-3 d-flex flex-row align-items-center">
                  <label htmlFor="phone" className="phone-label mr-2">
                    <strong>Phone</strong>
                  </label>
                  <input
                    name="phone"
                    type="text"
                    id="phone"
                    value={values.phone}
                    onChange={(e) =>
                      setValues({ ...values, phone: e.target.value })
                    }
                    className="form-control rounded-0 p-1"
                    required
                    style={{
                      backgroundColor: "#cfcfcf",
                      marginTop: "5px",
                      marginLeft: "77px",
                    }}
                  />
                  {errors.phone && (
                    <span className="text-danger">{errors.phone}</span>
                  )}
                  </div>

                  <h3 style={{ color: "#187A85" }}>Change Password</h3>
                  <div className="mb-3 d-flex flex-row align-items-center">
                  <label htmlFor="password" className="password-label mr-2">
                    <strong>Current Password</strong>
                  </label>
                  <input
                    name="curpassword"
                    type="password"
                    id="curpassword"
                    onChange={(e) =>
                      setValues({ ...values, curpassword: e.target.value })
                    }
                    className="form-control rounded-0 p-1"
                    required
                    style={{
                      backgroundColor: "#cfcfcf",
                      marginTop: "5px",
                      marginLeft: "30px",
                    }}
                  />
                  {errors.curpassword && (
                    <span className="text-danger">{errors.curpassword}</span>
                  )}
                  </div>

                  <div className="mb-3 d-flex flex-row align-items-center">
                  <label
                    htmlFor="newpassword"
                    className="newpassword-label mr-2"
                  >
                    <strong>New Password</strong>
                  </label>
                  <input
                    name="password"
                    type="password"
                    id="password"
                    onChange={(e) =>
                      setValues({ ...values, password: e.target.value })
                    }
                    className="form-control rounded-0 p-1"
                    required
                    style={{
                      backgroundColor: "#cfcfcf",
                      marginTop: "5px",
                      marginLeft: "45px",
                    }}
                  />
                  {errors.password && (
                    <span className="text-danger">{errors.password}</span>
                  )}
                  </div>

                  <div className="mb-3 d-flex flex-row align-items-center">
                  <label htmlFor="phone" className="phone-label mr-2">
                    <strong>Confirm Password</strong>
                  </label>
                  <input
                    name="confirmpassword"
                    type="password"
                    id="confirmpassword"
                    onChange={(e) =>
                      setValues({ ...values, confirmpassword: e.target.value })
                    }
                    className="form-control rounded-0 p-1"
                    required
                    style={{
                      backgroundColor: "#cfcfcf",
                      marginTop: "5px",
                      marginLeft: "29px",
                    }}
                  />
                  {errors.confirmpassword && (
                    <span className="text-danger">
                      {errors.confirmpassword}
                    </span>
                  )}
                  </div>

                  <div className="btn d-flex flex-row">
                    <input
                      type="submit"
                      className="profile-edit-btn"
                      name="btnAddMore"
                      value="Save"
                      style={{
                        width: "70px",
                        backgroundColor: "#187A85",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "3px",
                        marginLeft: "320px",
                        marginBottom: '3px',
                        height: '29px'
                        
                      }}
                    />
                  </div>

                  <div className="btn-2 d-flex flex-row">
                    <input
                      type="submit"
                      className="profile-edit-btn"
                      name="btnAddMore"
                      value="Cancel"
                      style={{
                        width: "70px",
                        backgroundColor: "#187A85",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "3px",
                        marginLeft: "228px",
                        marginTop: '-40px',
                        marginBottom: '10px'
                      }}
                    />
                  {/* <input type="button" className="btn btn-primary px-4" defaultValue="Save Changes" /> */}
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
