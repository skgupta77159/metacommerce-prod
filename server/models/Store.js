const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
   
    storeName: {
      type: String,
      required: [true, "Please provide Store Name"],
    },
    storeAddress: {
        type: String,
        required: [true, "Please provide Store Address"],
      },
  
})

const Store = mongoose.model("Store", StoreSchema);

module.exports = Store;
