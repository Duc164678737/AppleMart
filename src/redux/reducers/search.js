const search = '';

const searchItem = (state = search, action) => {
    switch (action.type) {
        case "SEARCHITEM":
            return {
                state: action.payload
        }
        default: return state;
    }
}

export default searchItem;