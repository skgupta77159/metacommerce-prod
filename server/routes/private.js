const express = require('express');
const router = express.Router();

const {getuser, checkauth, additemtocart, getorderhistory, buyproduct, removeitemfromcart, getAllCartItem, updatestatus, cancelorder} = require('../controllers/private');
const {protect} = require('../middleware/auth');

router.route("/getuser").get(protect, getuser);
router.route("/checkauth").get(protect, checkauth);
router.route("/addtocart").post(protect, additemtocart);
router.route("/removefromcarts").post(protect, removeitemfromcart);
router.route("/getcartitems").post(protect, getAllCartItem);
router.route("/getallorders").post(protect, getorderhistory);
router.route("/orderproduct").post(protect, buyproduct); 
router.route("/updatestatus").post(protect, updatestatus);
router.route("/cancelorder").put(protect, cancelorder)
module.exports = router;