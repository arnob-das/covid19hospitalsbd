import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const containerStyle = {
    width: '100%',
    height: '300px'
};


function Gmap(props) {
    // const { latitude, longitude } = props;

    console.log(props)

    const latitude1 = parseFloat(props.latitude)
    const longitude1= parseFloat(props.longitude)

    console.log(latitude1, longitude1)

    const location = {
        lat: latitude1,
        lng: longitude1
    };

    const onLoad = (marker) => {
        console.log("Marker:", marker)
    }
    return (
        <LoadScript
        // api key is only for educational purpose
            googleMapsApiKey=""
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={15}
            >
                <Marker
                    onLoad={onLoad}
                    position={location}
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Gmap)