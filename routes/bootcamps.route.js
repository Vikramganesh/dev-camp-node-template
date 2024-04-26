const express = require('express');
const router = express.Router();
const {
       getBootcamps,
       getBootcamp,
       createBootcamp,
       updateBootcamp,
       deleteBootcamp
    } = require('../controllers/bootcamps.controller')
const {protect} = require('../middlewares/auth')


router
    .route('/')
    .get(getBootcamps)
    .post(protect,createBootcamp)

router
    .route('/:id')
    .get(getBootcamp)
    .put(protect,updateBootcamp)
    .delete(protect,deleteBootcamp)

module.exports = router;