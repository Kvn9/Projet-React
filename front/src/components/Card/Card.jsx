import React from 'react';
import Husky from '../../../public/husky-2.avif';
import Lezard from '../../../public/lezard.avif';
import Oiseau from '../../../public/oiseau.avif';

function App() {
  // Données des cartes
  const cardsData = [
    {
      image: Husky,
      title: "Husky",
      description: "Le Husky est un chien de traîneau originaire de Sibérie. Il est très apprécié pour sa beauté et son caractère sociable.",
      categories: "Chien",
      genre: "Mâle",
    },
    {
      image: Lezard,
      title: "Lézard",
      description: "Le lézard est un reptile qui se caractérise par sa peau écailleuse et sa queue qui se détache en cas de danger.",
      categories: "Reptile",
      genre: "Femelle",
    },
    {
      image: Oiseau,
      title: "Oiseau",
      description: "L'oiseau est un animal volant qui se caractérise par ses plumes et son bec.",
      categories: "Oiseau",
      genre: "Mâle",
    },
    
    
    // Ajoutez autant de données de carte que nécessaire
  ];

  return (
    <div className="mt-8 flex justify-center items-center h-full">
      <div className="grid grid-cols-3 gap-4 m-10">
        {cardsData.map((card, index) => (
          <div key={index} className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={card.image} alt={card.title} /></figure>
            <div className="flex justify-center mt-4">
                <div className='badge badge-outline badge-accent'>{card.categories}</div>
                <div className='badge badge-outline badge-primary'>{card.genre}</div>
              </div>
            <div className="card-body">
              <h2 className="card-title text-white font-bold justify-center ">
                {card.title}
              </h2>
              <p className="text-justify">{card.description}</p>
              <div className="flex justify-center mt-4">
                <button className="btn btn-primary">En savoir plus</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
