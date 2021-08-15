import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const SeeDetailsDiv = () => {
    return (
        <div className="seeDetailsDiv d-flex justify-content-between">
            <div>
                <p>Hospitals Details</p>
            </div>
            <div>
                <Link to="/hospitals"><FontAwesomeIcon icon={faCoffee} /></Link>
            </div>
        </div>
    );
};

export default SeeDetailsDiv;