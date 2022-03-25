export const addItem = (data) => {
    return {
        type: "ADD_ITEM",
        uid: data.uid,
        price: data.price,
        quantity: data.quantity,
        img_path: data.img_path,
        name: data.name,
        category: data.category,
    }
}

export const removeItem = (data) => {
    return {
        type: "REMOVE_ITEM",
        uid: data.uid,
        quantity: data.quantity
    }
}

export const setCount = (data) => {
    return {
        type: "SET_COUNT",
        uid: data.uid,
        quantity: data.quantity
    }
}

export const cartReset = () => {
    return {
        type: "RESET_CART"
    }
}