export const newBooking = (data) =>{
    return{
        type: "NEW_BOOKING",
        data: data,
    };
}

export const addPackages = (data) =>{
    // console.log(data)
    return{
        type: "ADD_PACKAGES",
        data: data,
    };
}
export const addServies = (data) =>{
    return{
        type: "ADD_SERVICES",
        data: data,
    };
}
export const deleteServie = (data) =>{
    return{
        type: "DELETE_SERVICES",
        data: data,
    };
}
export const confirmBooking = (totalPrice) =>{
    return{
        type: "CONFIRM",
        totalPrice: totalPrice,
    };
}