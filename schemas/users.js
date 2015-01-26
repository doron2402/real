'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var permission = {
    values: ['admin', 'owner', 'manager', 'employee', 'user'],
    message: 'Permission validator failed for path `{PATH}` with value `{VALUE}`'
};
//User status could be active/postponed/pending
var docState = {
    values: ['active', 'postponed', 'pending'],
    message: 'Doc state failed for path `{PATH}` with value `{VALUE}`'
};

var userGender = {
    values: ['F', 'M','O'],
    message: 'User Gender failed for path `{PATH}` with value `{VALUE}`'
};

var userSchema = new Schema({
    userId: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        index: { unique: true },
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date
    },
    permission: {
        type: String,
        enum: permission,
        default: 'user'
    },
    userStatus: {
        type: String,
        enum: docState,
        default: 'pending'
    },
    firstName: {
        type: String,
        lowercase: true
    },
    lastName: {
        type: String,
        lowercase: true
    },
    gender: { //M / F / O
        type: String,
        enum: userGender,
        default: 'O'
    },
    phone: {
        type: Number
    },
    photoUrl: {
        type: String,
        default:
    },
    invitedBy: [
        { userId: { type: String } }
    ],
    invite: [
         { userId: { type: String } }
    ],
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: { type: Date },
    title: { type: String }
}, {
    collection: 'users'ew
});

userSchema.pre('save', function(next){
  var now = new Date();
  this.updatedAt = now;
  if ( !this.createdAt ) {
    this.createdAt = now;
  }
  next();
});

userSchema.pre('update', function(next){
  var now = new Date();
  this.updatedAt = now;
  if ( !this.createdAt ) {
    this.createdAt = now;
  }
  next();
});

module.exports = userSchema;
