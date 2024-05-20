const isLogin = []

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    console.log("Không có")
    return null;
}


export const isUserLogin = (state = isLogin, action) => {
    var newState = { ...state };
    switch (action.type) {
        case "LOGIN":
            newState = {
                cookies: getCookie(`jwt`),
            };
            return newState;
        case "CLEAR":
            // console.log(newState)
            return []
        default:
            return state;
    }

}
