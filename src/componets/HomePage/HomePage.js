import React from 'react';
import Banner from '../Banner/Banner';
import Cage from '../Product-List/Cage';
import '../HomePage/HomePage.css';

HomePage.propTypes = {

};

function HomePage() {
    return (
        <div>
            <Banner /> 
                <h2>Lồng chim</h2>
                <p></p>             
                <div className='list'>
                    <Cage />
                    <Cage />
                    <Cage />
                    <Cage />
                </div>
        </div>
    );
}

export default HomePage;