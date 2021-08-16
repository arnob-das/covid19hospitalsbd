import React, { useEffect, useState } from 'react';

const Hospitals = () => {
    // available hospitals url
    let hospitalsUrl = 'https://api2.covidhospitalsbd.com/api'

    //state declared to store data in search-input, search-result state
    const [searchInput = '', setSearchInput] = useState()
    const [searchResult, setSearchResult] = useState([])

    //function to handle text input to set it in search-input state
    const handleInputChange = event => {
        setSearchInput(event.target.value)
    }

    // if search input is not empty
    if (searchInput !== "") {
        // url for search input
        hospitalsUrl = `${hospitalsUrl}/available-hospitals?search=${searchInput}`
        // console.log(hospitalsUrl)
    }
    // search input equals to empty
    else {
        // url for available hospitals
        hospitalsUrl = `${hospitalsUrl}/available-hospitals`
        console.log(hospitalsUrl)
    }

    //fetching data from api
    useEffect(() => {
        fetch(hospitalsUrl)
            .then(res => res.json())
            .then(data => setSearchResult(data))
    }, [searchInput])
    return (
        <div>
            <h1>This is Hospital Page</h1>
            <h2>{searchInput}</h2>
            <input onChange={handleInputChange} type="text" />
            <h3>Result Found {searchResult.hospitals?.data?.length}</h3>
            {searchResult.hospitals?.data?.map(data =>
                <div key={data.id}>
                    <h3>{data.name}</h3>
                    <p>general_beds_available {data.general_beds_available}</p>
                    <p>icu_beds_available {data.icu_beds_available}</p>
                </div>)}
        </div>
    );
};

export default Hospitals;