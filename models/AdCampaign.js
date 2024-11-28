const mongoose = require('mongoose');

const AdCampaignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  budget: { type: Number, required: true },
  adType: { type: String, enum: ['skippable', 'non-skippable', 'overlay', 'display'], required: true },
  targetAudience: {
    age: { type: String, required: true },
    gender: { type: String, required: true },
    location: { type: String, required: true },
    language: { type: String, required: true }
  },
  keywords: [String],
  videoUrl: { type: String }
});

module.exports = mongoose.model('AdCampaign', AdCampaignSchema);
