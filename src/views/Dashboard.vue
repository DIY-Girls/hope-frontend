<template>
  <div class="home">
    <div id="mapid"></div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'dashboard',
  async mounted () {
    const res = await axios.get('https://location.services.mozilla.com/v1/geolocate?key=test');
    const lat = res.data.location.lat;
    const lng = res.data.location.lng;
    const mymap = L.map('mapid').setView([lat, lng], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
    const greenIcon = L.icon({
      iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      iconSize: [38, 95], // size of the icon
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
      shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png',
      shadowSize: [50, 64], // size of the shadow
      shadowAnchor: [4, 62] // the same for the shadow
    });
    L.marker([(lat - 10), (lng - 10)], { icon: greenIcon }).addTo(mymap);
    L.marker([lat, lng]).addTo(mymap);
  }

};
</script>

<style scoped>
#mapid { height: 500px; }
</style>
