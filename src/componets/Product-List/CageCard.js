import React, { useEffect, useState } from 'react';
import '../Product-List/Cage.css'
import axios from 'axios';

const CageCard = () => {

    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get('https://64ad7733b470006a5ec60159.mockapi.io/cage')
            .then(response => {
                setdata(response.data)
                console.log(response.data)
            })
    }, [])

    return (
        <div>
            <div className="product">
                {
                    data.map(item => {
                        return (
                            <div className='card' key={item.id}>
                                <img src={item.image} alt="" />
                                <h3>{item.name}</h3>
                                <h4>{item.price}</h4>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default CageCard;