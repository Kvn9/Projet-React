export default () => {

    const plans = [
        {
            name: "Formule 1",
            desc: "Cette formule permet de calculer la quantité exacte de médicament à administrer en fonction du poids de l'animal, de la dose recommandée par kilogramme et de la concentration du médicament disponible.",
            price: 150,
            isMostPop: false,
            features: [
                "Estimation précise du dosage",
                "Adapté au poids de l'animal",
                "Adapté au poids de l'animal",
                "Aide à assurer un traitement sûr et efficace",
                "Conseils personnalisés recommandés",
                "Consultation vétérinaire recommandée pour un suivi personnalisé",
            ],
        },
        {
            name: "Formule 2",
            desc: "Cette formule fournit une estimation générale de la fréquence cardiaque maximale de l'animal pendant l'exercice, ce qui peut être utile pour élaborer des programmes d'exercice sûrs et adaptés à différents âges.",
            price: 185,
            isMostPop: true,
            features: [
                "Indication de la FC maximale pour l'exercice",
                "Adapté à différents âges",
                "Aide à concevoir des programmes d'exercice sûrs",
                "Encourage une activité physique appropriée",
                "Consultation vétérinaire recommandée pour un suivi personnalisé",
            ],
        },
        {
            name: "Formule 3",
            desc: "Cette formule aide la quantité d'eau que l'animal devrait consommer quotidiennement pour maintenir une hydratation. Elle prend en compte différents facteurs tels que le poids, l'âge et le niveau d'activité de l'animal.",
            price: 200,
            isMostPop: false,
            features: [
            "Aide à maintenir une hydratation adéquate",
            "Prend en compte différents facteurs",
            "Encourage une consommation d'eau suffisante",
            "Essentiel pour la santé globale de l'animal",
            "Consultation vétérinaire recommandée pour des conseils personnalisés", 
            ],
        },
    ];

    return (
        <section className='py-14'>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className='relative max-w-xl mx-auto sm:text-center'>
                    <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                        Nos Formule Tarifaire
                    </h3>
                    <div className='mt-3 max-w-xl '>
                        <p className="text-black">
                            Voici nos différentes formules tarifaires pour répondre à vos besoins.
                        </p>
                    </div>
                </div>
                <div className='mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                    {
                        plans.map((item, idx) => (
                            <div key={idx} className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${item.isMostPop ? "mt-10" : ""}`}>
                                {
                                    item.isMostPop ? (
                                        <span class="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold">Le plus populaire</span>
                                    ) : ""
                                }
                                <div className="p-8 space-y-4 border-b">
                                    <span className='text-indigo-600 font-bold text-xl'>
                                        {item.name}
                                    </span>
                                    <div className='text-gray-800 text-3xl font-semibold'>
                                    {item.price}€<span className="text-xl text-gray-600 font-normal"></span>
                                    </div>
                                    <p className="text-black">
                                        {item.desc}
                                    </p>
                                    <button className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'>
                                        En savoir plus
                                    </button>
                                </div>
                                <ul className='p-8 space-y-3'>
                                    <li className="pb-2 text-gray-800 font-medium">
                                        <p className="text-black">Formule</p>
                                    </li>
                                    {
                                        item.features.map((featureItem, idx) => (
                                            <li key={idx} className='flex items-center gap-5'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className='h-5 w-5 text-indigo-600'
                                                    viewBox='0 0 20 20'
                                                    fill='currentColor'>
                                                    <path
                                                        fill-rule='evenodd'
                                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                        clip-rule='evenodd'></path>
                                                </svg>
                                                {featureItem}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
