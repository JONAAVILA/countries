const allActivities = require('../../handlers/getHandlers/allActivities.js');

const getAllActivities = async (req,res)=>{
    try {
        const activities = await allActivities();
        return res.status(200).json(activities);
    } catch (error) {
        return res.status(400).json({error:error.message});
    }

}

module.exports = getAllActivities;