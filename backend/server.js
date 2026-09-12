const path = require('path');

const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']); // Forces Node to use Google and Cloudflare DNS



const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config({ path: path.join(__dirname, '../.env') })
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const PORT = process.env.PORT || 5000
const app = express()


//Connect to Database
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get("/api/users", (req, res) => {
    res.status(201).json({ message: "Welcome to the Support Desk API" })
})


//Routes
app.use("/api/users", require("./routes/userRoutes"))
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))