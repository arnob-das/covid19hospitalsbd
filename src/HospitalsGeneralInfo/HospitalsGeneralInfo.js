import React from 'react';
import { Link } from 'react-router-dom';

const HospitalsGeneralInfo = (props) => {
    const { id, name, general_beds_available, icu_beds_available } = props.data
    return (
        <div className="card container mt-3">
            <div>
                <h3>
                    <Link className="text-danger" style={{ textDecoration: 'none' }} to={`/hospitalsDetails/${id}`}>
                        {name}
                    </Link>
                </h3>
                <p>general_beds_available: {general_beds_available}</p>
                <p>icu_beds_available: {icu_beds_available}</p>
            </div>
        </div>
    );
};

export default HospitalsGeneralInfo;