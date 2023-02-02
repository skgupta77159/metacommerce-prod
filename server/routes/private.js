const express = require('express');
const router = express.Router();

const {getuser, checkauth, additemtocart, getorderhistory, buyproduct, removeitemfromcart, getAllCartItem} = require('../controllers/private');
const {protect} = require('../middleware/auth');

router.route("/getuser").get(protect, getuser);
router.route("/checkauth").get(protect, checkauth);
router.route("/addtocart").post(protect, additemtocart);
router.route("/removefromcarts").post(protect, removeitemfromcart);
router.route("/getcartitems").post(protect, getAllCartItem);
router.route("/getallorders").post(protect, getorderhistory);
router.route("/orderproduct").post(protect, buyproduct);
module.exports = router;