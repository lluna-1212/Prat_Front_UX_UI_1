const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Mock credentials (to be replaced with proper auth later)
const VALID_CREDENTIALS = {
  email: 'test@test.com',
  password: 'test'
}; // NSFW 🐴🐴🐴

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Login attempt:', { email, password });
  if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {
    console.log('Login successful:', { email });
    res.status(200).json({
      success: true,
      message: 'Login successful',
      user: {
        email,
        name: email.split('@')[0]
      }
    });
  } else {
    console.log('Login failed:', { email });
    res.status(400).json({
      success: false,
      message: 'Invalid credentials'
    });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
