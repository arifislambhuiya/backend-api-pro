import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true,
  })
);

import userRoute from "./routes/user.routes.js";

//use routes
app.use("/api/v1/users", userRoute);

export { app };
