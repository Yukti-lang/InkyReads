const  router = require('express').Router();
const Book = require("../models/book");
const Order = require("../models/order");
const User = require("../models/user");
const { authenticateToken } = require("./userToken"); 

//place order
router.post("/placeorder", authenticateToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const { order } = req.body;
        for(const orderData of order) {
            const newOrder = new Order({ user:id ,book : orderData._id });
            const orderDataFromDb = await newOrder.save();
            //saving order in user model
            await User.findByIdAndUpdate(id, {
                $push: { orders: orderDataFromDb._id },
            });
            //clearing cart
            await User.findByIdAndUpdate(id, {
                $pull: { cart: orderData._id },
            });
        }
        return res.json ({
            status:"Success",
            message:"Order placed successfully",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal server error in place order" });
    }
});
// get order history
router.get("/orderhistory", authenticateToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const userData = await User.findById(id).populate({
            path : "orders",
            populate: { path: "book" },
        });
        const ordersData = userData.orders.reverse();
        return res.json({
            status: "Success",
            data : ordersData,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal server error in order history" });
    }
});
module.exports = router;