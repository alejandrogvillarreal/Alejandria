import express, { Application } from "express";
import morgan from "morgan";
import path from "path";
import compression from "compression";
import cors from "cors";
import cookieParser from 'cookie-parser';

import indexRoutes from "./routes/index";

// Initializations
const app: Application = express();

// Settings
app.set("port", process.env.PORT || 8000);

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(compression());
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
// Routes
app.use("/api", indexRoutes);

// this folders for this application will be used to store public file images
app.use("/uploads", express.static(path.resolve("uploads")));

export default app;
