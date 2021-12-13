module.exports = {
    logger: (req, res, next) => {
        console.log(`[${new Date().toString()}] ${req.method} "${req.url}": ${JSON.stringify(req.headers["user-agent"])}`);
        next();
    },
    serializer: async (req, res) => {
        try {
            const { result } = await res.locals;
            const { message } = await {"message":`success ${req.method} data Pet`};
            if(result){
                res.status(200).send({message, ...result});
            } else{
                res.status(200).send({message})
            }          
        } catch (error) {
            res.status(400).send({error: error.message})
        }
    },
}