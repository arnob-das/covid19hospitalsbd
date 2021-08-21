import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gmap from "../Gmap/Gmap";
import "./HospitalsDetails.css";

const HospitalsDetails = () => {
    const { hospitalId } = useParams(); // to get hospital Id
    const [singleHospitalsInfo, setSingleHospitalsInfo] = useState({});
    const {
        name,
        district,
        address,
        latitude,
        longitude,
        google_place_id,
        phone_number,
        general_beds_available,
        icu_beds_available,
        hdu_beds_available,
        hfn_beds_available,
        general_beds,
        hfn_beds,
        hdu_beds,
        icu_beds,
        oxygen_total_supply_point,
        oxygen_total_concentrator,
        oxygen_total_cylinder,
        oxygen_total_hfnc,
    } = singleHospitalsInfo;

    useEffect(() => {
        fetch(`https://api2.covidhospitalsbd.com/api/hospital/${hospitalId}`)
            .then((res) => res.json())
            .then((data) => setSingleHospitalsInfo(data));
    });

    // telephone link
    const telephoneLink = `tel:${phone_number}`;
    // google maps direction link by laitude and longtitude
    const directionLink = `https://www.google.com/maps/search/?api=1&query=${latitude}%${longitude}&query_place_id=${google_place_id}`;
    return (
        <div className="hospital-detail">
            <div className="hospital-basic-info container pt-2">
                <p className="hospital-basic-info-name mt-2">{name}</p>
                <p>District: {district}</p>
                <p className="mt-3">
                    <i className="fas fa-phone-alt" aria-hidden="true"></i>
                    {phone_number ? phone_number : 'Not Available'}
                </p>
                <p>
                    <i className="fas fa-globe-americas" aria-hidden="true"></i>
                    {address}
                </p>
            </div>

            <div className="bed-oxygen-detail container">
                <p className="mt-5 bed-detail-div div-sub">Bed Information</p>

                {/* table is here */}
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-muted" scope="col">Bed Type</th>
                            <th className="text-muted text-align-center" scope="col">Available</th>
                            <th className="text-muted text-align-center" scope="col">Total</th>
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
                            <td className="text-center">{hfn_beds}</td>
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
                {/* oxygen detail */}
                <p className="mt-5 bed-detail-div div-sub">Oxygen information</p>

                {/* table is here */}
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-muted" scope="col">Oxygen Equipment</th>
                            <th className="text-muted text-align-center" scope="col">Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Total bed with central oxygen supply point	</td>
                            <td className="text-center text-success fw-bold">{oxygen_total_supply_point}</td>
                        </tr>
                        <tr>
                            <td>Total oxygen concentrator available</td>
                            <td className="text-center text-success fw-bold">{oxygen_total_concentrator}</td>
                        </tr>
                        <tr>
                            <td>Total oxygen cylinder</td>
                            <td className="text-center text-success fw-bold">{oxygen_total_cylinder}</td>
                        </tr>
                        <tr>
                            <td>High flow nasal canula	</td>
                            <td className="text-center text-success fw-bold">{oxygen_total_hfnc}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="gmap container">
                <div className="div-sub bed-detail-div my-4">Google Map</div>
                <Gmap
                    latitude={singleHospitalsInfo.latitude}
                    longitude={singleHospitalsInfo.longitude}
                ></Gmap>
            </div>
            <div className="contact-button d-flex justify-content-between container my-4">
                <a href={directionLink} target="_blank" className="btn btn-outline-primary" style={{ width: '150px' }}>Direction</a>
                <a className="btn btn-outline-primary" style={{ width: '150px' }} href={telephoneLink}>Call Hospital</a>
            </div>
        </div>
    );
};

export default HospitalsDetails;
