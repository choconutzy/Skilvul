const express = require('express')
const Artiscontroller = require('../controllers/artis.controller')

//created a new router instance
const router = express.Router()

//create new `artis`
router.post('/', Artiscontroller.createNewArtis)
//get all `artis`
router.get('/', Artiscontroller.getAllArtis)
//get `artis` by id
router.get('/:id', Artiscontroller.getArtisByID)
router.get('/parameter', Artiscontroller.getArtisByQueryParams)
//update `artis` by id
router.patch('/:id', Artiscontroller.updateArtis)
//delete `artis` by id
router.delete('/:id', Artiscontroller.deleteArtis)

module.exports = router