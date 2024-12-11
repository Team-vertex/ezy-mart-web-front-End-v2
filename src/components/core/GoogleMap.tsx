import { GOOGLE_API_KEY } from '@/configs/app';
import { IMarker } from '@/types/common';
import { Status, Wrapper } from '@googlemaps/react-wrapper';

import React, { useEffect, useRef, useState } from 'react';

export function MapWithMarker<T extends IMarker>({
  markers,
  onMarkerClick,
}: {
  markers: T[] | undefined;
  onMarkerClick: (marker: T) => void;
}) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [userLocation, setUserLocation] =
    useState<google.maps.LatLngLiteral | null>(null);

  useEffect(() => {
    // Get the user's live location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error fetching location: ', error);
          // Fallback: Show all markers without user location
          setUserLocation(null);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      // Fallback: Show all markers without user location
      setUserLocation(null);
    }
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      const map = new google.maps.Map(mapRef.current, {
        zoom: 4,
        maxZoom: 15,
        minZoom: 3,
        restriction: {
          latLngBounds: {
            north: 85, // Extended to include all possible markers
            south: -85,
            west: -180,
            east: 180,
          },
          strictBounds: false,
        },
        styles: [
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'road',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
        ],
      });

      const bounds = new google.maps.LatLngBounds();

      // Add all markers to the map
      markers?.forEach((marker) => {
        const position = marker.coordinates;
        const googleMarker = new google.maps.Marker({
          position,
          map,
          animation: google.maps.Animation.DROP,
        });

        googleMarker.addListener('click', () => onMarkerClick(marker));
        bounds.extend(position);
      });

      // Add user location marker if available
      if (userLocation) {
        // const userMarker = new google.maps.Marker({
        //   position: userLocation,
        //   map,
        //   title: 'You are here',
        //   animation: google.maps.Animation.DROP,
        // });

        bounds.extend(userLocation);

        // Highlight markers within 100km of user location
        const R = 6371;
        const markersWithinRadius = markers?.filter((marker) => {
          const distance = haversineDistance(
            userLocation,
            marker.coordinates,
            R
          );
          return distance <= 100;
        });

        markersWithinRadius?.forEach((marker) => {
          const position = marker.coordinates;
          const googleMarker = new google.maps.Marker({
            position,
            map,
            animation: google.maps.Animation.DROP,
          });

          googleMarker.addListener('click', () => onMarkerClick(marker));
        });
      }

      // Adjust the map to fit all markers
      map.fitBounds(bounds);
    }
  }, [userLocation, markers]);

  // Helper function to calculate distance using the Haversine formula
  const haversineDistance = (
    coords1: google.maps.LatLngLiteral,
    coords2: google.maps.LatLngLiteral,
    radius: number
  ): number => {
    const toRad = (value: number) => (value * Math.PI) / 180;

    const lat1 = toRad(coords1.lat);
    const lon1 = toRad(coords1.lng);
    const lat2 = toRad(coords2.lat);
    const lon2 = toRad(coords2.lng);

    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return radius * c; // Distance in km
  };

  return <div ref={mapRef} className="min-w-full h-[500px]" />;
}

export default function GoogleMapWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const render = (status: Status): JSX.Element => {
    if (status === 'LOADING') {
      return <div>Loading...</div>;
    }
    if (status === 'FAILURE') {
      return <div>Failed to load maps</div>;
    }
    return <div>Map ready</div>;
  };

  return (
    <Wrapper
      apiKey={GOOGLE_API_KEY}
      version="beta"
      libraries={['marker']}
      render={render}
    >
      {children}
    </Wrapper>
  );
}
