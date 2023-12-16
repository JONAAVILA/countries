const { Country, Activity } = require('../../db.js');

const createActivity = async (inputValues, addedCountries)=>{
        
        const { name, difficulty, duration, season } = inputValues

        if(!name || !difficulty || !duration || !season){
            throw new Error("No found parameters");
        }
        
    try {
            const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
            })

        if(!newActivity || !addedCountries){
            throw new Error("No found country")
        }else {
            const countryInstances = addedCountries.map(country => Country.build(country));
            await newActivity.addCountries(countryInstances);
            return { message: 'Activity created successfully' }
        }
    } catch (error) {
        throw new Error("Error creating activity:" + error.message)
    }   
}

module.exports = createActivity;