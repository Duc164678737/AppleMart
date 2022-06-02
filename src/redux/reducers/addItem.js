const addItem = [];

const addItems = (state = addItem, action) => {
    switch (action.type) {
        case "ADDITEM":
            const productInCart = state.find(
                (item) => item.id === action.payload.id
            )
            if (!productInCart) {
                return [
                    ...state,
                    action.payload
                ]
            }

            else {
                let newCart = state;
                const cartIndex = newCart.findIndex(
                    obj => obj.id == action.payload.id
                )
                if (newCart[cartIndex].quantity === undefined) {
                    newCart[cartIndex].quantity = 2;
                } else {
                    newCart[cartIndex].quantity = newCart[cartIndex].quantity + 1;
                }
                return [...newCart];
            }
            
        case "REDUCTIONITEM":
            let newCart = state;
            const cartIndex = newCart.findIndex(
                obj => obj.id == action.payload.id
            )
            if (newCart[cartIndex].quantity > 1) {
                newCart[cartIndex].quantity = newCart[cartIndex].quantity - 1;
            } else {
                return state = state.filter((i) => {
                    return i.id !== action.payload.id
                })
            }
            return [...newCart];

        case "DELITEM":
            return state = state.filter((i) => {
                return i.id !== action.payload.id
            })
        default: return state;
    }
}

export default addItems;