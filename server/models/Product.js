const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  store_id:{
    type: String,
    required: [true, "Please provide storeId"],
  },
  product_name: {
    type: String,
    required: [true, "Please provide Productname"],
  },
  product_description: {
    type: String,
    required: [true, "Please provide ProductDescription"],
  },
  product_image: {
    type: String,
    required: [true, "Please provide ProductUrl"],
},
  product_price: {
    type: Number,
    required: [true, "Please provide productPrice"],
  },
  discount : {
    type : Number , 
    required: [true, "Please provide Discount"],
  }
  
},
{timestamps: true});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;