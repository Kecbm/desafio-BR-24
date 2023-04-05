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
            <h1>Criar Empresa</h1>
            <form onSubmit={handleSubmit}>
                <label>Nome: </label>
                <input type="text" name="name" onChange={handleChange} />
                <br />
                <label>Email: </label>
                <input type="text" name="email" onChange={handleChange} />
                <br />
                <label>CNPJ: </label>
                <input type="text" name="CNPJ" onChange={handleChange} />
                <br />
                <label>Razão social: </label>
                <input type="text" name="corporate_name" onChange={handleChange} />
                <br />
                <label>Receita anual: </label>
                <input type="text" name="annual_recipe" onChange={handleChange} />
                <br />
                <label>Nome do contato 1: </label>
                <input type="text" name="name_first_contact" onChange={handleChange} />
                <br />
                <label>Sobrenome do contato 1: </label>
                <input type="text" name="last_name_first_contact" onChange={handleChange} />
                <br />
                <label>Nome do contato 2: </label>
                <input type="text" name="name_second_contact" onChange={handleChange} />
                <br />
                <label>Sobrenome do contato 2: </label>
                <input type="text" name="last_name_second_contact" onChange={handleChange} />
                <br />
                <button>Save</button>
            </form>
        </div>
    )
}