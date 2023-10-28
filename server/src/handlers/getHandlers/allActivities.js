const { Activity } = require('../../db.js');

const allActivities = async ()=>{

    const allActivity = await Activity.findAll();
    return allActivity
}

module.exports = allActivities;