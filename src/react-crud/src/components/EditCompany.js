import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditCompany() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getCompany();
    }, []);

    function getCompany() {
        axios.get(`http://localhost:8000/api/company/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost:8000/api/company/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
    }

    return (
        <div>
            <h1>Edit Company</h1>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input value={inputs.name} type="text" name="name" onChange={handleChange} />
                <br />
                <label>Email: </label>
                <input value={inputs.email} type="text" name="email" onChange={handleChange} />
                <br />
                <label>Mobile: </label>
                <input value={inputs.mobile} type="text" name="mobile" onChange={handleChange} />
                <br />
                <button>Save</button>
            </form>
        </div>
    )
}