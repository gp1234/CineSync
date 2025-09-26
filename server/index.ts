import express, { Request, Response } from "express";
import authRoutes from "./routes/auth";
const app = express();
const PORT = process.env.PORT || 3001;
import cookieParser from "cookie-parser";
import cors from "cors";

app.use(
  cors({
    origin: "http://localhost:5173", // your frontend
    credentials: true, // allow cookies
  })
);

app.use(express.json());
app.use(cookieParser());

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
