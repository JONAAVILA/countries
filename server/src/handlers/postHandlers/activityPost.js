const { Country, Activity } = require('../../db.js');

const createActivity = async (idPais,name,difficulty,duration,season)=>{
        
        if(!idPais || !name || !difficulty || !duration || !season){
            throw new Error("No found parameters");
        }
        const newActivity = await Activity.create({
            idPais: idPais,
            name: name,
            difficulty: difficulty,
            duration: duration,
            season: season
        })
        return newActivity;
}

module.exports = createActivity;