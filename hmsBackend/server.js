require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const xlsx = require('xlsx');
const cors = require('cors');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const { X } = require('@mui/icons-material');

const secretKey = 'amKfAAzg';
// Use CORS middleware
app.use(cors());
app.use(bodyParser.json());
// Use JSON middleware to parse incoming requests
app.use(express.json());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sign-up'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Database connected!');
});

app.post('/login', (req, res) => {
    const sql = 'SELECT * FROM login WHERE email=? AND password=?';

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.status(500).json("Error");
        if(data.length > 0){
            return res.status(200).json({message:"Login successfully", redirectTo: "/Dashboard"});
        } else {
            return res.status(401).json("No record found");
        }
        
    });
});

app.post('/signup', (req, res) => {
    const { name, email, phone, password } = req.body;

    const checkEmailQuery = 'SELECT * FROM login WHERE email = ?';
    db.query(checkEmailQuery, [email], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Database error' });
        }

        if (result.length > 0) {
            return res.status(409).json({ error: 'Email already exists' });
        }

        const insertUserQuery = 'INSERT INTO login (name, email, phone, password) VALUES (?, ?, ?, ?)';
        db.query(insertUserQuery, [name, email, phone, password], (err, result) => {

            if (!name) {
                return res.status(400).json({ error: 'Name is required' });
            }

            if (err) {
                console.error('Error creating user:', err);
                return res.status(500).json({ error: 'Failed to create user' });
            }

            return res.status(201).json({ message: 'User created successfully' });
        });
    });
});


app.post('/Forgotpwd', async (req, res) => {
    const { email } = req.body;

    try {
        const userQuery = 'SELECT * FROM login WHERE email = ?';
        db.query(userQuery, [email], async (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ message: 'Internal Server Error' });
            }

            if (results.length === 0) {
                return res.status(404).json({ message: 'User not registered' });
            }

            // Assuming you have a user object retrieved from the database
            const user = results[0];

            // Define the payload with the data you want to include in the token
            const payload = {
                id: user.id, // or any other unique identifier for the user
                email: user.email,
                // Add other relevant data as needed
            };

            // Define a secret key (replace 'yourSecretKey' with your actual secret key)
            const secretKey = 'amKfAAzg';

            // Sign the token using jwt.sign
            const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'hinazaniz@gmail.com',
                    pass: 'hsuz kfdo eflo neya',
                },
            });

            const mailOptions = {
                from: 'hinazaniz@gmail.com',
                to: email,
                subject: 'Reset Password',
                text: `http://localhost:3000/Resetpwd/${encodeURIComponent(token)}`,
            };

            transporter.sendMail(mailOptions, function (sendMailError, info) {
                if (sendMailError) {
                    console.error(sendMailError);
                    return res.status(500).json({ message: 'Error in sending email' });
                } else {
                    //console.log('Email sent:', info.response);
                    return res.json({ status: true, message: 'Email sent successfully' });
                }
            });
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/Resetpwd', (req, res) => {
    const { token, password } = req.body;
    
    // Log the received token
    //console.log('Received Token:', token);

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            console.error('Token decoding error:', err.message);
            return res.status(400).json({ message: 'Invalid or expired token' });
        }

        // Log the decoded token
        //console.log('Decoded Token:', decoded);

        const userId = decoded.id;
        const updatePasswordQuery = 'UPDATE login SET password = ? WHERE id = ?';

        db.query(updatePasswordQuery, [password, userId], (error, result) => {
            if (error) {
                console.error('Database error:', error);
                return res.status(500).json({ message: 'Internal Server Error' });
            }

            return res.status(200).json({ message: 'Password reset successfully' });
        });
    });
});




 // Serve React app
app.use(express.static(path.join(__dirname, '../hmsFrontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../hmsFrontend/build', 'index.html'));
});


//open excel file for students data
let workbook = xlsx.readFile('Students.xlsx');
let worksheet = workbook.Sheets[workbook.SheetNames[0]];
let range = xlsx.utils.decode_range(worksheet["!ref"]);

for(let row = range.s.r + 1; row<= range.e.r; row++){
    let data = []

    for(let col = range.s.c; col<=range.e.c; col++){
        let cell = worksheet[xlsx.utils.encode_cell({r:row, c:col})]
        data.push(cell.v)
    }
    //console.log(data)

    const sql = 'INSERT INTO students (SGID, name, cnic, dept, program, session, s_start, s_end, room, r_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, data, (err,results,fields)=>{
        if(err){
            return console.error(err.message)
        }
        //console.log('User ID: '+ results.insertId)
    })
}


app.get('/ResidentDetails', (req, res) => {
    const sql = "SELECT * FROM students";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error fetching student data:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        
        // Convert data to JSON format
        const jsonData = JSON.stringify(data);
        
        // Set Content-Type header
        res.setHeader('Content-Type', 'application/json');
        
        // Send JSON response
        return res.send(jsonData);
    });
});




app.listen(8081, () => {
    console.log('Listening on port 8081');
});
