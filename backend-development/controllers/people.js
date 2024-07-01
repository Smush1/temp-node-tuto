let { people } = require('../data')


const getPeople = (req, res)=> {
    res.status(200).json(people) 
}

const createPerson = (req, res)=>{
    const { name } = req.body
    console.log(req.body)
    if(!name){
        return res.send("Please provide credentials")
    }
    res.status(201).json([...people, name ])
}

const getSinglePerson = (req, res)=> {
    const { id } = req.params
    console.log(id)

   
    const singlePerson = people.find((person)=>{
        if (person.id === Number(id)){
            return person
        }
            
    })
    if(!singlePerson){
        res.status(404).json(`There is no entry with ${id}`)
    }
    res.status(200).json(singlePerson) 
}


const updatePerson = (req,res)=>{
    const { name } = req.body
    const { id } = req.params

   const newPersonList = people.map((person)=>{
        if (person.id === Number(id)){
            person.name = name
        }
        return person
    })

    res.json(newPersonList)
}

const deletePerson = (req,res)=>{

    
    const { id } = req.params

    const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` })
  }

   const newPersonList = people.filter((person)=>{
        if (person.id !== Number(id)){ 
            return person           
        }      
    })

    res.json(newPersonList)
}

module.exports = { 
    getPeople,
    createPerson,
    getSinglePerson,
    updatePerson,
    deletePerson,
    
 }