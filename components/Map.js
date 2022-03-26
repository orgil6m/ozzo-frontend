import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { useState } from "react";

import marker from "../Assets/marker.svg"
const markerIcon = marker.src


const locations = [
  { 
    info:"salbar1" 
  },
  { 
    info:"salbar2"  
  },
  { lat: 47.9126297, lng: 106.8532164, info:"salbar3"  },
  { lat: 47.9021138, lng: 106.8893777, info:"salbar4"  }
]
const center = {lat : 47.9144131, lng:106.9013383};
const position = { lat: 47.9220617, lng: 106.9047815 }
const position2 =  { lat: 47.9180285, lng: 106.9347449 }
const position3 =  { lat: 47.9126297, lng: 106.8532164 }
const position4 =  { lat: 47.9021138, lng: 106.8893777 }


const defaultOptions = {
  styles: [
    {
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [{ color: "#444444" }],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [{ color: "#f2f2f2" }],
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [{ saturation: -100 }, { lightness: 45 }],
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [{ visibility: "simplified" }],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [{ color: "#4299e1" }, { visibility: "on" }],
    },
  ],
}

  const infoShow = (salbar) =>{
    alert(salbar.info)
    // return(
    //   <div className="fixed left-0 top-0 w-screen h-screen flex justify-center items-center">
    //     {salbar.info}
    //   </div>
    // )
}
  
const MapExample = withScriptjs(

  withGoogleMap((props) => (
    <GoogleMap  defaultZoom={13.4} defaultCenter={center} defaultOptions={defaultOptions}>
    <Marker position={position}  animation={google.maps.Animation.DROP} onClick={() => infoShow(locations[0])}/>
    <Marker position={position2} animation={google.maps.Animation.DROP} onClick={() => infoShow(locations[1])}/>
    <Marker position={position3} animation={google.maps.Animation.DROP} onClick={() => infoShow(locations[2])}/>
    <Marker position={position4} animation={google.maps.Animation.DROP} onClick={() => infoShow(locations[3])} />
  </GoogleMap>
  ))
);

const Maps = ()=> {
  return (
    <div className="h-[30rem] ">
      <MapExample googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDheX6GWXXkaWwxUBgyHkruGoCvFsl-zQw" loadingElement={<div className="h-full" />} containerElement={
        <div className="w-full rounded h-full" />
        }
        mapElement={<div className="rounded h-full" />}
      />
    </div>
  );
}

export default Maps;