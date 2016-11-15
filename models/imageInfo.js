  const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

  let imageInfoSchema = new Schema({
    email: String,
    url: String,
    title: String,
    height: Number,
    width: Number,
    medium: String,
    material: String,
    price: Number,
    author: String,
    age: Number,
    size:[Number]
  },
{
  collection: 'imageInfo'
});

  let ImageInfo = mongoose.model('ImageInfo', imageInfoSchema);

  module.exports = ImageInfo;
