import React from 'react';
import { BsSearch } from 'react-icons/bs'; // Importez l'icône de recherche de react-icons
import myPhoto from '../../../public/chat.jpg';
import Search from '../../components/Search/Search'

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
                           <Search />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide;
