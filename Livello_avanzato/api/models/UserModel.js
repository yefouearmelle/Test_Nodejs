
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
    required: 'UserId'
  }

});

module.exports = mongoose.model('Users', UserSchema);