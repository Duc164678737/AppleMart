export const addItem = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}

export const delItem = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}

export const reductionItem = (product) => {
    return {
        type: "REDUCTIONITEM",
        payload : product
    }
}

export const searchItem = (text) => {
    return {
        type: "SEARCHITEM",
        payload : text
    }
}