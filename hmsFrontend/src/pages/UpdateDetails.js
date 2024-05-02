import React, { useState } from "react";
//import { TextField, Button, Container, Stack, Typography } from '@mui/material';
//import { Link } from "react-router-dom"
//import CssBaseline from '@mui/material/CssBaseline';

const UpdateDetails = () => {
  /*    const [Name, setName] = useState('');
    const [Session, setSession] = useState('');
    const [Department, setDepartment] = useState('');
    const [Program, setProgram] = useState('');
    const [SerialNo, setSerialNo] = useState('');
    const [sgid, setsgid] = useState('');
    const [CNIC, setCNIC] = useState('');
    const [SessionStart, setSessionStart] = useState('');
    const [SessionEnd, setSessionEnd] = useState('');

*/
  const [values, setValues] = useState({
    serial: "",
    sgid: "",
    name: "",
    cnic: "",
    dept: "",
    prog: "",
    session: "",
    s_start: "",
    s_end: "",
    room: "",
    r_type: "",
  });

  const [errors, setErrors] = useState({});
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div
      className="reset-container"
      style={{ display: "flex", height: "100vh", border: "25px solid #187A85" }}
    >
      <div
        className="p-3 rounded w-100 "
        style={{
          margin: "20px",
          border: "1px solid #187A85",
        }}
      >
        <form action="">
          <span>
            <div>
              <h1
                className="mb-3"
                style={{ color: "#187A85", textAlign: "center" }}
              >
                Student's Details
              </h1>
            </div>
          </span>

          <div className="mb-3 d-flex justify-content-between">
            <div style={{ flex: 1, marginRight: 150 }}>
              <label
                htmlFor="serial"
                className="serial-label "
                style={{
                  color: "#187A85",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <strong>Serial#</strong>
              </label>
              <input
                name="serial"
                type="text"
                id="serial"
                onChange={(e) =>
                  setValues({ ...values, serial: e.target.value })
                }
                className="form-control rounded-0 p-1"
                required
                style={{ backgroundColor: "#cfcfcf" }}
              />
              {errors.name && (
                <span className="text-danger">{errors.serial}</span>
              )}
            </div>

            <div style={{ flex: 1 }}>
              <label
                htmlFor="sgid"
                className="sgid-label "
                style={{ color: "#187A85" }}
              >
                <strong>SgID#</strong>
              </label>
              <input
                name="sgid"
                type="text"
                id="sgid"
                onChange={(e) => setValues({ ...values, sgid: e.target.value })}
                className="form-control rounded-0 p-1"
                required
                style={{ backgroundColor: "#cfcfcf" }}
              />
              {errors.sgid && (
                <span className="text-danger">{errors.sgid}</span>
              )}
            </div>
          </div>

          <div className="mb-3 d-flex justify-content-between">
            <div style={{ flex: 1, marginRight: 150 }}>
              <label
                htmlFor="name"
                className="name-label "
                style={{
                  color: "#187A85",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <strong>Name</strong>
              </label>
              <input
                name="name"
                type="text"
                id="name"
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                className="form-control rounded-0 p-1"
                required
                style={{ backgroundColor: "#cfcfcf" }}
              />
              {errors.name && (
                <span className="text-danger">{errors.name}</span>
              )}
            </div>

            <div style={{ flex: 1 }}>
              <label
                htmlFor="cnic"
                className="cnic-label "
                style={{ color: "#187A85" }}
              >
                <strong>CNIC</strong>
              </label>
              <input
                name="cnic"
                type="text"
                id="cnic"
                onChange={(e) => setValues({ ...values, cnic: e.target.value })}
                className="form-control rounded-0 p-1"
                required
                style={{ backgroundColor: "#cfcfcf" }}
              />
              {errors.cnic && (
                <span className="text-danger">{errors.cnic}</span>
              )}
            </div>
          </div>

          <div className="mb-3 d-flex justify-content-between">
            <div style={{ flex: 1, marginRight: 150 }}>
              <label
                htmlFor="dept"
                className="dept-label "
                style={{
                  color: "#187A85",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <strong>Department</strong>
              </label>
              <input
                name="dept"
                type="text"
                id="dept"
                onChange={(e) => setValues({ ...values, dept: e.target.value })}
                className="form-control rounded-0 p-1"
                required
                style={{ backgroundColor: "#cfcfcf" }}
              />
              {errors.name && (
                <span className="text-danger">{errors.dept}</span>
              )}
            </div>

            <div style={{ flex: 1 }}>
              <label
                htmlFor="prog"
                className="prog-label "
                style={{ color: "#187A85" }}
              >
                <strong>Program</strong>
              </label>
              <input
                name="prog"
                type="text"
                id="prog"
                onChange={(e) => setValues({ ...values, prog: e.target.value })}
                className="form-control rounded-0 p-1"
                required
                style={{ backgroundColor: "#cfcfcf" }}
              />
              {errors.prog && (
                <span className="text-danger">{errors.prog}</span>
              )}
            </div>
          </div>

          <div className="mb-3 d-flex justify-content-between">
            <div style={{ flex: 3, marginRight: 150 }}>
              <label
                htmlFor="session"
                className="session-label"
                style={{ color: "#187A85" }}
              >
                <strong>Session</strong>
              </label>
              <input
                name="session"
                type="text"
                id="session"
                onChange={(e) =>
                  setValues({ ...values, session: e.target.value })
                }
                className="form-control rounded-0 p-1"
                required
                style={{ backgroundColor: "#cfcfcf" }}
              />
              {errors.session && (
                <span className="text-danger">{errors.session}</span>
              )}
            </div>

            <div style={{ flex: 1, marginRight: 180 }}>
              <label
                htmlFor="s_start"
                className="start-label "
                style={{
                  color: "#187A85",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <strong>Session Start</strong>
              </label>
              <input
                name="s_start"
                type="text"
                id="s_start"
                onChange={(e) =>
                  setValues({ ...values, s_start: e.target.value })
                }
                className="form-control rounded-0 p-1"
                required
                style={{ backgroundColor: "#cfcfcf" }}
              />
              {errors.s_start && (
                <span className="text-danger">{errors.s_start}</span>
              )}
            </div>

            <div style={{ flex: 1 }}>
              <label
                htmlFor="s_end"
                className="end-label "
                style={{ color: "#187A85" }}
              >
                <strong>Session End</strong>
              </label>
              <input
                name="s_end"
                type="text"
                id="s_end"
                onChange={(e) =>
                  setValues({ ...values, s_end: e.target.value })
                }
                className="form-control rounded-0 p-1"
                required
                style={{ backgroundColor: "#cfcfcf" }}
              />
              {errors.s_end && (
                <span className="text-danger">{errors.s_end}</span>
              )}
            </div>
          </div>

          <div className="mb-3 d-flex justify-content-between">
            <div style={{ flex: 1, marginRight: 150 }}>
              <label
                htmlFor="room"
                className="room-label"
                style={{ color: "#187A85" }}
              >
                <strong>Room</strong>
              </label>
              <input
                name="room"
                type="text"
                id="room"
                onChange={(e) => setValues({ ...values, room: e.target.value })}
                className="form-control rounded-0 p-1"
                required
                style={{ backgroundColor: "#cfcfcf" }}
              />
              {errors.room && (
                <span className="text-danger">{errors.room}</span>
              )}
            </div>

            <div style={{ flex: 1 }}>
              <label
                htmlFor="r_type"
                className="type-label"
                style={{ color: "#187A85" }}
              >
                <strong>Room Type</strong>
              </label>
              <select
                name="r_type"
                id="r_type"
                value={values.r_type}
                onChange={(e) =>
                  setValues({ ...values, r_type: e.target.value })
                }
                className="form-select rounded-0 p-1"
                required
                style={{ backgroundColor: "#cfcfcf" }}
              >
                <option value="">Select an option</option>
                <option value="Cubical">Cubical</option>
                <option value="Dormitory">Dormitory</option>
                <option value="Sister Room">Sister Room</option>
              </select>
              {errors.r_type && (
                <span className="text-danger">{errors.r_type}</span>
              )}
            </div>
          </div>

          <div className="mb-3 d-flex justify-content-end">
            <button
              type="submit"
              className="btn w-10 mb-4 mt-2 align-item-center"
              style={{ backgroundColor: "#187A85", color: "white" }}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateDetails;
