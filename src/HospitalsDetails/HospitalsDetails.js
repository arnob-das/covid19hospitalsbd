import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HospitalsDetails = () => {
    const {hospitalId} = useParams();
    const [singleHospitalsInfo, setSingleHospitalsInfo] = useState([])
    // console.log(singleHospitalsInfo);

    useEffect(() => {
        fetch(`https://api2.covidhospitalsbd.com/api/hospital/${hospitalId}`)
        .then(res => res.json())
        .then (data => setSingleHospitalsInfo(data))
    }, [])
    return (
        <div className="container">
           <h1>{singleHospitalsInfo.name}</h1>
           <h2>District: {singleHospitalsInfo.district}</h2>
           <p>General Beds Available: {singleHospitalsInfo.general_beds_available}</p>
           <p>ICU Beds Available: {singleHospitalsInfo.icu_beds_available}</p>
           <p>High Flow Nasal Canula Beds Available: {singleHospitalsInfo.hfn_beds_occupied}</p>
           <p>High Dependency Units Available: {singleHospitalsInfo.hdu_beds_occupied}</p>
           <p>Phone Number: {singleHospitalsInfo.phone_number}</p>
           <p>Oxygen total cylinder: {singleHospitalsInfo.oxygen_total_cylinder}</p>
           <p>oxygen_total_hfnc: {singleHospitalsInfo.oxygen_total_hfnc}</p>
           <p>oxygen_total_supply_point: {singleHospitalsInfo.oxygen_total_supply_point}</p>
           <p>oxygen_used_hfnc: {singleHospitalsInfo.oxygen_used_hfnc}</p>
        </div>
    );
};

export default HospitalsDetails;