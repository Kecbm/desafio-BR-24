import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <div>
            <h1>List Company</h1>

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {company.map((company, key) =>
                        <tr key={key}>
                            <td>{company.id}</td>
                            <td>{company.name}</td>
                            <td>{company.mobile}</td>
                            <td>
                                <Link to={`company/${company.id}/edit`}>Edit</Link>
                                <button onClick={() => deleteCompany(company.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}