import React, { useEffect, useState } from 'react';
import './AllBeds.css'

const AllBeds = () => {
    // declared state for all beds numbers
    const [allBedsNumbers, setAllBedsNumbers] = useState({})
    const { gb, icu, hfn, hdu } = allBedsNumbers

    // api fetching for all bed numbers
    useEffect(() => {
        fetch('https://api2.covidhospitalsbd.com/api/available')
            .then(response => response.json())
            .then(data => setAllBedsNumbers(data));
    }, [])

    return (
        <div className="container">
            <p className="currently-available">Currently Available Beds</p>
            <div className="allBeds-row-1 justify-content-center">
                <div className="items gb">
                    <p>General Beds</p>
                    <h3>{gb}</h3>
                </div>
                <div className="items icu">
                    <p>Icu Beds</p>
                    <h3>{icu}</h3>
                </div>
            </div>
            <div className="allBeds-row-2 justify-content-center">
                <div className="items hfn">
                    <p>High Flow Nasal Canula Beds</p>
                    <h3>{hfn}</h3>
                </div>
                <div className="items hdu">
                    <p>High Dependency Unit Beds</p>
                    <h3>{hdu}</h3>
                </div>
            </div>
        </div>
    );
};

export default AllBeds;