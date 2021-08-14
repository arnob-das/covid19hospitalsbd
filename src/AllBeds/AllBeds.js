import React, { useEffect, useState } from 'react';
import New from '../New/New';

const AllBeds = () => {
    // declare state for all beds numbers
    const [allBedsNumbers, setAllBedsNumbers] = useState([])

    // api fetching for all bed numbers
    useEffect(() => {
        fetch('https://api2.covidhospitalsbd.com/api/available')
            .then(response => response.json())
            .then(data => setAllBedsNumbers(data));
    }, [])
    console.log(allBedsNumbers)
    return (
        <div className="row">
            <div className="col-sm-6">
                <h1>{allBedsNumbers.gb}</h1>
            </div>

            <div className="col-sm-6">
                <h1>{allBedsNumbers.hfn}</h1>
            </div>

            <div className="col-sm-6">
                <h1>{allBedsNumbers.icu}</h1>
            </div>

            <div className="col-sm-6">
                <h1>{allBedsNumbers.hdu}</h1>
            </div>

            <New bed={allBedsNumbers.gb}></New>
        </div>
    );
};

export default AllBeds;