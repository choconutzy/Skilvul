const express = require('express')

//created a new router instance
const router = express.Router()

//create new `artis`
router.post('/:id', ()=>{})
//get all `artis`
router.get('/', (req,res)=>{
    res.send({msg:'get all artis'})
})
//get `artis` by id
router.get('/:id', ()=>{})
//update `artis` by id
router.patch('/:id', ()=>{})
//delete `artis` by id
router.delete('/:id', ()=>{})

module.exports = router