import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};

function GoogleMap() {
    let myLat, myLng;

    myLat = 21.816399
    myLng = 89.462839

    return (
        <Map
            google="sundarban"
            zoom={15}
            style={mapStyles}
            initialCenter={{
                lat: myLat,
                lng: myLng,
            }}>
            <Marker position={{ lat: myLat, lng: myLng }} />
        </Map>
    );
}
export default GoogleApiWrapper({
    apiKey: '',
})(GoogleMap);
