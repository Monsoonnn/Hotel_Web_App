import { getTodayDate } from "../../services/convert";


const initBooking = []

export const bookingReducer = (state = initBooking, action) => {
    var newState = { ...state };
    switch (action.type) {
        case "NEW_BOOKING":
            newState = {
                hotel: action.data.hotel,
                checkIn: action.data.checkIn,
                checkOut: action.data.checkOut,
                adult: action.data.numberAdult,
                child: action.data.numberChild,
                room: action.data.numberRoom,
                offset: action.data.offset,
                bookingDate: getTodayDate(),
            };
            // console.log(newState)
            return newState;
        case "ADD_PACKAGES":
            newState = {
                ...newState,
                roomID: action.data.roomID,
                packageId: action.data.packageID,
                price: action.data.price,
            };
            console.log(newState)
            return newState
        case "ADD_SERVICES":
            const hasServices = 'services' in newState;
            
            if (hasServices) {
                const existingService = newState.services.find(service => {
                    return JSON.stringify(service) === JSON.stringify(action.data);
                  });
                  
                  if (!existingService) {
                    newState.services = newState.services.concat([action.data]);
                  }
                
            } else {
                newState.services = [action.data];
            }
            // console.log(newState)
            return newState
        case "DELETE_SERVICES":
            newState.services = newState.services.filter(service => {
                return JSON.stringify(service) !== JSON.stringify(action.data);
              });
            return newState
        case "CONFIRM":
            newState = {
                ...newState,
                totalPrice: action.totalPrice,
            }
            console.log(newState)
            return newState
        case "CLEAR":
            console.log(newState)
            return []
        default:
            return state;
    }

}
