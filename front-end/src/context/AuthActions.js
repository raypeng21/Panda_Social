export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    package: user,
});



export const LoginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    package: error
});

