"use client";
import { useState, useCallback, memo } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const Map = ({ locations, slugs }) => {
  const containerStyle = {
    width: "100%",
    height: "90%",
  };

  const center = {
    lat: locations[0]?.latitude,
    lng: locations[0]?.longtitude,
  };

  const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBgN5_IiT91B7wU9bGpwuivfaOtMfDjLUg",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(
    (map) => {
      const bounds = new window.google.maps.LatLngBounds();

      locations.forEach((location) => {
        bounds.extend({ lat: location.latitude, lng: location.longtitude });
      });

      map.fitBounds(bounds);
      setMap(map);
    },
    [locations]
  );

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={{ lat: location.latitude, lng: location.longtitude }}
              icon={{
                url: image,
                anchor: new window.google.maps.Point(5, 58),
              }}
              onClick={() =>
                (window.location.href = `/properties/${slugs[index]}`)
              }
            />
          ))}
        </GoogleMap>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default memo(Map);
