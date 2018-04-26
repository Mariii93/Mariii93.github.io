let myMap = L.map("mapdiv"); //http://leafletjs.com/reference-1.3.0.html#map-l-map

let myLayers = {
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
    bmaporthofoto30cm : L.tileLayer("https://{s}.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg",{
        subdomains: ["maps","maps1","maps2","maps3","maps4"],
        attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>",
        }
    ),
    }
myMap.addLayer(myLayers.geolandbasemap); 

let myMapControl = L.control.layers({
   
    "basemap.at Grundkarte" : myLayers.geolandbasemap,
    "basemap.at Orthofoto" : myLayers.bmaporthofoto30cm,

},{
    "basemap.at Overlay" : myLayers.bmapoverlay, 
},{collapsed: false}); //http://leafletjs.com/reference-1.3.0.html#control-layers-collapsed

myMap.addControl(myMapControl); //http://leafletjs.com/reference-1.3.0.html#map-addcontrol


myMap.setView([47.267,11.383], 11); //http://leafletjs.com/reference-1.3.0.html#map-setview


L.control.scale({
    maxWidth: 200,
    imperial: false,
    position: 'bottomleft'
}).addTo(myMap) 