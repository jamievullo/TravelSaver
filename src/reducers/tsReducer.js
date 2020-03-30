//set reducer to default state and pass in action as argument
const tsReducer = (state = {
        user: {}
    }, action) => {
    
    switch(action.type) {
        case 'ADD_NEW_USER': 
            //email from user, id from rails
            const {email, id} = action.payload
            const newUser = { email, id }
            //spread operator is used to copy previous state to avoid mutating arguments
            return {
                ...state,
                user: Object.assign(newUser)
            }
        case 'LOGIN_USER':
            const loggedInEmail = action.payload
            const loggedInId = action.payload
            const user = Object.assign(loggedInEmail, loggedInId)
            console.log(user)
            return {
                ...state,
                // might not need ln-24 because of doing it on ln-19
                user: Object.assign(user)
            }

        case 'LOGOUT_USER':
            return {
                user: {}
            }
            //default return in case action type/match isnt found in switch
        default: 
            return state
    }
}

export default tsReducer