
const validateForm = input => {
    if (input.length < 1) {
        return "Please enter a valid city name"
    } else {
        return null
    }
}

export default validateForm;