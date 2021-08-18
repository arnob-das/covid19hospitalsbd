import React, { useEffect, useState } from 'react';
import HospitalsGeneralInfo from '../HospitalsGeneralInfo/HospitalsGeneralInfo';
import Spinner from '../Spinner/Spinner';

const Hospitals = () => {
    // available hospitals url
    let hospitalsUrl = 'https://api2.covidhospitalsbd.com/api/available-hospitals'

    //state declared to store data in search-input, search-result state
    const [searchInput = '', setSearchInput] = useState()
    const [searchResult, setSearchResult] = useState([])
    const [pageNumber = 1, setPageNumber] = useState()

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

    let totalPageNumber = (parseInt(searchResult.hospitals?.total) / 10) + 1

    //loadMore functon to increase page number by button clicking
    const loadMore = () => {
        if (pageNumber >= (totalPageNumber - 1)) {
            window.alert('This is the last page')
        } else {
            setPageNumber(pageNumber + 1)
        }
    }

    //loadLess functon to decrease page number by button clicking
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

    //current Page Number
    const currentPageNumber = (searchResult.hospitals?.current_page)
    // search results length
    const searchResultLength = searchResult.hospitals?.data?.length
    // search result data
    const searchResultData = searchResult.hospitals?.data

    return (
        <div className="container mt-2">
            {searchResultLength === 0 ? <Spinner></Spinner> :
                <div>
                    <input className="form-control" placeholder="Search By District or Hospital Name" style={{ width: '100%' }} onChange={handleInputChange} type="text" />
                    <h3>Page No: {currentPageNumber}</h3>

                    {searchResultData?.map(data =>
                        <HospitalsGeneralInfo key={data.id} data={data}></HospitalsGeneralInfo>)
                    }
                    <div className="d-flex justify-content-around">
                        <button style={{ width: '150px', bottom: '0px' }} className="btn btn-primary my-2" onClick={loadMore}>load more</button>
                        <button style={{ width: '150px', bottom: '0px' }} className="btn btn-danger my-2" onClick={loadLess}>load Less</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Hospitals;

