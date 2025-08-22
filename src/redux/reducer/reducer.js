let initialState = {
    contactList: [],
    searchPerson: ''
}


function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (action.type) {
        case "ADD_CONTACT":
            return { ...state, contactList: [...state.contactList, { name: payload.name, phoneNumber: payload.phoneNumber }] }
        case "SEARCH":
            return { ...state, searchPerson: payload.searchPerson };
        case "DELETE_CONTACT":
            return {
                ...state,
                contactList: state.contactList.filter(
                    (item) => item.phoneNumber !== payload.phoneNumber
                ),
            };
        default:
            return { ...state };
    }

}

export default reducer