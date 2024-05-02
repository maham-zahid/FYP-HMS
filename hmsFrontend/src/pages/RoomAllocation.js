import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Container,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import SideNav from "../components/SideNav";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import axios from "axios";

export default function RoomAllocation() {
  const { serial } = useParams(); // Access the "serial" parameter from the URL
  const navigate = useNavigate();

  // State to hold the student data
  const [student, setStudent] = useState(null);

  // State to hold form values
  const [values, setValues] = useState({
    SerialNo: "",
    sgid: "",
    Name: "",
    CNIC: "",
    Department: "",
    Program: "",
    Session: "",
    SessionStart: "",
    SessionEnd: "",
    RoomNo: "",
    RoomType: "",
  });

  // Fetch student data from API
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/api/students/${serial}`
        );
        setStudent(response.data);
        setValues({
          SerialNo: response.data.SerialNo,
          sgid: response.data.sgid,
          Name: response.data.Name,
          CNIC: response.data.CNIC,
          Department: response.data.Department,
          Program: response.data.Program,
          Session: response.data.Session,
          SessionStart: response.data.SessionStart,
          SessionEnd: response.data.SessionEnd,
          RoomNo: response.data.RoomNo,
          RoomType: response.data.RoomType,
        });
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    fetchStudentData();
  }, [serial]);

  
  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8081/api/students/` + serial,
        values
      );
      // Redirect to ResidentDetails page after successful update
      navigate("/ResidentDetails");
    } catch (error) {
      console.error("Error updating student record:", error);
    }
  };

  return (
    <div className="bgcolor">
      {student && (
        <>
          <Navbar />
          <Box height={70} />
          <Box
            sx={{ display: "flex", marginLeft: "-8px", marginRight: "-8px" }}
          >
            <SideNav />
            <Box component="main" sx={{ flexGrow: 1, p: 5 }}>
              <div
                style={{
                  backgroundColor: "#f0f0f0",
                  minHeight: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CssBaseline />
                <Container
                  maxWidth="sm"
                  sx={{
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "5px",
                    border: "10px solid #187A85",
                  }}
                >
                  <h2 style={{ color: "#187A85" }}>Student's Details</h2>
                  <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                    <hr className="my-4" />
                    <small style={{ color: "red" }}>
                      Admission Information{" "}
                    </small>
                    <hr className="my-4" />
                    <br />

                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                      <Typography variant="body1" fontWeight="bold">
                        Serial#:
                      </Typography>
                      <TextField
                        type="text"
                        variant="outlined"
                        color="secondary"
                        placeholder="XX"
                        onChange={(e) =>
                          setValues({ ...values, SerialNo: e.target.value })
                        }
                        value={values.SerialNo}
                        fullWidth
                        required
                      />
                      <Typography variant="body1" fontWeight="bold">
                        SGID#:
                      </Typography>
                      <TextField
                        type="text"
                        variant="outlined"
                        color="secondary"
                        placeholder="XXXXX"
                        onChange={(e) =>
                          setValues({ ...values, sgid: e.target.value })
                        }
                        value={values.sgid}
                        fullWidth
                        required
                      />
                    </Stack>

                    <Typography variant="body1" fontWeight="bold">
                      Name:
                    </Typography>
                    <TextField
                      type="text"
                      variant="outlined"
                      color="secondary"
                      placeholder="abc"
                      onChange={(e) =>
                        setValues({ ...values, Name: e.target.value })
                      }
                      value={values.Name}
                      fullWidth
                      required
                      sx={{ mb: 4 }}
                    />
                    <br />
                    <Typography variant="body1" fontWeight="bold">
                      CNIC/Form-B:
                    </Typography>
                    <TextField
                      type="text"
                      variant="outlined"
                      color="secondary"
                      placeholder="XXXXX-XXXXXXX-X"
                      onChange={(e) =>
                        setValues({ ...values, CNIC: e.target.value })
                      }
                      value={values.CNIC}
                      fullWidth
                      required
                      sx={{ mb: 4 }}
                    />

                    <Typography variant="body1" fontWeight="bold">
                      Department:
                    </Typography>
                    <TextField
                      type="text"
                      variant="outlined"
                      color="secondary"
                      placeholder="abc"
                      onChange={(e) =>
                        setValues({ ...values, Department: e.target.value })
                      }
                      value={values.Department}
                      fullWidth
                      required
                      sx={{ mb: 4 }}
                    />

                    <Typography variant="body1" fontWeight="bold">
                      Program:
                    </Typography>
                    <TextField
                      type="text"
                      variant="outlined"
                      color="secondary"
                      placeholder="abc"
                      onChange={(e) =>
                        setValues({ ...values, Program: e.target.value })
                      }
                      value={values.Program}
                      fullWidth
                      required
                      sx={{ mb: 4 }}
                    />

                    <Typography variant="body1" fontWeight="bold">
                      Session:
                    </Typography>
                    <TextField
                      type="text"
                      variant="outlined"
                      color="secondary"
                      placeholder="YYYY-YYYY"
                      onChange={(e) =>
                        setValues({ ...values, Session: e.target.value })
                      }
                      value={values.Session}
                      fullWidth
                      required
                      sx={{ mb: 4 }}
                    />

                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                      <Typography variant="body1" fontWeight="bold">
                        Session Start:
                      </Typography>
                      <TextField
                        type="date"
                        variant="outlined"
                        color="secondary"
                        onChange={(e) =>
                          setValues({ ...values, SessionStart: e.target.value })
                        }
                        value={values.SessionStart}
                        fullWidth
                        required
                        sx={{ mb: 4 }}
                      />
                      <Typography variant="body1" fontWeight="bold">
                        Session End:
                      </Typography>
                      <TextField
                        type="date"
                        variant="outlined"
                        color="secondary"
                        onChange={(e) =>
                          setValues({ ...values, SessionEnd: e.target.value })
                        }
                        value={values.SessionEnd}
                        fullWidth
                        required
                        sx={{ mb: 4 }}
                      />
                    </Stack>

                    <hr className="my-4" />
                    <small style={{ color: "red" }}>Room Information </small>
                    <hr className="my-4" />
                    <br />
                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                      <Typography variant="body1" fontWeight="bold">
                        RoomNo#:
                      </Typography>
                      <TextField
                        type="text"
                        variant="outlined"
                        color="secondary"
                        placeholder="XX"
                        onChange={(e) =>
                          setValues({ ...values, RoomNo: e.target.value })
                        }
                        value={values.RoomNo}
                        fullWidth
                        required
                      />
                      <Typography variant="body1" fontWeight="bold">
                        RoomType:
                      </Typography>
                      <FormControl fullWidth variant="outlined" color="primary">
                        <InputLabel id="room-type-label">
                          Select Room Type
                        </InputLabel>
                        <Select
                          labelId="room-type-label"
                          id="room-type"
                          onChange={(e) =>
                            setValues({ ...values, RoomType: e.target.value })
                          }
                          value={values.RoomType}
                          label="Select Room Type"
                          required
                        >
                          <MenuItem value="Dormitory">Dormitory</MenuItem>
                          <MenuItem value="Cubicle">Cubicle</MenuItem>
                          <MenuItem value="Prayer room">Prayer room</MenuItem>
                          <MenuItem value="Study room">Study room</MenuItem>
                          <MenuItem value="Common room">Common room</MenuItem>
                        </Select>
                      </FormControl>
                    </Stack>

                    <hr className="my-4" />
                    <br />
                    <Button
                      variant="contained"
                      type="submit"
                      style={{
                        backgroundColor: "#187A85",
                        color: "#ffffff",
                        marginLeft: "460px",
                      }}
                    >
                      Save
                    </Button>
                  </form>

                  <br />
                </Container>
              </div>
            </Box>
          </Box>
        </>
      )}
    </div>
  );
}
