//Require mongoose in the userModel file:
const mongoose = require("mongoose");

//Create a constant (UserSchema) and assign it the mongoose schema:
const urlSchema = new mongoose.Schema(
  {
    //Specify how the fields should work by adding some mongoose option:
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    originalUrl: {
      type: String,
      require: true,
      unique: false,
    },
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

//Finally, export UserSchema with the following code:
module.exports = mongoose.model.urlSchema || mongoose.model("Urls", urlSchema);

//The code above is saying: "create a user table or collection if there is no table with that name already".
//You have completed the model for the user. The user collection is now ready to receive the data that is to be passed to it.
