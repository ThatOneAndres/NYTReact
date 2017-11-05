//Save articles model

//Require mongoose
var mongoose = require("mongoose");
// Schema
var Schema = mongoose.Schema;

// Create a saveSchema
var saveSchema = new Schame({
    headline:{
        type: String,
        required: true,
        unique: { index: { unique: true } }
    },

    url: {
        type: String,
        required: true
    }
});

var Save = mongoose.model("Save", saveSchema);

module.exports = Save;