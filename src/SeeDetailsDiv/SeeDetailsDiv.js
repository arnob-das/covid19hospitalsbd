import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './SeeDetailsDiv.css'

const SeeDetailsDiv = () => {
    return (
        <div className="seeDetailsDiv container my-3 d-flex justify-content-between">
            <div>
                <p>Hospitals Details</p>
            </div>
            <div>
                <Link className="forward-button" to="/hospitals">
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>
        </div>
    );
};

export default SeeDetailsDiv;