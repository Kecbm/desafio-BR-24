import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateCompany() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8000/api/company/save', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
    }

    return (
        <div>
            <h1>Create Company</h1>
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