const { Activity, CountryActivity } = require('../../db.js');

const allActivities = async ()=>{
    try {
        const allActivity = await Activity.findAll();
        const allCountryActivity = await CountryActivity.findAll()
        if(allActivity === undefined) throw new Error("AllActivity error")
        if(allCountryActivity === undefined) throw new Error("AllCountryActivity error")
         return {
            ...allActivity,
            ...allCountryActivity
        }
    } catch (error) {
        console.log(error)
        return {error: error.message}
    }
    
}

module.exports = allActivities;