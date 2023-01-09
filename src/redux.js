import { configureStore, createSlice } from "@reduxjs/toolkit";
import Api from "./Api";

const loginSlice = createSlice({
    name: "login",
    initialState: { token: null },
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

const userSlice = createSlice({
    name: "user",
    initialState: {
        firstName: null,
        lastName: null,
    },
    reducers: {
        loadProfile: (state, action) => {
            //{type: user/loadProfile}
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        },
        editProfile: (state, action) => {
            //{type: user/editProfile}
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName

        },
    }
})

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

export const { signIn, signOut } = loginSlice.actions;
export const { loadProfile, editProfile } = userSlice.actions;
export const { setCheckingAmount, setSavingAmount, setCreditAmount } = accountAmountSlice.actions;



export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        user: userSlice.reducer,
        accountAmount: accountAmountSlice.reducer
    }


})

export const login = async (store, { email, password }) => {
    const result = await Api.Login({ email, password })
    store.dispatch(signIn({
        token: result.body.token
    }))
    return true
}

export const loadUser = async (store) => {
    console.log(store.getState())
    const result = await Api.GetUserInfos(store.getState().login.token)
    store.dispatch(loadProfile({
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

