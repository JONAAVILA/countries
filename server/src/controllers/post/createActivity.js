const createActivity = require('../../handlers/postHandlers/activityPost.js');

const postActivity = async (req,res)=>{
    try {
        const { 
            name,
            difficulty,
            duration,
            season,
        } = req.body;

        const resPostActvity = await createActivity(name,difficulty,duration,season);
        
        return res.status(200).json(resPostActvity);
    } catch (error) {
        return res.status(400).json({error:error.message});
    }
    

}

module.exports = postActivity;