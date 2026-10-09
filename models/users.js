let mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    role: {
        type: String,
        enum: ["HR", "EMPLOYEE"]
    }
});

let users = mongoose.model("users", userSchema);

module.exports = users;
