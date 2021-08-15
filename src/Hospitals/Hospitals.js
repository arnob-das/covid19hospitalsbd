import React, { useEffect, useState } from 'react';

const Hospitals = () => {
    // available hospitals url
    let hospitalsUrl = 'https://api2.covidhospitalsbd.com/api'

    //state declared for keeping search input, search result
    const [searchInput = '', setSearchInput] = useState()
    const [searchResult, setSearchResult] = useState([])

    //function to handle text input to set it in search result state
    const handleInputChange = event => {
        setSearchInput(event.target.value)
        console.log(event.target.value)
    }
    // if search input is not empty
    if (searchInput !== "") {
        // url for search input
        hospitalsUrl = `${hospitalsUrl}/available-hospitals?search=${searchInput}`
        console.log("single")
        console.log(hospitalsUrl)
    }
    // search input equals to empty
    else {
        // url for available hospitals
        hospitalsUrl = `${hospitalsUrl}/available-hospitals`
        console.log("all")
        console.log(hospitalsUrl)
    }
    useEffect(() => {
        fetch(hospitalsUrl)
            .then(res => res.json())
            .then(data => setSearchResult(data))
    }, [searchInput])
    console.log(searchResult.hospitals)
    console.log(searchResult.hospitals?.data)
    return (
        <div>
            <h1>This is Hospital Page</h1>
            <h2>{searchInput}</h2>
            <input onChange={handleInputChange} type="text" />
            {searchResult.hospitals?.data.map(data => <li>{data.name}</li>)}
        </div>
    );
};

export default Hospitals;