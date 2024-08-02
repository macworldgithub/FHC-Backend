import express, { Request, Response } from 'express';
import sendMail from './routes/sendMail';
import users from './routes/user';
import categories from './routes/categories';
import subcategories from './routes/subcategories';
import products from './routes/products';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('This is the project');
});

app.use("/mail", sendMail);
app.use("/users", users);
app.use("/categories", categories);
app.use("/subcategories", subcategories);
app.use("/products", products);

// Database connection
connectDB();

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
