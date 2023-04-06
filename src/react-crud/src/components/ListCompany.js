import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './../css/ListCompany.css';

export default function ListCompany() {
    const [company, setCompany] = useState([]);

    useEffect(() => {
        getCompany();
    });

    function getCompany() {
        const apiUrl = 'https://b24-56y3mh.bitrix24.com/rest/crm.company.list.json';

        const params = {
          filter: {},
          auth: 'l9gr6K6xPyoOxHvz7eJsoYWu45Oy4q8aum1ty2HcMsP9F92jc1',
        };
      
        axios.get(apiUrl, { params })
        .then((response) => {
            console.log('Empresas recuperadas com sucesso:', response.data.result);
            setCompany(response.data.result);
            return response.data.result;
        })
        .catch((error) => {
            console.error('Erro ao recuperar empresas:', error);
            throw error;
        });

        /*   
        //  Ler todas as Company do BD - CRUD React e PHP
        axios.get('http://localhost:8000/api/company').then(function(response) {
            //  console.log(response.data);
            setCompany(response.data);
        }); */
    }

    const deleteCompany = (id) => {
        const apiUrl = `https://b24-56y3mh.bitrix24.com/rest/crm.company.delete.json`;

        const requestBody = {
            id: id,
            auth: 'l9gr6K6xPyoOxHvz7eJsoYWu45Oy4q8aum1ty2HcMsP9F92jc1',
        };

        axios.delete(apiUrl, { data: requestBody })
        .then((response) => {
            console.log('Empresa deletada com sucesso:', response.data.result);
            return response.data.result;
        })
        .catch((error) => {
            console.error('Erro ao deletar empresa:', error);
            throw error;
        });

        /* 
        //  Deletar uma Company no BD - CRUD React e PHP
        axios.delete(`http://localhost:8000/api/company/${id}/delete`).then(function(response) {
            console.log(response.data);
            getCompany();
        }); */
    }

    return (
        <div id="list-company">
            <h1 id="list-title">Lista de Empresas</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>CNPJ</th>
                        <th>Razão Social</th>
                        <th>Receita Anual</th>
                        <th>Contato</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {company.map((company, key) =>
                        <tr key={key}>
                            <td>{company.name}</td>
                            <td>{company.email}</td>
                            <td>{company.CNPJ}</td>
                            <td>{company.corporate_name}</td>
                            <td>{company.annual_recipe}</td>
                            <td>{company.name_first_contact + ' '}{company.last_name_first_contact + ', '}{company.name_second_contact + ' '}{company.last_name_second_contact + ' '}</td>
                            <td>
                                <button className="button-table"><Link to={`company/${company.id}/edit`} id="link-company">Editar</Link></button>
                                <button className="button-table" onClick={() => deleteCompany(company.id)}>Deletar</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}