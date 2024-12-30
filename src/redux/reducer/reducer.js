let initialState = {
    contactList: [],
    searchPerson: ''
}

// 항상 두개의 변수를 받는다. 
function reducer(state = initialState, action) {
    // eslint-disable-next-line
    const { type, payload } = action

    switch (action.type) {
        case "ADD_CONTACT":
            return { ...state, contactList: [...state.contactList, { name: payload.name, phoneNumber: payload.phoneNumber }] }
        case "SEARCH":
            return { ...state, searchPerson: payload.searchPerson }
        default:
            return { ...state };
    }

}

export default reducer