const { Country, Activity } = require('../../db.js');

const createActivity = async (name,difficulty,duration,season,countries)=>{
        
        if(!name || !difficulty || !duration || !season || !countries){
            throw new Error("No found parameters");
        }
        
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
            countries
        })

        const faundCountry = await Country.findByPk(idPais);
        if(faundCountry === undefined){
            throw new Error("No found country")
        }else {
            await newActivity.addCountry(faundCountry);
            return { message: 'Actividad creada exitosamente' }
        }
        
}

module.exports = createActivity;