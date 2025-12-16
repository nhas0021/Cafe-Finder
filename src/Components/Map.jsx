// src/Components/Map.jsx
import { useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const fallbackCenter = {
  lat: -37.8136, // Melbourne fallback
  lng: 144.9631,
};

function Map({ onCafesChange }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [center, setCenter] = useState(fallbackCenter);
  const [map, setMap] = useState(null);
  const [cafes, setCafes] = useState([]);

  // Get user location
  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(
      (pos) => {
        setCenter({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      () => {
        // user denied → stay at fallback
      }
    );
  }, []);

  // Search nearby cafes when map + center ready
  useEffect(() => {
    if (!map) return;

    const service = new window.google.maps.places.PlacesService(map);

    service.nearbySearch(
      {
        location: center,
        radius: 1500,
        type: "cafe",
      },
      (results, status) => {
        if (
          status !== window.google.maps.places.PlacesServiceStatus.OK ||
          !results
        )
          return;

        const simplified = results.map((place) => {
          const photoRef = place.photos?.[0]?.photo_reference;

          return {
            id: place.place_id,
            name: place.name,
            address: place.vicinity,
            photoUrl: photoRef
              ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
              : null,
            location: {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            },
          };
        });


        setCafes(simplified);
        onCafesChange?.(simplified);
      }
    );
  }, [map, center, onCafesChange]);

  if (!isLoaded) return null;

  return (
    <section className="map-section">
      <div className="map-box">
        <GoogleMap
          center={center}
          zoom={14}
          mapContainerClassName="map"
          onLoad={(mapInstance) => setMap(mapInstance)}
          onClick={(e) => {
            // e.latLng is a Google LatLng object
            const lat = e.latLng.lat();
            const lng = e.latLng.lng();

            // Move the search center to where user clicked
            setCenter({ lat, lng });

            // Optional: pan smoothly to clicked point
            map?.panTo({ lat, lng });
          }
          }
        >
          {/* user marker */}
          <Marker position={center} icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"/>

          {/* cafe markers */}
          {cafes.map((cafe) => (
            <Marker key={cafe.id} position={cafe.location} />
          ))}
        </GoogleMap>
      </div>
    </section>
  );
}

export default Map;
