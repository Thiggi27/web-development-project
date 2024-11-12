const express = require('express'); // Import the Express library
const app = express(); // Create an instance of Express
const port = 3000; // Define the port number


app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Serve static files from the 'public' folder in my project folder containing HTML docs
app.use(express.static('public'));

// Handle form submission from the contact page
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body; // Access data
    console.log(`Received submission: Name - ${name}, Email - ${email}, Message - ${message}`); // Log the submitted data
    res.send('Thank you for your message!'); // Send a response back
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`); // Log that the server is running
});
