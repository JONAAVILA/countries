const { Country, Activity } = require('../../db.js');

const createActivity = async (name,difficulty,duration,season)=>{
        
        if(!name || !difficulty || !duration || !season){
            throw new Error("No found parameters");
        }
        
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
        })

        
        if(newActivity === undefined){
            throw new Error("No found country")
        }else {
            return { message: 'Actividad creada exitosamente' }
        }
        
}

module.exports = createActivity;