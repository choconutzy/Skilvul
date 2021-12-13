module.exports = {
    create: (req, res, next) => {
        const allowedspesies = ["kucing", "anjing", "kelinci"]
        const {spesies} = req.body;
        if(!allowedspesies.includes(spesies)){
            res.status(400).send({error : "Spesies not valid"})
            return
        }
        next()
    }
}