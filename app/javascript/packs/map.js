import GMaps from 'gmaps/gmaps.js';

const mapElement = document.getElementById('map');
if (mapElement) { // don't try to build a map if there's no div#map to inject in
  const map = new GMaps({ el: '#map', lat: 0, lng: 0 });

  const marker = JSON.parse(mapElement.dataset.marker);

  map.addMarker({
    lat: marker['lat'],
    lng: marker['lng'],
    title: 'CrossFit Watchman',
  });

  map.setCenter(marker['lat'], marker['lng']);
  map.setZoom(14);
}
