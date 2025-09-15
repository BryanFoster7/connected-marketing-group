const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter setup (using Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS  // Your Gmail app password
  }
});

// Function to format submission data into a readable email
const formatEmailContent = (data) => {
  return `
    New Form Submission

    Full Name: ${data.name}
    Business Name: ${data.businessName}
    Email: ${data.email}
    Phone Number: ${data.phoneNumber || 'Not provided'}
    Message: ${data.message || 'No message provided'}

    Submitted at: ${new Date().toLocaleString()}
  `;
};

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/signup-db')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Create schema for submissions
const submissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  businessName: { type: String, required: true },
  phoneNumber: String,
  message: String,
  submittedAt: { type: Date, default: Date.now }
});

// Create model
const Submission = mongoose.model('Submission', submissionSchema);

// Route to handle form submissions
app.post('/api/submissions', async (req, res) => {
  try {
    // Save to database
    const submission = new Submission(req.body);
    await submission.save();

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL, // Email where you want to receive notifications
      subject: `New Form Submission from ${req.body.businessName}`,
      text: formatEmailContent(req.body)
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Submission saved and notification sent successfully' });
  } catch (error) {
    console.error('Error processing submission:', error);
    res.status(500).json({ error: 'Error processing submission' });
  }
});

// Route to get all submissions
app.get('/api/submissions', async (req, res) => {
  try {
    const submissions = await Submission.find().sort({ submittedAt: -1 });
    res.json(submissions);
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({ error: 'Error fetching submissions' });
  }
});

// Start the server on a different port
const PORT = process.env.PORT || 5001;  // Changed to 5001 since 5000 is in use
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));