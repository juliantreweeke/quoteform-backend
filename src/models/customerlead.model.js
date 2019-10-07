let mongoose = require('mongoose')
const config = require("../../config.js");
const {
    user,
    password,
    server,
    database
} = config;

mongoose.connect(`mongodb+srv://${user}:${password}@${server}/${database}`);

let CustomerleadSchema = new mongoose.Schema({
    name: String,
    rooms: Number,
    rooms: Number,
    bathrooms: Number,
    phone: String,
    frequency: Number,
    email: {
        type: String
    }
})

module.exports = mongoose.model('Customerlead', CustomerleadSchema);