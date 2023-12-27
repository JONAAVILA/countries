export default function validate (inputs){
    const errors = {}
    const regexNameCountry = /^[a-zA-Z]+$/;

    const validateNameCountry = inputs.name.length && inputs.name.length > 1 && regexNameCountry.test(inputs.name)
    if(inputs.name && !validateNameCountry){
        errors['name'] = "Enter a valid name"
    }else{
        errors['name'] = ""
    }

    const regexDifficulty = /^(0?|[1-9]|[1][0-9]|24)$/
    const validateDifficulty = regexDifficulty.test(inputs.difficulty)
    if(!validateDifficulty && inputs.difficulty){
        errors['difficulty'] = ""
    }
}