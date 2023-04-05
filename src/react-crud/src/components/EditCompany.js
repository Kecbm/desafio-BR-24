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
            <h1>Editar Empresa</h1>
            <form onSubmit={handleSubmit}>
                <label>Nome: </label>
                <input value={inputs.name} type="text" name="name" onChange={handleChange} />
                <br />
                <label>Email: </label>
                <input value={inputs.email} type="text" name="email" onChange={handleChange} />
                <br />
                <label>CNPJ: </label>
                <input value={inputs.CNPJ} type="text" name="CNPJ" onChange={handleChange} />
                <br />
                <label>Razão social: </label>
                <input value={inputs.corporate_name} type="text" name="corporate_name" onChange={handleChange} />
                <br />
                <label>Receita anual: </label>
                <input value={inputs.annual_recipe} type="text" name="annual_recipe" onChange={handleChange} />
                <br />
                <label>Nome do contato 1: </label>
                <input value={inputs.name_first_contact} type="text" name="name_first_contact" onChange={handleChange} />
                <br />
                <label>Sobrenome do contato 1: </label>
                <input value={inputs.last_name_first_contact} type="text" name="last_name_first_contact" onChange={handleChange} />
                <br />
                <label>Nome do contato 2: </label>
                <input value={inputs.name_second_contact} type="text" name="name_second_contact" onChange={handleChange} />
                <br />
                <label>Sobrenome do contato 2: </label>
                <input value={inputs.last_name_second_contact} type="text" name="last_name_second_contact" onChange={handleChange} />
                <br />
                <button>Save</button>
            </form>
        </div>
    )
}