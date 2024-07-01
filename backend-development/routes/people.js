const express = require('express')
const router = express.Router()
let { people } = require('../data')
const {getPeople, 
    createPerson, 
    getSinglePerson, 
    updatePerson, 
    deletePerson} =require('../controllers/people')



router.get('/people', getPeople )



router.post('/people', createPerson )

router.get('/people/:id', getSinglePerson)

router.put('/people/:id', updatePerson)



router.delete('/people/:id', deletePerson)


module.exports =  router 
