export const increment = (counterData) => {
    return {
        type: 'INCREMENT',
        payload: counterData
    }
}

export const decrement = (counterData) => {
    return {
        type: 'DECREMENT',
        payload: counterData
    }
}

export const reset = () => {
    return {
        type: 'RESET',
    }
}