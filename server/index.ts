import express, { Request, Response } from "express";
import authRoutes from "./routes/auth";
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the Movies Recommender API!" });
});

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
