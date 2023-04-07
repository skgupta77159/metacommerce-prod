const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const Product = require("../models/Product");
const Order = require("../models/Order");
//  SignIn user
exports.signin = async (req, res, next) => {
    const { userEmail, password } = req.body;
    if (!userEmail || !password) {
      return next(new ErrorResponse("Please provide an email and password", 400));
    }
    try {
      const user = await User.findOne({ userEmail }).select("+password");
      if (!user) {
        return next(new ErrorResponse("Invalid credentials", 401));
      }
      const isMatch = await user.matchPassword(password);
      if (!isMatch) {
        return next(new ErrorResponse("Invalid credentials", 401));
      }
      sendToken(user, 200, res);
    } catch (err) {
      next(err);
    }
  };

  //   Register user
exports.signup = async (req, res, next) => {
    const { userName, userEmail, password, cpassword } = req.body;
    console.log(req.body)
    try {
      const oldUser = await User.findOne({ userEmail: req.body.userEmail });
      // console.log(oldUser)
      if (password != cpassword) {
        return res.status(401).json({ sucess: false, error: "Invalid credential" });
      }
      if (oldUser) {
        return res.status(409).json({ sucess: false, error: "user already exist" })
      }
      const user = await User.create({
        userName,
        userEmail,
        password,
      });
  
      sendToken(user, 200, res);
    }
    catch (err) {
      next(err);
    }
  };
  

  //getproduct
  exports.getsingleproduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.body.productId);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ sucess: false, error: "Product not found" });
        }
    } catch (err) {
        next(err);
    }
};



  const sendToken = async (user, statusCode, res) => {
    const token = await user.getSignedJwtToken();
    res.status(statusCode).json({ sucess: true, token });
  };


//Getreviews
exports.getreviews = async (req, res, next) => {
  try {
      // console.log(req.body.productId)
      const order = await Order.find({ productId: req.body.productId }).sort({createdAt: -1});
      res.status(200).json(order);
  } catch (err) {
      next(err);
      console.log(err)
  }
}

//update status
exports.updatestatus = async (req, res, next) => {
    
  try {
      const order = await Order.findById(req.body.orderId);
      if (order) {
          await order.updateOne({ $set: { status: req.body.status } });
      }
      res.status(200).json({ sucess: true, message: "Status updated Successfully" });
  } catch (err) {
      next(err);
      console.log(err)
  }
}

//GetAllorderforAdmin
exports.getAllOrderedItems= async (req, res, next) => {
  try {
      const order = await Order.find({}).sort({createdAt: -1});
      res.status(200).json(order);
  } catch (err) {
      next(err);
      console.log(err)
  }
}