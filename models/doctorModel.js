const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    profile_id: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    specialization: { type: String },
    username: { type: String },
    password: { type: String },
    email: { type: Number },
    userType: { type: String, default: "doctor" },
    profileImage: { type: String },
    clientVendor: { type: String },
    clientBrowser: { type: String },
    approved: { type: Boolean, default: false }
}, {
    versionKey: false,
    timestamps: true
});

doctorSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("doctors", doctorSchema);