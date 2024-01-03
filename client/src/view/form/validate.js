export default function validate (inputs){
    const errors = {}

    const regexNameActivity = /^[a-zA-Z0-9 ]+$/;
    const validateNameActivity = regexNameActivity.test(inputs.name)
    if(inputs.name && !validateNameActivity){
        errors['name'] = "Enter a valid name"
    }else{
        errors['name'] = ""
    }

    const regexDifficulty = /^[1-5]$/
    const validateDifficulty = regexDifficulty.test(inputs.difficulty)
    if(!validateDifficulty && inputs.difficulty){
        errors['difficulty'] = "Enter a number from 1 to 5"
    }else{
        errors['difficulty'] = ""
    }

    const regexDuration = /^(0?|[1-9]|[1][0-9]|24)$/
    const validateDuration = regexDuration.test(inputs.duration)
    if(inputs.duration && !validateDuration){
        errors['duration'] = "Enter a number from 1 to 24"
    }else{
        errors['duration'] = ""
    }

    const regexSeason = /^(Summer|Autumn|Winter|Spring)$/
    const validateSeason = regexSeason.test(inputs.season)
    if(inputs.season && !validateSeason){
        errors['season'] = "Invalid value"
    }else{
        errors['season'] = ""
    }

    // const regexCountry = /^[a-zA-Z]+$/
    // const validateCountry = regexCountry.test(inputs.country)
    // if(inputs.country && !validateCountry){
    //     errors['country'] = "Invalid name country"
    // }else{
    //     errors['country'] = ""
    // }

    return errors;
}