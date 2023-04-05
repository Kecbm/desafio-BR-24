import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './../css/FormCompany.css';

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
        <div className="form-company">
            <h1 className="form-title">Criar Empresa</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label className="label">Nome: </label>
                <input className="input" type="text" name="name" onChange={handleChange} />
                <br />
                <label className="label">Email: </label>
                <input className="input" type="text" name="email" onChange={handleChange} />
                <br />
                <label className="label">CNPJ: </label>
                <input className="input" type="text" name="CNPJ" onChange={handleChange} />
                <br />
                <label className="label">Razão social: </label>
                <input className="input" type="text" name="corporate_name" onChange={handleChange} />
                <br />
                <label className="label">Receita anual: </label>
                <input className="input" type="text" name="annual_recipe" onChange={handleChange} />
                <br />
                <label className="label">Nome do contato 1: </label>
                <input className="input" type="text" name="name_first_contact" onChange={handleChange} />
                <br />
                <label className="label">Sobrenome do contato 1: </label>
                <input className="input" type="text" name="last_name_first_contact" onChange={handleChange} />
                <br />
                <label className="label">Nome do contato 2: </label>
                <input className="input" type="text" name="name_second_contact" onChange={handleChange} />
                <br />
                <label className="label">Sobrenome do contato 2: </label>
                <input className="input" type="text" name="last_name_second_contact" onChange={handleChange} />
                <br />
                <button className="button-form">Save</button>
            </form>
        </div>
    )
}