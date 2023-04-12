import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Single = () => {
    const p =useLoaderData()
    return (
        <div>
        <h2>{p.name}</h2>
        <img src={p.image} alt="" />
        </div>
    );
};

export default Single;