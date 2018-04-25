
let myMap = L.map("mapdiv"); //http://leafletjs.com/reference-1.3.0.html#map-l-map
let markerGroup = L.featureGroup();
let myLayers = {
    osm : L.tileLayer ("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"), //http://leafletjs.com/reference-1.3.0.html#tilelayer-l-tilelayer
        subdomains: ["maps","maps1","maps2","maps3","maps4"], 
        attribution: "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>", 
    
        geolandbasemap : L.tileLayer("https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png",{
        subdomains: ["maps","maps1","maps2","maps3","maps4"], //http://leafletjs.com/reference-1.3.0.html#tilelayer-subdomains
        attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>", //http://leafletjs.com/reference-1.3.0.html#layer-attribution
        }
    ),
        
    bmapoverlay : L.tileLayer("https://{s}.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png",{
        subdomains: ["maps","maps1","maps2","maps3","maps4"],
        attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>",
        }
    ),
    bmapgrau : L.tileLayer("https://{s}.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png",{
        subdomains: ["maps","maps1","maps2","maps3","maps4"],
        attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>",
        }
    ),
    bmaphidpi : L.tileLayer("https://{s}.wien.gv.at/basemap/bmaphidpi/normal/google3857/{z}/{y}/{x}.jpeg",{
        subdomains: ["maps","maps1","maps2","maps3","maps4"],
        attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>",
        }
    ),
    bmaporthofoto30cm : L.tileLayer("https://{s}.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg",{
        subdomains: ["maps","maps1","maps2","maps3","maps4"],
        attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>",
        }
    ),
    }
myMap.addLayer(myLayers.osm); //http://leafletjs.com/reference-1.3.0.html#layergroup-addlayer
myMap.addLayer(markerGroup);

let myMapControl = L.control.layers({ //http://leafletjs.com/reference-1.3.0.html#control-layers-l-control-layers
    "Openstreetmap" : myLayers.osm,
    "basemap.at Grundkarte" : myLayers.geolandbasemap,
   
    "basemap.at grau" : myLayers.bmapgrau,
    "basemap.at highdpi" : myLayers.bmaphidpi,
    "basemap.at Orthofoto" : myLayers.bmaporthofoto30cm,

},{
    "basemap.at Overlay" : myLayers.bmapoverlay,
    "Marker" : markerGroup, 
},{collapsed: false}); //http://leafletjs.com/reference-1.3.0.html#control-layers-collapsed

myMap.addControl(myMapControl); //http://leafletjs.com/reference-1.3.0.html#map-addcontrol


myMap.setView([47.267,11.383], 11); //http://leafletjs.com/reference-1.3.0.html#map-setview

L.control.scale({
    maxWidth: 200,
    imperial: false,
    position: 'bottomleft'
}).addTo(myMap) 
//http://leafletjs.com/reference-1.3.0.html#control-scale-l-control-scale
//http://leafletjs.com/reference-1.3.0.html#control-scale-maxwidth
//http://leafletjs.com/reference-1.3.0.html#control-scale-metric
//http://leafletjs.com/reference-1.3.0.html#control-scale-position

const uni = [47.264, 11.385];
const usi = [47.257, 11.356];
const technik = [47.263, 11.343];
const patscherkofel = [47.2086, 11.4606];
const igls = [47.2308, 11.4089];
const markerOptions = {
    title: "Universität Innsbruck",
    opacity: 0.7,
    draggable: true
};
L.marker(uni, markerOptions).addTo(markerGroup);
L.marker (usi, markerOptions).addTo(markerGroup);
L.marker (technik, markerOptions).addTo(markerGroup);
L.marker (igls, markerOptions).addTo(markerGroup);

let patscherkofelMarker = L.marker (patscherkofel, markerOptions).addTo(markerGroup);
patscherkofelMarker.bindPopup("<p>Patscherkofel</p> <img style= 'width: 300px' src ='https://cdn.pixabay.com/photo/2017/03/11/10/03/igls-2134794_960_720.jpg' alt= 'Patscherkofel' />");


myMap.fitBounds(markerGroup.getBounds());

//myMap.setView(uni, 14);