import React from 'react';
import { useState } from 'react';

const UseState = () => {
    const [brand, setBrand] = useState("BMW")
    const [country, setCountry] = useState("german")
    return (
        <div>
            <h2>{brand} is the best car manufacture in the country {country}</h2>
            <button           
            className="px-6 py-3 bg-red-400 text-white font-semibold rounded-lg hover:bg-red-600 transition"
                onClick={() => setBrand("Mercedes")}
            >change brand</button>
        </div>
    );
}

export default UseState;
