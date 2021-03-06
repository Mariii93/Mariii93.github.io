
let myMap = L.map("mapdiv"); //http://leafletjs.com/reference-1.3.0.html#map-l-map
let markerGroup = L.featureGroup();
let myLayers = {
    osm : L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"), //http://leafletjs.com/reference-1.3.0.html#tilelayer-l-tilelayer
        subdomains : ["maps","maps1","maps2","maps3","maps4"], 
        attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>", 

    geolandbasemap : L.tileLayer("https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png", {
        subdomains : ["maps","maps1","maps2","maps3","maps4"], //http://leafletjs.com/reference-1.3.0.html#tilelayer-subdomains
        attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>", //http://leafletjs.com/reference-1.3.0.html#layer-attribution
    }
),
    bmapoverlay : L.tileLayer("https://{s}.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png", { 
    subdomains : ["maps","maps1","maps2","maps3","maps4"], 
    attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>",
    }
),
   
    bmapgrau : L.tileLayer("https://{s}.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png",{
    subdomains : ["maps","maps1","maps2","maps3","maps4"], 
    attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>",
    }
),
    bmaphidpi : L.tileLayer("https://{s}.wien.gv.at/basemap/bmaphidpi/normal/google3857/{z}/{y}/{x}.jpeg",{
    subdomains : ["maps","maps1","maps2","maps3","maps4"], 
    attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>",
    }
),
    bmaporthofoto30cm : L.tileLayer("https://{s}.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg",{
    subdomains : ["maps","maps1","maps2","maps3","maps4"], 
    attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>",
    }
),
}
myMap.addLayer(myLayers.geolandbasemap); //http://leafletjs.com/reference-1.3.0.html#layergroup-addlayer
myMap.addLayer(markerGroup);

let myMapControl = L.control.layers({ //http://leafletjs.com/reference-1.3.0.html#control-layers-l-control-layers
    "Openstreetmap" : myLayers.osm,
    "basemap.at Grundkarte" : myLayers.geolandbasemap,
    "basemap.at Overlay" : myLayers.bmapoverlay,
    "basemap.at grau" : myLayers.bmapgrau,
    "basemap.at highdpi" : myLayers.bmaphidpi,
    "basemap. at Orthofoto" : myLayers.bmaporthofoto30cm, 
},{
    "basemap.at Overlay" : myLayers.bmapoverlay,
    "Universität IBK": markerGroup, 
    
},{
    collapsed: false
}); // Sollte eigentlich darüber gehen http://leafletjs.com/reference-1.3.0.html#control-layers-collapsed

myMap.addControl(myMapControl); //http://leafletjs.com/reference-1.3.0.html#map-addcontrol

myMap.setView([47.267,11.383], 11); //http://leafletjs.com/reference-1.3.0.html#map-setview


L.control.scale({
    imperial: false, 
    maxWidth: 200, 
    position: "bottomleft"
}).addTo(myMap)

// verwendete Methode: http://leafletjs.com/reference-1.3.0.html#control-scale-l-control-scale
// verwendete Optionen: http://leafletjs.com/reference-1.3.0.html#control-scale-maxwidth
// http://leafletjs.com/reference-1.3.0.html#control-scale-metric
// http://leafletjs.com/reference-1.3.0.html#control-scale-position

const uni = [47.264, 11.385];
const usi = [47.257, 11.356];
const technik = [47.263, 11.343];
const igls = [47.230, 11.408];
const patscherkofl = [47.208, 11.460];
const patscherkoflPic = "https://www.tirol.gv.at/umwelt/luft/messnetz-galerie-webcams/livebilder/"
    
const markerOptions = {
    title: "Universität Innsbruck",
    opacity: 0.7,
    draggable: true
};
L.marker(uni, markerOptions).addTo(markerGroup);
L.marker(usi, markerOptions).addTo(markerGroup);
L.marker(technik, markerOptions).addTo(markerGroup);  // fügt einen Marker an der gewünschten Stelle ein

L.marker(igls,{title: "Igls", opacity: 0.7}).addTo(markerGroup);
let patscherkoflMarker = L.marker(patscherkofl, {title: "Patscherkofel"}).addTo(markerGroup);
patscherkoflMarker.bindPopup("<p>Patscherkofl von der Nordkette aus</p><img style='width:200px' src='https://apps.tirol.gv.at/luft/nordkette.jpg' alt='Patscherkofel' />");

let lift = L.polyline([igls, patscherkofl], {
    color: 'red'
});
myMap.addLayer(lift)

let uniPolygon = L.polygon([uni, usi, technik]);
myMap.addLayer(uniPolygon);

myMap.fitBounds(markerGroup.getBounds()); // Zentriert die drei Marker in einem neuen Ausschnitt