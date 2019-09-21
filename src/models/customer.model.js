let mongoose = require('mongoose')
const config = require("../../config.js");
const {
    user,
    password,
    server,
    database
} = config;

mongoose.connect(`mongodb+srv://${user}:${password}@${server}/${database}`);

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema);