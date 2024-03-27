import React from 'react';
import { BsSearch } from 'react-icons/bs'; // Importez l'icône de recherche de react-icons
import myPhoto from '../../../public/chat.jpg';

const Slide = () => {
    return (
        <div>
            <div className="hero min-h-screen h-1" style={{backgroundImage: `url(${myPhoto})`}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md relative">
                        <h1 className="mb-5 text-5xl font-bold"> <strong className='text-fuchsia-500'>Trouver</strong> votre vétérinaire ! </h1>
                        <p className="mb-5 text-2xl">Prenez <strong className='text-fuchsia-500'>votre Rendez-vous en ligne</strong></p>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                <BsSearch className="h-5 w-5" /> {/* Utilisez l'icône de recherche */}
                            </div>
                            <input 
                                type="search" 
                                placeholder="Rechercher...." 
                                className="w-full pl-10 pr-4 py-2 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                                style={{ outline: "none" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide;
