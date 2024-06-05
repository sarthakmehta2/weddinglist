const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mehtasarthak2:UyXpqDokZPWfmmku@cluster0.pmhujc1.mongodb.net/");

const guestSchema = new mongoose.Schema({
    name: String,
    age: String,
    confirmed: Boolean,
    departure: String,
});

const guest = mongoose.model('guest', guestSchema);

module.exports = {
    guest: guest
}

