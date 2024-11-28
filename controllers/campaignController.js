const AdCampaign = require('../models/AdCampaign');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Create Campaign
const createCampaign = async (req, res) => {
  try {
    const newCampaign = new AdCampaign(req.body);
    await newCampaign.save();
    res.status(201).json(newCampaign);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Campaigns
const getCampaigns = async (req, res) => {
  try {
    const campaigns = await AdCampaign.find();
    res.status(200).json(campaigns);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Campaign
const updateCampaign = async (req, res) => {
  try {
    const updatedCampaign = await AdCampaign.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedCampaign);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Campaign
const deleteCampaign = async (req, res) => {
  try {
    await AdCampaign.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: 'Campaign deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createCampaign, getCampaigns, updateCampaign, deleteCampaign };
