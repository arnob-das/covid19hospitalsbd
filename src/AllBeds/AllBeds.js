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
    console.log(allBedsNumbers)
    return (
        <div>
            <div className="allBeds-row-1">
                <div className="items">
                    <h4>General Beds</h4>
                    <h3>{allBedsNumbers.gb}</h3>
                </div>
                <div className="items">
                    <h4>Icu Beds</h4>
                    <h3>{allBedsNumbers.icu}</h3>
                </div>
            </div>
            <div className="allBeds-row-2">
                <div className="items">
                    <h4>High Flow Nasal Canula Beds</h4>
                    <h3>{allBedsNumbers.hfn}</h3>
                </div>
                <div className="items">
                    <h4>High Dependency Unit Beds</h4>
                    <h3>{allBedsNumbers.hdu}</h3>
                </div>
            </div>
        </div>
    );
};

export default AllBeds;