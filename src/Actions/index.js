export const incNumber = (num) => {
    return{
        type:"Increment",
        payload: num
    }
}

export const decNumber = () => {
    return{type:"Decrement"}
}