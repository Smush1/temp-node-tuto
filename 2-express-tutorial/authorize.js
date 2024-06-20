const authorize = (req,res,next) =>{

    const {user} = req.query
    if(user === 'sumesh'){
        req.user = { name : "sumesh" }
    }
    else {
        res.status(404).send('Unauthorized')
    }

    console.log("authorize")
    next()
}

module.exports = authorize ;

