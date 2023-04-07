const express = require('express');
const router = express.Router();
const {signin, signup, getsingleproduct, getreviews} = require('../controllers/auth');
 

//user Auth
router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/getproduct").post(getsingleproduct);
router.route("/getreviews").post(getreviews)

module.exports = router;