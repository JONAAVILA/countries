const { Country, Activity } = require('../db.js');

const createActivity = async (activity)=>{
    const newActivity = await Activity.create({
            name: activity.name,
            difficulty: activity.difficulty,
            duration: activity.duration,
            season: activity.season
    })

    Promise.all(activity.countries.map(async e => {
            let activityCountry = await Country.findOne({
                    were:{
                        id:e
                    }
            })
            await newActivity.addCountry(activityCountry);
    }))
}

module.exports = createActivity;