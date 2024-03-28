import React, { useState, useEffect } from 'react';

export default () => {
    const [cabinets, setCabinets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/cabinet/getAllCabinet')
            .then(response => response.json())
            .then(data => {
                setCabinets(data);
            })
            .catch(error => {
                console.error('Error fetching cabinets:', error);
            });
    }, []); 

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 m-10">
            <div className="max-w-lg">
                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                    Cabinet Vétérinaire 24/7
                </h3>
                <p className="text-gray-600 mt-2">
                    Voici la liste des cabinets vétérinaires disponibles 24/7
                </p>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr className="divide-x">
                            <th className="py-3 px-6">Cabinet</th>
                            <th className="py-3 px-6">Adresse</th>
                            <th className="py-3 px-6">Téléphone</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {cabinets.map((cabinet, idx) => (
                            <tr key={idx} className="divide-x">
                                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                                    <span>{idx + 1}</span>
                                    {cabinet.nom}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{cabinet.adresse}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{cabinet.telephone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
