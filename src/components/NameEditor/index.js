import './style.css'
import { useSelector, useStore } from 'react-redux'
import { updateUser, userSlice } from '../../redux'

const NameEditor = () => {
    const user = useSelector((state) => state.user)
    const store = useStore()
    const submit = async (e) => {
        e.preventDefault()

        const firstName = e.currentTarget?.firstName?.value
        const lastName = e.currentTarget?.lastName?.value

        await updateUser(store, firstName, lastName);
        store.dispatch(userSlice.actions.hideEditor())
    }

    return <>
        {!user.openEditor && <button className={`edit-button ${``}`} onClick={() => store.dispatch(userSlice.actions.displayEditor())}>
            Edit Name
        </button>}
        {user.openEditor && <form onSubmit={submit}>
            <div>
                <label></label>
                <input name="firstName" defaultValue={user.firstName} />
                <label></label>
                <input name="lastName" defaultValue={user.lastName} />
            </div>
            <button type="submit">Save</button>
            <button type="cancel" onClick={() => store.dispatch(userSlice.actions.hideEditor())}>cancel</button>
        </form>

        }
    </>
}

export default NameEditor