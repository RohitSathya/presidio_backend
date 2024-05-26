// models/Property.js
const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  place: { type: String, required: true },
  area: { type: String, required: true },
  bedrooms: { type: String, required: true },
  bathrooms: { type: String, required: true },
  hospitalsNearby: { type: String, required: true },
  collegesNearby: { type: String, required: true },
  sellerId: { type: String, required: true },
  lc:{type:Number,default:0}
}, { timestamps: true });

module.exports = mongoose.model('Property', PropertySchema);
