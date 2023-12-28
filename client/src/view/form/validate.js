export default function validate (inputs){
    const errors = {}

    const regexNameCountry = /^[a-zA-Z]+$/;
    const validateNameCountry = inputs.name.length && inputs.name.length > 1 && regexNameCountry.test(inputs.name)
    if(inputs.name && !validateNameCountry){
        errors['name'] = "Enter a valid name"
    }else{
        errors['name'] = ""
    }

    const regexDifficulty = /^[1-5]$/
    const validateDifficulty = regexDifficulty.test(inputs.difficulty)
    if(!validateDifficulty && inputs.difficulty){
        errors['difficulty'] = "Enter a valid value"
    }else{
        errors['difficulty'] = ""
    }

    const regexDuration = /^(0?|[1-9]|[1][0-9]|24)$/
    const validateDuration = regexDuration.test(inputs.duration)
    if(inputs.duration && !validateDuration){
        errors['duration'] = "Enter a valid value"
    }else{
        errors['duration'] = ""
    }

    const regexSeason = /^(Summer|Autumn|Winter|Spring)$/
    const validateSeason = regexSeason(inputs.season)
    if(inputs.season && !validateSeason){
        errors['season'] = "Invalid value"
    }else{
        errors['season'] = ""
    }

    const regexCountry = 

    return errors;
}