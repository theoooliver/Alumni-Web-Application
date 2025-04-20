import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Import routes
import userRoutes from './users/user.routes.js';
import opportunityRoutes from './opportunities/opportunity.routes.js';
import majorRoutes from './majors/major.routes.js';

// Fix Mongoose deprecation warning
mongoose.set('strictQuery', false);

// Create Express app
const app = express();
const PORT = process.env.PORT || 2490;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Debug middleware
app.use((req, res, next) => {
  if (req.method === 'POST' && req.path.includes('opportunities')) {
    console.log('DEBUG - Request path:', req.path);
    console.log('DEBUG - Content-Type:', req.headers['content-type']);
    console.log('DEBUG - Body received:', req.body);
    console.log('DEBUG - Required fields present:', {
      title: Boolean(req.body.title), 
      description: Boolean(req.body.description), 
      posted_by: Boolean(req.body.posted_by), 
      type: Boolean(req.body.type)
    });
  }
  next();
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/opportunities', opportunityRoutes);
app.use('/api/majors', majorRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Handle port in use error gracefully
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Try a different port with the PORT environment variable.`);
    // Try another port
    const newPort = parseInt(PORT) + 1;
    console.log(`Attempting to use port ${newPort} instead...`);
    app.listen(newPort, () => {
      console.log(`Server running on port ${newPort}`);
    });
  } else {
    console.error('Server error:', err);
  }
});

export default app;
