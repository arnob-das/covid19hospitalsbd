import React, { useEffect, useState } from 'react';
import './AllBeds.css'
const AllBeds = () => {
    // declared state for all beds numbers
    const [allBedsNumbers, setAllBedsNumbers] = useState([])

    // api fetching for all bed numbers
    useEffect(() => {
        fetch('https://api2.covidhospitalsbd.com/api/available')
            .then(response => response.json())
            .then(data => setAllBedsNumbers(data));
    }, [])
    return (
        <div>
            <div className="allBeds-row-1 justify-content-center">
                <div className="items">
                    <p>General Beds</p>
                    <h3>{allBedsNumbers.gb}</h3>
                </div>
                <div className="items">
                    <p>Icu Beds</p>
                    <h3>{allBedsNumbers.icu}</h3>
                </div>
            </div>
            <div className="allBeds-row-2 justify-content-center">
                <div className="items">
                    <p>High Flow Nasal Canula Beds</p>
                    <h3>{allBedsNumbers.hfn}</h3>
                </div>
                <div className="items">
                    <p>High Dependency Unit Beds</p>
                    <h3>{allBedsNumbers.hdu}</h3>
                </div>
            </div>
        </div>
    );
};

export default AllBeds;