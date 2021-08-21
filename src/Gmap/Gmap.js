import React from 'react'
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const containerStyle = {
//     width: '100%',
//     height: '300px'
// };

function Gmap(props) {
    // const { latitude, longitude } = props;

    // const location = {
    //     lat: latitude,
    //     lng: longitude
    // };

    // const onLoad = (marker) => {
    //     console.log('marker:', marker)
    // }
    return (
        // <LoadScript
        //     googleMapsApiKey="api key"
        // >
        //     <GoogleMap
        //         mapContainerStyle={containerStyle}
        //         center={location}
        //         zoom={10}
        //     >
        //         <Marker
        //             onLoad={onLoad}
        //             position={location}
        //         />
        //     </GoogleMap>
        // </LoadScript>
        <p className="mt-3">Google Map Api Key is not Valid</p>
    )
}

export default React.memo(Gmap)