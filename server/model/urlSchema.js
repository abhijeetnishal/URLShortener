const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
        unique: false
    },
    shortId: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

// Export the model directly without the conditional assignment
module.exports = mongoose.model("Url", urlSchema);