import React, { useState } from 'react';
import { TextField, Button, Container,Select, InputLabel, FormControl, Stack, MenuItem, Typography } from '@mui/material';
import { Link } from "react-router-dom"
import CssBaseline from '@mui/material/CssBaseline';
import SideNav from '../components/SideNav';
import Navbar from '../components/Navbar';
import Box from "@mui/material/Box";


export default function RoomAllocation(){

    const [Name, setName] = useState('');
    const [Session, setSession] = useState('');
    const [Department, setDepartment] = useState('');
    const [Program, setProgram] = useState('');
    const [SerialNo, setSerialNo] = useState('');
    const [sgid, setsgid] = useState('');
    const [CNIC, setCNIC] = useState('');
    const [SessionStart, setSessionStart] = useState('');
    const [SessionEnd, setSessionEnd] = useState('');
    const [RoomNo, setRoomNo] = useState('');
    const [RoomType, setRoomType] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(SerialNo, sgid, Name, CNIC, Department, Program, Session, SessionStart, SessionEnd, RoomNo, RoomType);
    }

    return (
        <div className="bgcolor">
            <Navbar />
            <Box height={70} />
            <Box sx={{ display: "flex", marginLeft: "-8px", marginRight: "-8px" }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 5 }}>
            <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CssBaseline />
                <Container maxWidth="sm" sx={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' , border: '10px solid #187A85'}}>
                    <h2 style={{color: '#187A85'}}>Student's Details</h2>
                    <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                        <hr className="my-4" />
                        <small style={{color: 'red'}}>Admission Information </small>
                        <hr className="my-4" />
                        <br />

                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                        <Typography variant="body1" fontWeight="bold">Serial#:</Typography>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            placeholder="XX"
                            onChange={e => setSerialNo(e.target.value)}
                            value={SerialNo}
                            fullWidth
                            required
                        />
                        <Typography variant="body1" fontWeight="bold">SGID#:</Typography>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            placeholder="XXXXX"
                            onChange={e => setsgid(e.target.value)}
                            value={sgid}
                            fullWidth
                            required
                        />
                    </Stack>

                    <Typography variant="body1" fontWeight="bold">Name:</Typography>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        placeholder="abc"
                        onChange={e => setName(e.target.value)}
                        value={Name}
                        fullWidth
                        required
                        sx={{ mb: 4 }}
                    /><br />
                    <Typography variant="body1" fontWeight="bold">CNIC/Form-B:</Typography>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        placeholder="XXXXX-XXXXXXX-X"
                        onChange={e => setCNIC(e.target.value)}
                        value={CNIC}
                        fullWidth
                        required
                        sx={{ mb: 4 }}
                    />

                    <Typography variant="body1" fontWeight="bold">Department:</Typography>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        placeholder="abc"
                        onChange={e => setDepartment(e.target.value)}
                        value={Department}
                        fullWidth
                        required
                        sx={{ mb: 4 }}
                    />

                    <Typography variant="body1" fontWeight="bold">Program:</Typography>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        placeholder="abc"
                        onChange={e => setProgram(e.target.value)}
                        value={Program}
                        fullWidth
                        required
                        sx={{ mb: 4 }}
                    />

                    <Typography variant="body1" fontWeight="bold">Session:</Typography>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        placeholder="YYYY-YYYY"
                        onChange={e => setSession(e.target.value)}
                        value={Session}
                        fullWidth
                        required
                        sx={{ mb: 4 }}
                    />

                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                        <Typography variant="body1" fontWeight="bold">Session Start:</Typography>
                        <TextField
                            type="date"
                            variant='outlined'
                            color='secondary'
                            onChange={e => setSessionStart(e.target.value)}
                            value={SessionStart}
                            fullWidth
                            required
                            sx={{ mb: 4 }}
                        />
                        <Typography variant="body1" fontWeight="bold">Session End:</Typography>
                        <TextField
                            type="date"
                            variant='outlined'
                            color='secondary'
                            onChange={e => setSessionEnd(e.target.value)}
                            value={SessionEnd}
                            fullWidth
                            required
                            sx={{ mb: 4 }}
                        />
                    </Stack>

                    
                    <hr className="my-4" />
                    <small style={{color: 'red'}}>Room Information </small>
                    <hr className="my-4" />
                    <br />
                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                        <Typography variant="body1" fontWeight="bold">RoomNo#:</Typography>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            placeholder="XX"
                            onChange={e => setRoomNo(e.target.value)}
                            value={RoomNo}
                            fullWidth
                            required
                        />
                        <Typography variant="body1" fontWeight="bold">RoomType:</Typography>
                            <FormControl fullWidth variant="outlined" color="primary">
                                <InputLabel id="room-type-label">Select Room Type</InputLabel>
                                <Select
                                    labelId="room-type-label"
                                    id="room-type"
                                    onChange={e => setRoomType(e.target.value)}
                                    value={RoomType}
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
                    <Button variant="contained" type="submit" style={{backgroundColor:'#187A85', color:'#ffffff', marginLeft: '460px'}}>Save</Button>
                </form>

                <br />
            </Container>
    
        </div>
        </Box>
        </Box>
        </div>
        
    )
}

