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
        axios.get('http://localhost:8000/api/company').then(function(response) {
        //  console.log(response.data);
        setCompany(response.data);
        });
    }

    const deleteCompany = (id) => {
        axios.delete(`http://localhost:8000/api/company/${id}/delete`).then(function(response) {
            console.log(response.data);
            getCompany();
        })
    }

    return (
        <div id="list-company">
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