// Import the express module
import express from 'express';

// Create an instance of an express app
const app = express();

// Define a port number for the server to listen on
const PORT = 3005;

const posts = [];

// Enable static file serving
app.use(express.static('public'));

// Add "middleware" to allow the app to parse form data
// Access form data through req.body
app.use(express.urlencoded({extended: true}));

// Define a default route ("/")
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get('/confirm', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

app.post('/submit', (req, res) => {

    // Create a JSON object to store order data
    const order = req.body;
    order['timestamp'] = new Date();

    // Add order object to orders array
    orders.push(order);

    console.log(orders);

    // Display confirmation page
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

// Start the server on the designated port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});