const createActivity = require('../../handlers/postHandlers/activityPost.js');

const postActivity = async (req,res)=>{
    const { id,
            name,
            difficulty,
            duration,
            season 
        } = req.body;

}

module.exports = postActivity;