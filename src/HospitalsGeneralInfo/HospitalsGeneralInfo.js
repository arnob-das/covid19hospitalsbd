import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospitalAlt, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import './HospitalsGeneralInfo.css'

const HospitalsGeneralInfo = (props) => {
    const { id, name, district, updated_at } = props.data
    // available beds data
    const { general_beds_available, icu_beds_available, hdu_beds_available, hfn_beds_available } = props.data
    // total beds data
    const { general_beds, icu_beds, hdu_beds, hfn_beds } = props.data
    // number of available beds
    const availableBeds = general_beds_available + icu_beds_available + hdu_beds_available + hfn_beds_available
    // number of total beds
    const totalBeds = general_beds + icu_beds + hdu_beds + hfn_beds

    console.log(updated_at)

    return (
        <Link className="hospital-general card container mt-3" style={{ textDecoration: 'none' }} to={`/hospitalsDetails/${id}`}>
            <div>
                <div className="mt-3 container">
                    <h3 className="hospital-general-name">{name}</h3>
                    <p>{district}</p>
                    <div className="d-flex beds-num-div">
                        <p>
                            Available : <span className="text-success available-beds-num">{availableBeds}</span>
                        </p>
                        <p className="total-beds-num">Total : {totalBeds}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default HospitalsGeneralInfo;