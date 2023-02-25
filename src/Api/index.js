
const Login = async (data) => {
    const jsonResult = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const json = await jsonResult.json()
    return json

}

const GetUserInfos = async (jwt) => {
    const jsonResult = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        },

    })
    const json = await jsonResult.json()
    return json
}

const UpdateUserInfos = async (jwt, firstName, lastName) => {
    const jsonResult = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        },
        body: JSON.stringify({
            firstName,
            lastName,
        })
    })
    const json = await jsonResult.json()
    return json
}

const GetCreditCardAmount = async () => {
    return 184.30
}

const GetBankSavingAmount = async () => {
    return 10928.42
}

const GetBankCheckingAmount = async () => {
    return 2082.79
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    Login,
    GetCreditCardAmount,
    GetBankCheckingAmount,
    GetUserInfos,
    GetBankSavingAmount,
    UpdateUserInfos,
}