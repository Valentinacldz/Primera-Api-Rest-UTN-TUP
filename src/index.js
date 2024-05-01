const express = require('express')
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");
const stockRoutes = require("./routes/stock");
const proveedoresRoutes = require("./routes/proveedores");
const app =express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', stockRoutes);
app.use('/api', proveedoresRoutes);

// routes 
app.get('/', (reg, res)=>{
    res.send("welcome to my api jeje");
});

// mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port' ,port));
