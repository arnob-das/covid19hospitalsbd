import React from 'react';
import AllBeds from '../../AllBeds/AllBeds';
import SeeDetailsDiv from '../../SeeDetailsDiv/SeeDetailsDiv';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <SeeDetailsDiv></SeeDetailsDiv>
            <h3 className="mt-3">Hospitals Update</h3>
            <AllBeds></AllBeds>
        </div>
    );
};

export default Home;