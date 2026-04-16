import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js"

const placeOrder = async (req, res) => {
  //COD method

  try {
    const { userId, items, amount, address } = req.body;

  const orderData = {
    userId,
    items,
    amount,
    address,
    paymentMethod: "COD",
    payment: false,
    date: Date.now(),
  };

  const newOrder = orderModel(orderData)
  newOrder.save()

  await userModel.findByIdAndUpdate(userId, {cartData:{}})

  res.json({success:true, message:"Order Placed."})

    
  } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
    
  }


};
const placeOrderStripe = async (req, res) => {};
const placeOrderRazorpay = async (req, res) => {};

//  from admin panel
const allOrders = async (req, res) => {};

const userOrder = async (req, res) => {};
const updateStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrder,
  updateStatus,
};
