const express = require('express');
const router = express.Router();
const signsCtrl = require('../controllers/signs');

router.post('/', signsCtrl.createOne);
router.get('/', signsCtrl.getAll);
router.get('/:signId', signsCtrl.getOne);
router.patch('/:signId', signsCtrl.updateOne);
router.delete('/:signId', signsCtrl.deleteOne);

module.exports = router