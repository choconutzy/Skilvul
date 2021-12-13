const express = require('express')
const router = express.Router()

const repository = require('../repository/repository')
const middlewares = require('../middlewares/middleware')
const validator = require('../middlewares/validator')
const hewan = repository.get()

router.get('/', (req, res, next) => {
    res.locals.result = { hewan };
    next();
}, middlewares.serializer)

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    const findHewan = hewan.find(e => e.id === parseInt(id))
    const result = {hewanFilter : {
        nama : findHewan.nama,
        spesies : findHewan.spesies
    }}
    res.locals.result = {result}
    next()
}, middlewares.serializer)

router.post('/', validator.create, (req, res, next) => {
    const {nama, spesies} = req.body;
    const createHewan = repository.create({id :hewan.length+1, nama : nama, spesies : spesies});
    res.locals.result = { createHewan };
    next();
},  middlewares.serializer)

router.patch('/:id', (req, res, next) => {
    const { id } = req.params
    const {nama, spesies} = req.body
    let hewanID = parseInt(id)
    const result = hewan.filter((data) => {
        if (data.id == hewanID) {
          data.nama = nama;
          data.spesies = spesies;
        }
      });
    next()
}, middlewares.serializer)

router.delete('/:id', (req, res, next) => {
    const { id } = req.params
    hewan.filter(e => e.id !== parseInt(id))[0]
    next()
}, middlewares.serializer)


module.exports = router;