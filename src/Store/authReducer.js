import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
    name: 'AuthReducer',
    initialState: {
        // auth: JSON.parse(localStorage.getItem("authStatus")) || false,
        // registeredUser: JSON.parse(localStorage.getItem("Users")) || []
        auth: false,
        registeredUser: []
    },
    reducers: {
        registerUser: (state, action) => {
            const exist = state.registeredUser.find(user => user.email === action.payload.email);
            if (exist) {
                alert("This user has been registered...");
            } else {
                const registeredUser = [...state.registeredUser, action.payload];
                localStorage.setItem("Users", JSON.stringify(registeredUser));
                alert("Account successfully Registered...");
                return {
                    ...state,
                    registeredUser
                }
            }
        },
        loginUser: (state, action) => {
            const { email, password } = action.payload;
            const exist = state.registeredUser.find(user => user.email === email && user.password === password);
            const authStatus = true;
            // localStorage.setItem("authStatus", JSON.stringify(authStatus))
            if (exist) {
                return {
                    ...state,
                    auth: authStatus,
                }
            } else {
                alert(`Invalid Email or Password`);
            }
        },
        logout: (state) => {
            const authStatus = false;
            // localStorage.setItem("authStatus", JSON.stringify(authStatus))
            return {
                ...state,
                auth: authStatus
            }
        }
    }
})

export const { registerUser, loginUser, logout } = authReducer.actions;
export default authReducer.reducer;