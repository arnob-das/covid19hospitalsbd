import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

    //current Page Number
    const currentPageNumber = (searchResult.hospitals?.current_page)

    // if search input is not empty
    if (searchInput !== "") {
        // url for search input
        hospitalsUrl = `${hospitalsUrl}?search=${searchInput}&&page=${pageNumber}`
        // console.log(hospitalsUrl)
    }
    // search input equals to empty
    else {
        // url for available hospitals
        hospitalsUrl = `${hospitalsUrl}?page=${pageNumber}`
    }

    //loadMore functon to increase page number by button clicking
    const loadMore = () => {
        if (pageNumber >= (parseInt(searchResult.hospitals?.total) / 10)) {
            window.alert('No More Pages Available')
        } else {
            setPageNumber(pageNumber + 1)
        }
    }

    //loadLess functon to decrease page number by button clicking
    const loadLess = () => {
        if (pageNumber === 1) {
            window.alert('page number 1')
        }
        else {
            setPageNumber(pageNumber - 1)
        }
    }
    console.log(hospitalsUrl)
    console.log(searchResult.hospitals?.total)
    //fetching data from api
    useEffect(() => {
        // fetch(`${hospitalsUrl}?search=bogura?page=${pageNumber}`)
        fetch(hospitalsUrl)
            .then(res => res.json())
            .then(data => setSearchResult(data))
    }, [hospitalsUrl])

    console.log(searchResult)
    return (
        <div className="container">
            <h1>This is Hospital Page</h1>
            <h2>{searchInput}</h2>
            <input onChange={handleInputChange} type="text" />
            <h3>Page No: {currentPageNumber}</h3>
            {searchResult.hospitals?.data?.map(data =>
                <div key={data.id}>
                    <h3><Link className="text-danger" style={{ textDecoration: 'none' }} to={`/hospitalsDetails/${data.id}`}>{data.name}</Link></h3>
                    <p>general_beds_available {data.general_beds_available}</p>
                    <p>icu_beds_available {data.icu_beds_available}</p>
                </div>)}
            <div className="row d-flex justify-content-center align-items-center">
                <button style={{ width: '150px', bottom: '0px', left: '0px', position: 'fixed' }} className="btn btn-primary mx-5" onClick={loadMore}>load more</button>
                <button style={{ width: '150px', bottom: '0px', right: '0px', position: 'fixed' }} className="btn btn-danger mx-5" onClick={loadLess}>load Less</button>
            </div>
        </div>
    );
};

export default Hospitals;