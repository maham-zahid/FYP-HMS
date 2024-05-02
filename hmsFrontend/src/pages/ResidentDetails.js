import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS before any other CSS
import { Table } from "react-bootstrap";
import axios from "axios";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ResidentDetails() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const removeDuplicates = (arr) => {
    const uniqueStudents = [];
    const uniqueKeys = new Set();

    arr.forEach((student) => {
      const key = `${student.name}-${student.cnic}`; //combination of keys that ensures uniqueness
      if (!uniqueKeys.has(key)) {
        uniqueKeys.add(key);
        uniqueStudents.push(student);
      }
    });

    return uniqueStudents;
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/students");
      /*console.log("Fetched data:", response.data);*/ 

      // Remove duplicates based on a unique key
      const uniqueStudents = removeDuplicates(response.data);

      // Set the state with unique student data
      setStudents(uniqueStudents);
    } catch (error) {
      console.error("Error fetching student data:", error);
      // You can add additional error handling here if needed
    }
  };

  return (
    <div className="bgcolor">
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex", marginLeft: "-8px", marginRight: "-8px" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 5 }}>
          <div
            className="w-60 rounded p-3"
            style={{ backgroundColor: "#187A85" }}
          >
            <Table responsive hover>
              <thead>
                <tr>
                  <th style={{ color: "#187A85" }}>Serial</th>
                  <th style={{ color: "#187A85" }}>SGID</th>
                  <th style={{ color: "#187A85" }}>Name</th>
                  <th style={{ color: "#187A85" }}>CNIC</th>
                  <th style={{ color: "#187A85" }}>Department</th>
                  <th style={{ color: "#187A85" }}>Program</th>
                  <th style={{ color: "#187A85" }}>Session</th>
                  <th style={{ color: "#187A85" }}>Session Start</th>
                  <th style={{ color: "#187A85" }}>Session End</th>
                  <th style={{ color: "#187A85" }}>Room</th>
                  <th style={{ color: "#187A85" }}>Room Type</th>
                  <th style={{ color: "#187A85" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(students) &&
                  students.map((student, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{student.SGID}</td>
                      <td>{student.name}</td>
                      <td>{student.cnic}</td>
                      <td>{student.dept}</td>
                      <td>{student.program}</td>
                      <td>{student.session}</td>
                      <td>{student.s_start.substring(0, 10)}</td>
                      <td>{student.s_end.substring(0, 10)}</td>
                      <td>{student.room}</td>
                      <td>{student.r_type}</td>
                      <td>
                        <Link
                          to={{
                            pathname: `/RoomAllocation/${student.serial}`, // Pass student's ID as a URL parameter
                            state: { studentData: student }, // Pass student's data as state
                          }}
                          style={{ textDecoration: "none" }}
                        >
                          <IconButton
                            aria-label="edit"
                            style={{ color: "#187A85" }}
                          >
                            <EditIcon />
                          </IconButton>
                        </Link>

                        <IconButton
                          aria-label="delete"
                          style={{ color: "#e51421" }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </Box>
      </Box>
    </div>
  );
}
