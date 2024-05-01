import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS before any other CSS
import { Table } from 'react-bootstrap';
import axios from 'axios';
import Navbar from '../components/Navbar';
import SideNav from '../components/SideNav';
import Box from "@mui/material/Box";

export default function ResidentDetails() {

    const [students, setStudents] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const result = await axios.get('http://localhost:8081/ResidentDetails');
            console.log("Fetched data:", result.data); // Log the fetched data to inspect its structure
            setStudents(result.data);
        } catch (error) {
            console.error("Error fetching student data:", error);
            // You can add additional error handling here if needed
        }
    }

    return (
        <div className="bgcolor">
            <Navbar />
            <Box height={70} />
            <Box sx={{ display: "flex", marginLeft: "-8px", marginRight: "-8px" }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 5 }}>
                    <div className='w-60 rounded p-3' style={{ backgroundColor: "#187A85" }}>
                        <Table responsive hover>
                            <thead>
                                <tr>
                                    <th>Serial</th>
                                    <th>SGID</th>
                                    <th>Name</th>
                                    <th>CNIC</th>
                                    <th>Department</th>
                                    <th>Program</th>
                                    <th>Session</th>
                                    <th>Session-Start</th>
                                    <th>Session-End</th>
                                    <th>Room</th>
                                    <th>Room-type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(students) && students.map((student, index) => (
                                    <tr key={index}>
                                        <td>{student.serial}</td>
                                        <td>{student.SGID}</td>
                                        <td>{student.name}</td>
                                        <td>{student.cnic}</td>
                                        <td>{student.dept}</td>
                                        <td>{student.prog}</td>
                                        <td>{student.session}</td>
                                        <td>{student.s_start}</td>
                                        <td>{student.s_end}</td>
                                        <td>{student.room}</td>
                                        <td>{student.r_type}</td>
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
