const { Activity, Country } = require('../../db.js');

const allActivities = async ()=>{
    try {
        const activities = await Activity.findAll({
            include: [Country],
          })
    
        if(!activities.length) throw new Error("Activities not found")
        return activities
    } catch (error) {
        console.log(error)
        return {error: error.message}
    }   
}

module.exports = allActivities;