
let myMap = L.map("map", {
	fullscreenControl: true
	}); 
let markerGroup = L.featureGroup();
let myLayers = {
    osm : L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"), 
        subdomains : ["a","b","c"], 
        attribution : "Datenquelle: <a href=openstreetmap.org</a>", 

    geolandbasemap : L.tileLayer("https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png", {
        subdomains : ["maps","maps1","maps2","maps3","maps4"], 
        attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>", 
    }
),
    bmapoverlay : L.tileLayer("https://{s}.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png", { 
    subdomains : ["maps","maps1","maps2","maps3","maps4"], 
    attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>",
    }
),
	elektronischeKarteSommer : L.tileLayer("http://wmts.kartetirol.at/wmts/gdi_base_summer/GoogleMapsCompatible/{z}/{x}/{y}.jpeg80", {
		attribution : "Datenquelle: <a href='https://www.kartetirol.at'>kartetirol.at</a>",
	}
), 
	elektronischeKarteWinter : L.tileLayer("http://wmts.kartetirol.at/wmts/gdi_base_winter/GoogleMapsCompatible/{z}/{x}/{y}.jpeg80", {
		attribution : "Datenquelle: <a href='https://www.kartetirol.at'>kartetirol.at</a>",
	}
), 
	elektronischeKarteNomenklatur : L.tileLayer("http://wmts.kartetirol.at/wmts/gdi_nomenklatur/GoogleMapsCompatible/{z}/{x}/{y}.jpeg80", {
		attribution : "Datenquelle: <a href='https://www.kartetirol.at'>kartetirol.at</a>",
	}
), 
	elektronischeKarteOrtho : L.tileLayer("http://wmts.kartetirol.at/wmts/gdi_ortho/GoogleMapsCompatible/{z}/{x}/{y}.jpeg80", {
		attribution : "Datenquelle: <a href='https://www.kartetirol.at'>kartetirol.at</a>",
	}
), 
}
myMap.addLayer(myLayers.elektronischeKarteSommer); 
myMap.addLayer (markerGroup);

let myMapControl = L.control.layers({ 
    "Openstreetmap" : myLayers.osm,
    "basemap.at Grundkarte" : myLayers.geolandbasemap,  
	"Elektronische Karte Sommer" : myLayers.elektronischeKarteSommer,
	"Elektronische Karte Winter" : myLayers.elektronischeKarteWinter,
	"Elektronische Karte Ortho" : myLayers.elektronischeKarteOrtho,
},{
    "basemap.at Overlay" : myLayers.bmapoverlay,
	"Nomenklatur Overlay" : myLayers.elektronischeKarteNomenklatur,
    "Start und Ziel" : markerGroup 
},{
    collapsed: false
}); 

myMap.addControl(myMapControl); 

myMap.setView([47.439152,10.639614], 11); 


L.control.scale({
    imperial: false, 
    maxWidth: 200, 
    position: "bottomleft"
}).addTo(myMap)

const start = [47.439152,10.639614]; 
const ziel = [47.499308, 10.516397];

const markerOptions = {
	opacity: 0.6,
	draggable: true
};

let startMarker = L.marker (start, {
	title: "start",
	icon: L.icon({
	iconUrl: 'images/start.png'})
	}).addTo(markerGroup);
startMarker.bindPopup("<p> Start in Weissenbach</p><img style='width:100px'/> <a href='https://de.wikipedia.org/wiki/Wei%C3%9Fenbach_am_Lech' > Mehr Information zu Weissenbach</a> ");

let zielMarker = L.marker (ziel, {
	title: "Ziel",
	icon: L.icon({
	iconUrl: 'images/finish.png'})
	}).addTo(markerGroup);
zielMarker.bindPopup("<p> Ziel in Tannheim</p><img style='width:100px' 7> <a href='https://de.wikipedia.org/wiki/Tannheimer_Tal' > Mehr Information zum Tannheimer Tal</a> ");

//let geojson = L.geoJSON(etappendata).addTo(markerGroup);
//geojson.bindPopup(function(Layer){
//	console.log("Layer for Popup:", layer.feature.geometry);
//	const props = layer.feature.geometry;
//	const popupText = `<p>${props.coordinates}</p>`;
//	return popupText;
//});

let gpxTrack = new L.GPX("data/etappe02.gpx", {
	async : true
}).addTo(markerGroup);
gpxTrack.on("loaded", function(evt) {
	console.log("get_distance",evt.target.get_distance().toFixed(0))
	console.log("get_elevation_min",evt.target.get_elevation_min().toFixed(0))
	console.log("get_elevation_max",evt.target.get_elevation_max().toFixed(0))
	console.log("get_elevation_gain",evt.target.get_elevation_gain().toFixed(0))
	console.log("get_elevation_loss",evt.target.get_elevation_loss().toFixed(0))
	
	let laenge = evt.target.get_distance().toFixed(0);
	document.getElementById("laenge").innerHTML = laenge;

	let tiefsterPunkt = evt.target.get_elevation_min().toFixed(0);
	document.getElementById("tiefster Punkt").innerHTML = tiefsterPunkt;

	let hoechsterPunkt = evt.target.get_elevation_max().toFixed(0);
	document.getElementById("höchster Punkt").innerHTML = hoechsterPunkt;

	let aufstieg = evt.target.get_elevation_gain().toFixed(0);
	document.getElementById("Aufstieg").innerHTML = aufstieg;

	let abstieg = evt.target.get_elevation_loss().toFixed(0);
	document.getElementById("Abstieg").innerHTML = abstieg;

	myMap.fitBounds(evt.target.getBounds());
})

//myMap.fitBounds(markerGroup.getBounds());