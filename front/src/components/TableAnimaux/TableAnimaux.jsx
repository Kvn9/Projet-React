import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default () => {
    const [tableItems, setTableItems] = useState([]);
    const [error, setError] = useState(null); // État pour stocker les erreurs

    useEffect(() => {
        fetch('http://localhost:8000/animaux/getAllAnimaux')
            .then(response => response.json())
            .then(data => {
                setTableItems(data);
            })
            .catch(error => {
                console.error('Error fetching members:', error);
                setError(error); 
            });
    }, []);

    const handleDeleteCabinet = (id) => {
        fetch(`http://localhost:8000/animaux/updateAnimaux/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setTableItems(tableItems.filter(item => item.id !== id));
            })
            .catch(error => {
                console.error('Error deleting member:', error);
                setError(error); 
            });
    }


    const handleModifierCabinet = (id) => {
        navigate(`/modifierAnimaux/${id}`);
    }

    const navigate = useNavigate();
    const [user, setUser] = useState({});

   
    useEffect(() => {
        async () => {
        const token = localStorage.getItem('token');
        if (!token) return res.status(401).json({ error: "Access refusé." });

        const email = getEmailFromToken(token);

        if (!email) {
            return res.status(401).json({ error: "Token invalide" });
        }

        try {
            const result = await db.query(
                "SELECT role from user where email = ?",
                email
            );

            if (result[0].role === 'admin') {
                next();
            } else {
                res.status(403).json({ erreur: "Accès refusé" });
            }
        } catch (error) {
            res.status(500).json({ error: "Internal server " });
        }
    }
    }
    , []);

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 m-8">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                        Tout les Animaux 
                    </h3>
                    <p className="text-gray-600 mt-2">
                        Liste de tout les Animaux 
                    </p>
                </div>
                <div className="mt-3 md:mt-0">
                    <a
                        href="/ajouteranimal"
                        className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
                    >
                        Ajouter Animaux
                    </a>
                </div>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Age</th>
                            <th className="py-3 px-6">Genre</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                        <div>
                                            <span className="block text-gray-700 text-sm font-medium ">{item.age}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.genre}</td>
                                    <td className="text-right px-6 whitespace-nowrap">
                                        <button 
                                        onClick={() => handleModifierCabinet(item.id)} 
                                        className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Modifier
                                        </button>
                                        <button onClick={() => handleDeleteCabinet(item.id)} className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Supprimer
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}