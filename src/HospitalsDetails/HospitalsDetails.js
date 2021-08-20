import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gmap from "../Gmap/Gmap";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                    <i class="fas fa-phone-alt" aria-hidden="true"></i>
                    {phone_number}
                </p>
                <p>
                    <i class="fas fa-globe-americas" aria-hidden="true"></i>
                    {address}
                </p>
            </div>

            <h2>{singleHospitalsInfo.district}</h2>
            <p>General Beds Available: {general_beds_available}</p>
            <p>ICU Beds Available: {singleHospitalsInfo.icu_beds_available}</p>
            <p>
                High Flow Nasal Canula Beds Available:{" "}
                {singleHospitalsInfo.hfn_beds_occupied}
            </p>
            <p>
                High Dependency Units Available:{" "}
                {singleHospitalsInfo.hdu_beds_occupied}
            </p>
            <p>Phone Number: {singleHospitalsInfo.phone_number}</p>
            <p>
                Oxygen total cylinder: {singleHospitalsInfo.oxygen_total_cylinder}
            </p>
            <p>oxygen_total_hfnc: {singleHospitalsInfo.oxygen_total_hfnc}</p>
            <p>
                oxygen_total_supply_point:{" "}
                {singleHospitalsInfo.oxygen_total_supply_point}
            </p>
            <p>oxygen_used_hfnc: {singleHospitalsInfo.oxygen_used_hfnc}</p>
            <p>Latitude: {singleHospitalsInfo.latitude}</p>
            <p>Longitude: {singleHospitalsInfo.longitude}</p>

            <a className="btn btn-primary" href={telephoneLink}>
                {" "}
                Make A Call{" "}
            </a>
            <a className="btn btn-primary" href={directionLink} target="_blank">
                Get Direction
            </a>

            <Gmap
                latitude={singleHospitalsInfo.latitude}
                longitude={singleHospitalsInfo.longitude}
            ></Gmap>
        </div>
    );
};

export default HospitalsDetails;
