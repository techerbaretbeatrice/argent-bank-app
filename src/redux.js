import { configureStore, createSlice } from "@reduxjs/toolkit";
import Api from "./Api";

//slice login
const loginSlice = createSlice({
    name: "login",
    initialState: {
        token: localStorage.getItem('jwt'),

    },

    reducers: {
        signIn: (state, action) => {
            //{type:login/signIn, payload:{token}}
            state.token = action.payload.token;
        },
        signOut: (state, action) => {
            //{type: login/signOut}
            state.token = null
        },

    }

})

//slice user
export const userSlice = createSlice({
    name: "user",
    initialState: {
        firstName: null,
        lastName: null,
        openEditor: false,
    },
    reducers: {
        loadProfile: (state, action) => {
            //{type: user/loadProfile}
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        },
        displayEditor: (state, action) => {
            //{type: user/displayEditUsername}
            state.openEditor = true
        },
        hideEditor: (state, action) => {
            //{type: user/displayEditUsername}
            state.openEditor = false
        },
        editProfile: (state, action) => {
            //{type: user/editProfile}
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName

        },
    }
})

//slice account
const accountAmountSlice = createSlice({
    name: "accountAmount",
    initialState: {
        checkingAmount: null,
        savingAmount: null,
        creditAmount: null,
    },
    reducers: {
        setCheckingAmount: (state, action) => {
            state.checkingAmount = action.payload.checkingAmount
        },
        setSavingAmount: (state, action) => {
            state.savingAmount = action.payload.savingAmount
        },
        setCreditAmount: (state, action) => {
            state.creditAmount = action.payload.creditAmount
        }
    }

})

//actions
export const { signIn, signOut } = loginSlice.actions;
export const { loadProfile, displayEditor, editProfile } = userSlice.actions;
export const { setCheckingAmount, setSavingAmount, setCreditAmount } = accountAmountSlice.actions;


// configurate store
export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        user: userSlice.reducer,
        accountAmount: accountAmountSlice.reducer
    }


})



export const login = async (store, { email, password, rememberMe }) => {
    const result = await Api.Login({ email, password })
    if (rememberMe) {
        localStorage.setItem('jwt', result.body.token)
    }
    store.dispatch(signIn({
        token: result.body.token
    }))
    return true
}

export const loadUser = async (store) => {
    if (store.getState().login.token === null) {
        return false
    }
    const result = await Api.GetUserInfos(store.getState().login.token)
    store.dispatch(loadProfile({
        firstName: result.body.firstName,
        lastName: result.body.lastName
    }))

}

export const updateUser = async (store, firstName, lastName) => {
    console.log(store.getState())
    const result = await Api.UpdateUserInfos(store.getState().login.token, firstName, lastName)
    store.dispatch(editProfile({
        firstName: result.body.firstName,
        lastName: result.body.lastName
    }))

}

export const accountAmount = async (store) => {
    const checkingAmountResult = await Api.GetBankCheckingAmount()
    const savingAmountResult = await Api.GetBankSavingAmount()
    const creditAmountResult = await Api.GetCreditCardAmount()
    store.dispatch(setCheckingAmount({
        checkingAmount: checkingAmountResult,
    }))
    store.dispatch(setSavingAmount({
        savingAmount: savingAmountResult,
    }))
    store.dispatch(setCreditAmount({
        creditAmount: creditAmountResult,
    }))
}

export const logOut = async (store) => {
    localStorage.clear()
    store.dispatch(signOut({
        token: null
    }))
}

