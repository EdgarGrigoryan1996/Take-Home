import { createStore } from "redux"



const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	dob: "",
	agreement1: null,
	agreement2: null
}

function reducer(state = {}, action) {
	switch (action.type) {
		case "PERSONAL_DATA":
			return {
				...state,
				firstName: action.payload.firstName,
				lastName: action.payload.lastName,
				email: action.payload.email
			}
		case "BIRTHDAY_DATA":
			return {
				...state,
				dob: action.payload.dob
			}
		case "AGREEMENTS":
			return {
				...state,
				agreement1: action.payload.agreement1,
				agreement2: action.payload.agreement2
			}

		default:
			return state
	}
}
const store = createStore(reducer, initialState)

export default store