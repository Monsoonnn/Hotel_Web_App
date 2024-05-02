export const newBooking = (data) =>{
    console.log(data.checkIn.$d);
    return{
        type: "NEW_BOOKING",
        data: data,
    };
}

export const addPackages = (data) =>{
    return{
        type: "ADD_PACKAGES",
        data: data,
    };
}
export const deleteItem = (id) =>{
    return{
        type: "DELETE_ITEM",
        id: id
    };
}
export const deleteALL = (id) =>{
    return{
        type: "DELETE_ALL",
    };
}