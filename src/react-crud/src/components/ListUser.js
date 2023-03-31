import { useState } from "react";

export default function ListUser() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(inputs);
    }

    return (
        <div>
            <h1>List Users</h1>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" name="name" onChange={handleChange} />
                <br />
                <label>Email: </label>
                <input type="text" name="email" onChange={handleChange} />
                <br />
                <label>Mobile: </label>
                <input type="text" name="mobile" onChange={handleChange} />
                <br />
                <button>Save</button>
            </form>
        </div>
    )
}