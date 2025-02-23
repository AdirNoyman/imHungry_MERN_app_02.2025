import express, {Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_CONNECTION_URI as string).then(() => console.log("Connected to MongoDB 🤓🤘")).catch((err) => console.log("Error connecting to MongoDB 🤦‍♂️", err));

// Middlewares
app.use(cors());
// Convert the body of the request  to JSON
app.use(express.json());


app.get('/', async (req: Request, res: Response) => {
  res.json({message: 'Hello World'});
})

// Start the server
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} 🚀🤓🤘`);
})

