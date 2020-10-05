import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoibWFzaGFzdGF2MzEiLCJhIjoiY2tmd3ljcDI0MWt1MjJ6czM2M25pNnkxNSJ9.HPzAR6-1YAiFZZ1tIsFRZg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundColor = "red";
 markerDomEl.style.backgroundImage = "url(https://i.insider.com/5ee3a6953ad86122eb02f81b?width=1100&format=jpeg&auto=webp)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago