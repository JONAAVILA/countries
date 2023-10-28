const { Country, Activity } = require('../../db.js');

const createActivity = async (idPais,name,difficulty,duration,season)=>{
        
        if(!idPais || !name || !difficulty || !duration || !season){
            throw new Error("No found parameters");
        }
        const [newActivity, ready] = await Activity.findOrCreate({
            were:{
                name,
                difficulty,
                duration,
                season
            },
            defaults: { difficulty, duration, season }
        });

        if(!ready){
            throw new Error("Data base ready");
        }

        const country = await Country.findByPk(idPais);
        if (!country) {
            throw new Error("Country not found");
        };
        await newActivity.addCountry(country)
        return newActivity;
        
}

module.exports = createActivity;