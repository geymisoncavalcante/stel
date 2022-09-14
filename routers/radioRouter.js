const express = require('express')
const router = express.Router()
const radioController = require('../controllers/radioController')



router.get('/', radioController.radio)




module.exports = router