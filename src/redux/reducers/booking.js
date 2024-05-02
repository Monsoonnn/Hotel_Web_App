
const initBooking = []

export const bookingReducer = (state = initBooking, action) => {
    var newState = {...state};
    switch (action.type) {
        case "NEW_BOOKING":
            newState = {
                id: action.data.id,
                hotel: action.data.hotel,
                ci: action.data.checkIn.$d,
                co: action.data.checkOut.$d,
                Adult: action.data.numberAdult,
                Child: action.data.numberChild,
                Room: action.data.numberRoom,
                offset: action.data.offset,
            };
            // console.log(newState)
            return newState;
        case "ADD_PACKAGES":
            newState = {
                ...newState,
                roomID: action.data.roomID,
                packageID: action.data.packageID,
                price: action.data.price,
            };
            console.log(newState)
            return newState
        case "DELETE_ITEM":
            return newState.filter(item => item.id !== action.id)
        case "DELETE_ALL":
            return []
        default:
            return state;
    }
    
}
