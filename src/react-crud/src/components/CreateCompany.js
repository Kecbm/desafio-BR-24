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
        
        const apiUrl = 'https://b24-56y3mh.bitrix24.com/rest/crm.company.add.json';
        const { name, email, corporate_name } = inputs;

        const requestBody = {
            fields: {
            TITLE: name,
            //  PHONE: [{ VALUE: formData.phone }],
            EMAIL: [{ VALUE: email }],
            //  ADDRESS: formData.address,
            INDUSTRY: corporate_name,
            //  COMMENTS: formData.comments,
            },
            auth: 'l9gr6K6xPyoOxHvz7eJsoYWu45Oy4q8aum1ty2HcMsP9F92jc1',
        };

        axios.post(apiUrl, requestBody)
        .then((response) => {
            console.log('Empresa criada com sucesso:', response.data.result);
            return response.data.result;
        })
        .catch((error) => {
            console.error('Erro ao criar empresa:', error);
            throw error;
        });

        /* 
        //  Salvar Company criada no BD - CRUD React e PHP
        axios.post('http://localhost:8000/api/company/save', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        }); */
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