import React, { useEffect, useState } from 'react';
import HospitalsGeneralInfo from '../HospitalsGeneralInfo/HospitalsGeneralInfo';
import Spinner from '../Spinner/Spinner';
import './Hospitals.css'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Hospitals = () => {

    let hospitalsUrl = 'https://api2.covidhospitalsbd.com/api/available-hospitals' // available hospitals url

    const [searchInput = '', setSearchInput] = useState() //store search input data
    const [searchResult, setSearchResult] = useState([])  //store search results
    const [pageNumber = 1, setPageNumber] = useState() //store page number

    const searchResultData = searchResult.hospitals?.data // search results data
    const searchResultLength = searchResultData?.length // search results length
    const currentPageNumber = searchResult.hospitals?.current_page //current Page Number\
    const totalPageNumber = (parseInt(searchResult.hospitals?.total) / 10) + 1 // total page numbers

    //function to handle text input to set it in search-input state
    const handleInputChange = event => {
        setSearchInput(event.target.value)
    }

    // if search input is not empty
    if (searchInput !== "") {
        // url for search input
        hospitalsUrl = `${hospitalsUrl}?search=${searchInput}&&page=${pageNumber}`
    }
    // search input equals to empty
    else {
        // url for available hospitals
        hospitalsUrl = `${hospitalsUrl}?page=${pageNumber}`
    }

    // hide search input text field if current page number is greater than 1
    let searchInputClass = 'form-control input-search'
    let backButtonClass = 'back-button'
    if (pageNumber > 1) {
        searchInputClass = "form-control input-search no-display"
        backButtonClass = 'back-button no-display'
    }

    //loadMore functon to increase page number by clicking button
    const loadMore = () => {
        if (pageNumber >= (totalPageNumber - 1)) {
            window.alert('This is the last page')
        } else {
            setPageNumber(pageNumber + 1)
        }
    }

    //loadLess functon to decrease page number by clicking button
    const loadLess = () => {
        if (pageNumber === 1) {
            window.alert('This is the first page')
        }
        else {
            setPageNumber(pageNumber - 1)
        }
    }

    //fetching data from api
    useEffect(() => {
        fetch(hospitalsUrl)
            .then(res => res.json())
            .then(data => setSearchResult(data))
    }, [hospitalsUrl])

    return (
        <div className="container mt-3">
            {searchResultLength === 0 ? <Spinner /> :
                <div>
                    <Link className={backButtonClass} to='/'>
                        <FontAwesomeIcon icon={faArrowLeft} style={{ position: 'absolute', }} />
                    </Link>
                    <input className={searchInputClass} placeholder="Search By District or Hospital Name" onChange={handleInputChange} type="text" />

                    {searchResultData?.map(data =>
                        <HospitalsGeneralInfo key={data.id} data={data}></HospitalsGeneralInfo>)
                    }
                    <div>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination d-flex justify-content-center mt-3">
                                <li className="page-item">
                                    <a className="page-link" onClick={loadLess} aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">{currentPageNumber}</a>
                                </li>
                                <li className="page-item" >
                                    <a className="page-link" onClick={loadMore} aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            }
        </div>
    );
};

export default Hospitals;