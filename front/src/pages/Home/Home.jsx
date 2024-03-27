import React from 'react';
import Slide from '../../components/Slide/Slide';
import Statistique from '../../components/Statistiques/Statistique';
import Card from '../../components/Card/Card';
import Detail from '../../components/Detail/Detail';


const Home = () => {
    return (
        <div>
            <Slide />
            <Statistique />
            <Card />
            <Detail /> 
        </div>
    );
};

export default Home;