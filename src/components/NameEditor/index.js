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
        {user.openEditor && <form className='name-editor' onSubmit={submit}>
            <div className="input-container">
                <label></label>
                <input className="input-field first-name" name="firstName" defaultValue={user.firstName} />
                <label></label>
                <input className="input-field last-name" name="lastName" defaultValue={user.lastName} />
            </div>
            <div className="button-container">
                <button className="edit-button save" type="submit">Save</button>
                <button className="edit-button cancel" type="cancel" onClick={() => store.dispatch(userSlice.actions.hideEditor())}>cancel</button>
            </div>
        </form>

        }
    </>
}

export default NameEditor