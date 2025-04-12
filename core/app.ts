import express from 'express';
import userRoutes from '../routes/userRoutes';

const app = express();
const port = 3000;

app.use(express.json());

// Root route
app.get('/', (req, res) => {
 res.send('Hello from Firebase + Express!');
});

// API routes
app.use('/api', userRoutes);

app.listen(port, () => {
 console.log(`🚀 Server running at http://localhost:${port}`);
});
