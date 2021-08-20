import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Gmap from "../Gmap/Gmap";
import "./HospitalsDetails.css";

const HospitalsDetails = () => {
    const { hospitalId } = useParams(); // to get hospital Id
    const [singleHospitalsInfo, setSingleHospitalsInfo] = useState({});
    const {
        name,
        district,
        address,
        phone_number,
        general_beds_available,
        icu_beds_available,
        hdu_beds_available,
        hfn_beds_available,
        general_beds,
        hfn_beds,
        hdu_beds,
        icu_beds,
    } = singleHospitalsInfo;

    useEffect(() => {
        fetch(`https://api2.covidhospitalsbd.com/api/hospital/${hospitalId}`)
            .then((res) => res.json())
            .then((data) => setSingleHospitalsInfo(data));
    }, []);

    // telephone link
    const telephoneLink = `tel:${phone_number}`;
    // google maps direction link
    const directionLink = `https://www.google.com/maps/search/?api=1&query=${singleHospitalsInfo.latitude}%${singleHospitalsInfo.longitude}&query_place_id=${singleHospitalsInfo.google_place_id}`;

    return (
        <div className="hospital-detail">
            <div className="hospital-basic-info container pt-2">
                <p className="hospital-basic-info-name">{name}</p>
                <p>District: {district}</p>
                <p className="mt-3">
                    <i className="fas fa-phone-alt" aria-hidden="true"></i>
                    {phone_number}
                </p>
                <p>
                    <i className="fas fa-globe-americas" aria-hidden="true"></i>
                    {address}
                </p>
            </div>

            <div className="bed-oxygen-detail container">
                <p className="mt-5 bed-detail-div">Bed Information</p>

                {/* table is here */}
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Bed Type</th>
                            <th scope="col">Available</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ICU</td>
                            <td className="text-center text-success fw-bold">{icu_beds_available}</td>
                            <td className="text-center">{icu_beds}</td>
                        </tr>
                        <tr>
                            <td>High flow nasal canula Beds	</td>
                            <td className="text-center text-success fw-bold">{hfn_beds_available}</td>
                            <td className="text-center">{icu_beds}</td>
                        </tr>
                        <tr>
                            <td>High Dependency Unit</td>
                            <td className="text-center text-success fw-bold">{hdu_beds_available}</td>
                            <td className="text-center">{hdu_beds}</td>
                        </tr>
                        <tr>
                            <td>General Beds</td>
                            <td className="text-center text-success fw-bold">{general_beds_available}</td>
                            <td className="text-center">{general_beds}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Gmap
                latitude={singleHospitalsInfo.latitude}
                longitude={singleHospitalsInfo.longitude}
            ></Gmap>
        </div>
    );
};

export default HospitalsDetails;
