const express = require('express');
const app = express();
require('dotenv').config();
require('./connection/conn');   
const User = require('./routes/userauth');
const Books = require('./routes/book');
const Favourite = require('./routes/favourite');
const Cart1 = require('./routes/cart');
const Order = require('./routes/order');
app.use(express.json());
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

//route 
app.use("/api/v1",User);
app.use("/api/v1",Books);
app.use("/api/v1",Favourite);
app.use("/api/v1",Cart1);
app.use("/api/v1",Order);
//creating port
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});