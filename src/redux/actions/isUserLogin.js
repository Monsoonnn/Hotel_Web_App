export const loginUser = (data, token) =>{
    return{
        type: "LOGIN",
        data: data,
        token: token,
    };
}

export const clearLogin = () =>{
    return{
        type: "CLEAR",
    };
}