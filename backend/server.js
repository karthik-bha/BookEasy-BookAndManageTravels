const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");


dotenv.config();

const app = express();
const cors = require("cors");
app.use(cors());



connectDB();

const userRouter = require("./routes/userRoutes");
const adminRouter = require("./routes/adminRoutes");

app.use(express.json());

// User and Admin Routes
app.use("/user", userRouter);
app.use("/admin", adminRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
