const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const meetingRoutes = require("./routes/meetinRoutes");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(
  cors({
    origin: ["https://meeting-frontend1.vercel.app", "http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.get("/", (req, res) => {

  res.send("You are Welcome")
})
app.use("/api/auth", authRoutes);
app.use("/api/meetings", meetingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
