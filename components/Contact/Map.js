import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  InfoWindowProps
} from "react-google-maps";
import { useState } from "react";
import { useRouter } from 'next/router';

const locations = [
  {
    branches :[
      { 
      position: {lat: 47.9220617, lng: 106.9047815},
      content: <div>Тэнгис Салбар</div>
    },
    { 
      position : { lat: 47.9178942, lng: 106.9359204 },
      content: <div>Бөхийн Өргөө Салбар</div>
    },
    {
      position :  { lat: 47.9126297, lng: 106.8532164 },
      content: <div>Саппоро Салбар</div>
    },
    { 
      position :  { lat: 47.903557, lng: 106.888714 },
      content: <div>Алтай Хотхон Салбар</div>
    }
  ]
  },
  {
    branches :[
    { 
      position: {lat: 47.9220617, lng: 106.9047815},
      content: <div>Branch 1</div>
    },
    { 
      position : { lat: 47.9178942, lng: 106.9359204 },
      content: <div>Branch 2</div>
    },
    {
      position :  { lat: 47.9126297, lng: 106.8532164 },
      content: <div>Branch 3</div>
    },
    { 
       position :  { lat: 47.903557, lng: 106.888714 },
      content: <div>Branch 4</div>
    }
    ],
  },
  {  
  branches :[
  { 
    position: {lat: 47.9220617, lng: 106.9047815},
    content: <div>分支 1</div>
  },
  { 
    position : { lat: 47.9178942, lng: 106.9359204 },
    content: <div>分支 2</div>
  },
  {
    position :  { lat: 47.9126297, lng: 106.8532164 },
    content: <div>分支 3</div>
  },
  { 
    position :  { lat: 47.903557, lng: 106.888714 },
    content: <div>分支 4</div>
  }
  ],
  },
]

const center = {lat : 47.912440, lng: 106.894883};

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
  

const Maps = ()=> {
  const [selectedPlace, setSelectedPlace] = useState()
  const [activeMarker, setActiveMarker] = useState()

   const onMarkerClick = () =>
   {
     console.log()
   }
 
  const onMapClicked = (props) => {
    
  };

  const router = useRouter();
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const MapExample = withScriptjs(

  withGoogleMap((props) => (
    <GoogleMap defaultZoom={13.4} defaultCenter={center} defaultOptions={defaultOptions} onClick={() => onMapClicked()}>
      {locations[l].branches.map((row, i) => <Marker key={i} position={row.position}  animation={google.maps.Animation.DROP} >
        <InfoWindow>
            {row.content}
        </InfoWindow>
      </Marker>)
     }
    </GoogleMap>
  ))
);
  return (
    <div className="h-[30rem] " >
      <MapExample googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDheX6GWXXkaWwxUBgyHkruGoCvFsl-zQw" loadingElement={<div className="h-full" />} containerElement={
        <div className="w-full rounded h-full" />
        }
        mapElement={<div className="rounded h-full" />}
      />
    </div>
  );
}

export default Maps;