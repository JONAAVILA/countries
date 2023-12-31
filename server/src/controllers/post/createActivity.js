const createActivity = require('../../handlers/postHandlers/activityPost.js');

const postActivity = async (req,res)=>{
    try {
        const { 
            inputValues,
            addedCountries
        } = req.body;

        const resPostActvity = await createActivity(inputValues, addedCountries);
        
        return res.status(200).json(resPostActvity);
    } catch (error) {
        return res.status(400).json({error:error.message});
    }
    

}

module.exports = postActivity;