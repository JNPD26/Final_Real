import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';

const cards = [
    {
        id: '1',
        title: 'js',
        date: '',
        image: '',
        description: 'aaaaaa'
    },
    {
        id: '2',
        title: 'ts',
        date: '',
        image: '',
        description: 'bbbbbb'
    },
    {
        id: '3',
        title: 'c#',
        date: '',
        image: '',
        description: 'cccccc'
    },
    {
        id: '3',
        title: 'python',
        date: '',
        image: '',
        description: 'dddddd'
    },
]

const Cardfromapi = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        axios.get(' https://12669487-eec8-472e-b8fe-a6d562721520-00-2tvu80bnyz2pj.janeway.replit.dev/courses')
            .then(response => {
                setProducts(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <div className="App">
            {products.map(product => (
                <div key={product.id}>
                    
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    {/* <img src={product.image} alt={product.title} /> */}
                    {/* <p>{product.description}</p> */}
                </div>
            ))}
        </div>
    )
    // return(
    // <div>
    //     {cards.map(card => (
    //         <div className='card'>
    //             <h2>{card.title}</h2>
    //             <img src={card.image} alt="" />
    //             <p>{card.description}</p>
    //         </div>
    //     ))}
    // </div>
    // // );
    // )
}

export default Cardfromapi
