/* eslint-disable react/prop-types */
import { useState } from "react"

const Form = ({addTask}) => {
    const [name, setName] = useState("")

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name !== "") {
            addTask(name)
            setName("")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                value={name}
                onChange={handleChange}
                autoComplete="off"
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    )
}

export default Form 