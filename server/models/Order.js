const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "Please provide customerId"],
    },
    deliveryAddress: {
      type: String,
      required: [true, "Please provide deliveryAddress"],
    },
    userName: {
      type: String,
      required: [true, "Please provide customerName"],
    },
    storeId: {
      type: String,
      required: [true, "Please provide storeId"],
    },
    productId: {
      type: String,
      required: [true, "Please provide productId"],
    },
    productName: {
      type: String,
      required: [true, "Please provide Productname"],
    },

    productImg: {
      type: String,
      required: [true, "Please provide ProductUrl"],
    },

    productQuantity: {
      type: String,
      required: [true, "Please provide quantity"],
    },
    productPrice: {
      type: String,
      required: [true, "Please provide Product Price"],
    },
    totalPrice: {
      type: String,
      required: [true, "Please provide totalPrice"],
    },
    status: {
      type: String,
      default: "Processing",
  },
  review: {
    type: String,
    default: "",
},
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
