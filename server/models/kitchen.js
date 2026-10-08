const mongoose = require("mongoose");

const kitchenSchema = new mongoose.Schema({
  name: String,
  rating: String,
  reviews: String,
  tags: String,
  price: String,
  address: String,
  image: String,

  galleryPhotos: [
    {
      title: String,
      url: String,
    },
  ],

  suggestedItems: [
    {
      id: Number,
      name: String,
      price: Number,
      oldPrice: Number,
      type: String,
      img: String,
    },
  ],

  menuData: Object, // easiest way for nested menu
});

module.exports = mongoose.model("Kitchen", kitchenSchema);
