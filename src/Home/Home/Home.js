import React from 'react';
import AllBeds from '../../AllBeds/AllBeds';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h3 className="mt-3">Hospitals Update</h3>
            <AllBeds></AllBeds>
        </div>
    );
};

export default Home;