// src/google-maps-augment.d.ts
declare namespace google.maps.marker {
    class AdvancedMarkerView {
      constructor(options: {
        position?: google.maps.LatLng | google.maps.LatLngLiteral;
        content?: HTMLElement;
        map?: google.maps.Map;
      });
  
      position: google.maps.LatLng | google.maps.LatLngLiteral;
      content: HTMLElement;
      map: google.maps.Map | null;
  
      addListener(eventName: string, handler: () => void): google.maps.MapsEventListener;
    }
}
  