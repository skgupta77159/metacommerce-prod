const express = require('express');
const router = express.Router();
const {signin, signup, getsingleproduct, getreviews, updatestatus, getAllOrderedItems} = require('../controllers/auth');
 

//user Auth
router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/getproduct").post(getsingleproduct);
router.route("/getreviews").post(getreviews)
router.route("/updatestatus").post(updatestatus);
router.route("/getallordereditem").get(getAllOrderedItems);
module.exports = router;