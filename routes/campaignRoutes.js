const express = require('express');
const router = express.Router();
const { createCampaign, getCampaigns, updateCampaign, deleteCampaign } = require('../controllers/campaignController');

router.post('/', createCampaign);
router.get('/', getCampaigns);
router.put('/:id', updateCampaign);
router.delete('/:id', deleteCampaign);

module.exports = router;
