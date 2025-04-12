import express from 'express';
import { AuthRoute, UserRoute } from '../routes';

const app = express();
const port = 3000;

app.use(express.json());

// Root route
app.get('/', (req, res) => {
 res.send('Hello from Firebase + Express!');
});



// API routes
app.use('/api', UserRoute);
app.use('/auth', AuthRoute);

app.listen(port, () => {
 console.log(`🚀 Server running at http://localhost:${port}`);
});
