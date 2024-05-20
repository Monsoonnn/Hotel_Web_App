import { eraseCookie, getCookie, setCookie } from "../../services/cookies";

const isLogin = []


export const isUserLogin = (state = isLogin, action) => {
    var newState = { ...state };
    switch (action.type) {
        case "LOGIN":
            // console.log(action)
            newState = {
                email: action.data.data.user.email,
                name: action.data.data.user.name,
                photo: action.data.data.user.photo,
                role: action.data.data.user.role,
                token: action.token,
            };
            // setCookie("jwt",action.data.token,1)
            // console.log(newState)
            return newState;
        case "CLEAR":
            // eraseCookie("jwt")
            // console.log(newState)
            return []
        default:
            return state;
    }

}
