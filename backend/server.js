import cors from "cors";

const path = require('path');

const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']); // Forces Node to use Google and Cloudflare DNS


const cors = require("cors")
const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config({ path: path.join(__dirname, '../.env') })
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const PORT = process.env.PORT || 5000
const app = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://support-ticket-app-frontend.onrender.com");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");

    // IMMEDIATELY respond to preflight OPTIONS requests safely
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});



//Connect to Database
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get("/api/users", (req, res) => {
    res.status(201).json({ message: "Welcome to the Support Desk API" })
})


//Routes
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/tickets", require("./routes/ticketRoutes"))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))