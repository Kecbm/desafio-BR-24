import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './../css/FormCompany.css';

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
        <div className="form-company">
            <h1 className="form-title">Editar Empresa</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label className="label">Nome: </label>
                <input className="input" value={inputs.name} type="text" name="name" onChange={handleChange} />
                <br />
                <label className="label">Email: </label>
                <input className="input" value={inputs.email} type="text" name="email" onChange={handleChange} />
                <br />
                <label className="label">CNPJ: </label>
                <input className="input" value={inputs.CNPJ} type="text" name="CNPJ" onChange={handleChange} />
                <br />
                <label className="label">Razão social: </label>
                <input className="input" value={inputs.corporate_name} type="text" name="corporate_name" onChange={handleChange} />
                <br />
                <label className="label">Receita anual: </label>
                <input className="input" value={inputs.annual_recipe} type="text" name="annual_recipe" onChange={handleChange} />
                <br />
                <label className="label">Nome do contato 1: </label>
                <input className="input" value={inputs.name_first_contact} type="text" name="name_first_contact" onChange={handleChange} />
                <br />
                <label className="label">Sobrenome do contato 1: </label>
                <input className="input" value={inputs.last_name_first_contact} type="text" name="last_name_first_contact" onChange={handleChange} />
                <br />
                <label className="label">Nome do contato 2: </label>
                <input className="input" value={inputs.name_second_contact} type="text" name="name_second_contact" onChange={handleChange} />
                <br />
                <label className="label">Sobrenome do contato 2: </label>
                <input className="input" value={inputs.last_name_second_contact} type="text" name="last_name_second_contact" onChange={handleChange} />
                <br />
                <button className="button-form">Save</button>
            </form>
        </div>
    )
}