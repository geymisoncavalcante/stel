const express = require('express')
const homeController = require('../controllers/homeRouter')
const router = express.Router()



router.get('/',homeController.home)









module.exports = router