import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// Connect to the database

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v2/portfolio', router); // Changed to '/contacts' for clarity

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Node.js API!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
