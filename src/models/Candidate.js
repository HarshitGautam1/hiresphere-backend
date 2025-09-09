const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  contactNumber:{
    type: String,
    trim: true,
  },
  bio:{
    type: String,
  },
  education: [{
    institution: {
      type: String,
    },
    degree:{
      type: String,
    },
    passingYear: {
      type: Date
    },
  }],
  experience: [{
    title:{type: String},
    company:{type: String},
    duration:{type: String},
    description:{type: String},
  }],
  resumeUrl:{
    type: String,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Candidate', candidateSchema);