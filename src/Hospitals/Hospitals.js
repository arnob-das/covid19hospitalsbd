import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hospitals = () => {
    // available hospitals url
    let hospitalsUrl = 'https://api2.covidhospitalsbd.com/api'

    //state declared to store data in search-input, search-result state
    const [searchInput = '', setSearchInput] = useState()
    const [pageNumber = 1, setPageNumber] = useState()
    const [newSearchResult, setNewSearchResult] = useState()
    const [searchResult, setSearchResult] = useState([])

    const pageNumberNow = (searchResult.hospitals?.current_page)


    //function to handle text input to set it in search-input state
    const handleInputChange = event => {
        setSearchInput(event.target.value)
    }

    // // if search input is not empty
    // if (searchInput !== "") {
    //     // url for search input
    //     hospitalsUrl = `${hospitalsUrl}/available-hospitals?search=${searchInput}`
    //     // console.log(hospitalsUrl)
    // }
    // // search input equals to empty
    // else {
    //     // url for available hospitals
    //     hospitalsUrl = `${hospitalsUrl}/available-hospitals`
    //     console.log(hospitalsUrl)
    // }

    //loadMore functon for button click
    const loadMore = () => {
        if (pageNumber >= (searchResult.hospitals?.total)/10) {
            window.alert('No More Pages Available')
        } else {
            setPageNumber(pageNumber + 1)
        }
    }

    //loadMore functon for button click
    const loadLess = () => {
        if (pageNumber === 1) {
            window.alert('page number 1')
        }
        else {
            setPageNumber(pageNumber - 1)
        }
    }

    //fetching data from api
    useEffect(() => {
        fetch(`${hospitalsUrl}/available-hospitals?page=${pageNumber}`)
            .then(res => res.json())
            .then(data => setSearchResult(data))
    }, [pageNumber])

    console.log(searchResult)
    console.log(searchResult.hospitals?.total)
    return (
        <div className="container">
            <h1>This is Hospital Page</h1>
            <h2>{searchInput}</h2>
            <input onChange={handleInputChange} type="text" />
            <h3>Page No: {pageNumberNow}</h3>
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