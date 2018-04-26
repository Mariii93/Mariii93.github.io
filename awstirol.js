let myMap = L.map("mapdiv"); 
let markerGroup = L.featureGroup();
let myLayers = {
    geolandbasemap : L.tileLayer("https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png",{
        subdomains: ["maps","maps1","maps2","maps3","maps4"], 
        attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>",
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
myMap.addLayer(markerGroup);

let myMapControl = L.control.layers({ 
   "basemap.at Grundkarte" : myLayers.geolandbasemap,
   "basemap.at Orthofoto" : myLayers.bmaporthofoto30cm,
},{
    "basemap.at Overlay" : myLayers.bmapoverlay,
    "Wetterstationen" : markerGroup, 
},{collapsed: false}); 

myMap.addControl(myMapControl); 

L.control.scale({
    maxWidth: 200,
    imperial: false,
    position: 'bottomleft'
}).addTo(myMap) 

const Gehrenspitze = [47.387131,11.133717];
const Hafelekar = [47.312079, 11.383623];
const HoheMundeGipfel = [47.346295, 11.080385];
const HoheMundeWindstation = [47.346612, 11.083694];
const NassereithWannig = [47.336922, 10.862333];
const NassereitherAlm = [47.344376, 10.849554];
const Puitegg = [47.394844, 11.152817];
const Rauthhütte = [47.345909, 11.104943];
const RosshütteWindstation = [47.342025, 11.227903];
const Seegrube = [47.3063819943737, 11.3779335010812];
const Dalfazkamm = [47.448514, 11.751511];
const Erfurterhütte = [47.441861, 11.762127];
const Agetwoad = [47.069889, 10.862306];
const BreiterGrieskogelSchneestation = [47.0839527777778, 11.0273833333333];
const BreiterGrieskogelWindstation = [47.1010555555556, 11.0230388888889];
const Falkaunsalpe = [47.071488, 10.76282];
const FranzSennHütteHorntalerSpitzl = [47.099611, 11.15541667];
const FranzSennHütteKlHorntal = [47.0960000187559, 11.1623888694066];
const LampsenspitzeSchneestation = [47.153491, 11.120722];
const LampsenspitzeWindstation = [47.156075, 11.095642];
const RoterSchrofen = [47.04, 10.7181];
const SchlickerAlm = [47.154432, 11.303207];
const SeirlöcherKogel = [47.0339, 10.8528];
const Lämmerbichlalm = [47.181266, 11.751717];
const RastkogelWindstation = [47.192132, 11.767481];
const Sonntagsköpfl = [47.2750109996958, 11.7520860028295];
const SonntagsköpflWindstation = [47.271989, 11.755802];
const TuxerjochSchneestation = [47.093149, 11.648053];
const TuxerjochWindstation = [47.089717, 11.648987];
const WandspitzeSchneestation = [47.121858, 11.661969];
const WandspitzeWindstation = [47.120752, 11.658062];



const markerOptions = {
    title: "Wetterstation",
    opacity: 0.7,
    draggable: true
};

let GehrenspitzeMarker= L.marker (Gehrenspitze, {title: "Gehrenspitze"}).addTo(markerGroup);
GehrenspitzeMarker.bindPopup("<p>Gehrenspitze</br> Temperatur : 0.6 </br> Datum : 2018-04-26 </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/puitegg.png'> Wetterkarte </a></p>");

let HafelekarMarker = L.marker (Hafelekar, {title: "Hafelekar"}).addTo(markerGroup);
HafelekarMarker.bindPopup("<p>Hafelekar </br> Temperatur : 1.6 </br> Datum : 2018-04-26 </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/seegrube.png'> Wetterkarte </a></p>");

let HoheMundeGipfelMarker = L.marker (HoheMundeGipfel, {title: "Hohe Munde Gipfel"}).addTo(markerGroup);
HoheMundeGipfelMarker.bindPopup("<p>HoheMundeGipfel </br> Temperatur : - </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/woche/hohemunde.png' > Wetterkarte </a></p>");

let HoheMundeWindstationMarker = L.marker (HoheMundeWindstation, {title: "Hohe Munde Windstation"}).addTo(markerGroup);
HoheMundeWindstationMarker.bindPopup("<p>HoheMundeWindstation</br> Temperatur : -4.1 </br> Datum : 2018-04-26   </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/rauthhuette.png' > Wetterkarte </a></p>");

let NassereithWannigMarker = L.marker (NassereithWannig, {title: "Nassereith Wannig"}).addTo(markerGroup);
NassereithWannigMarker.bindPopup("<p>NassereithWannig</br> Temperatur : -1.2 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/nassereith.png' > Wetterkarte </a></p>");

let NassereitherAlmMarker = L.marker (NassereitherAlm, {title: "Nassereither Alm"}).addTo(markerGroup);
NassereitherAlmMarker.bindPopup("<p>NassereitherAlm</br> Temperatur : 4 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/nassereith.png' > Wetterkarte </a></p>");

let PuiteggMarker = L.marker (Puitegg, {title: "Puitegg"}).addTo(markerGroup);
PuiteggMarker.bindPopup("<p>Puitegg</br> Temperatur : 5.3 </br> Datum : 2018-04-26 </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/puitegg.png' > Wetterkarte </a></p>");

let RauthhütteMarker = L.marker (Rauthhütte, {title: "Rauthhütte"}).addTo(markerGroup);L.marker (Gehrenspitze, markerOptions).addTo(markerGroup);
RauthhütteMarker.bindPopup("<p>Rauthhütte</br> Temperatur : 11.7 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/rauthhuette.png' > Wetterkarte </a></p>");

let RosshütteWindstationMarker = L.marker (RosshütteWindstation, {title: "Rosshütte Windstation"}).addTo(markerGroup);
RosshütteWindstationMarker.bindPopup("<p>RosshütteWindstation</br> Temperatur : 4.1 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/rosshuette.png' > Wetterkarte </a></p>");

let SeegrubeMarker = L.marker (Seegrube, {title: "Seegrube"}).addTo(markerGroup);
SeegrubeMarker.bindPopup("<p>Seegrube</br> Temperatur : 3.1 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/seegrube.png'> Wetterkarte </a></p>");

let DalfazkammMarker = L.marker (Dalfazkamm, {title: "Dalfazkamm"}).addTo(markerGroup);L.marker (Gehrenspitze, markerOptions).addTo(markerGroup);
DalfazkammMarker.bindPopup("<p>Dalfazkamm</br> Temperatur : 0.4 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/erfurterhuette.png' > Wetterkarte </a></p>");

let ErfurterhütteMarker = L.marker (Erfurterhütte, {title: "Erfurterhütte"}).addTo(markerGroup);
ErfurterhütteMarker.bindPopup("<p>Erfurterhütte</br> Temperatur : 2.4 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/erfurterhuette.png' > Wetterkarte </a></p>");

let AgetwoadMarker = L.marker (Agetwoad, {title: "Agetwoad"}).addTo(markerGroup);
AgetwoadMarker.bindPopup("<p>Agetwoad</br> Temperatur : 1.5 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/agetwoad.png' > Wetterkarte </a></p>");

let BreiterGrieskogelSchneestationMarker = L.marker (BreiterGrieskogelSchneestation, {title: "Breiter Grieskogel Schneestation"}).addTo(markerGroup);L.marker (Gehrenspitze, markerOptions).addTo(markerGroup);
BreiterGrieskogelSchneestationMarker.bindPopup("<p>BreiterGrieskogelSchneestation</br> Temperatur : 1.1 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/breiter_grieskogel.png' > Wetterkarte </a></p>");

let BreiterGrieskogelWindstationMarker = L.marker (BreiterGrieskogelWindstation, {title: "Breiter Grieskogel Windstation"}).addTo(markerGroup);
BreiterGrieskogelWindstationMarker.bindPopup("<p>BreiterGrieskogelWindstation</br> Temperatur : -3.4 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/breiter_grieskogel.png' > Wetterkarte </a></p>");

let FalkaunsalpeMarker = L.marker (Falkaunsalpe, {title: "Falkaunsalpe"}).addTo(markerGroup);
FalkaunsalpeMarker.bindPopup("<p>Falkaunsalpe</br> Temperatur : 2.2 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/falkaunsalpe.png' > Wetterkarte </a></p>");

let FranzSennHütteHorntalerSpitzlMarker = L.marker (FranzSennHütteHorntalerSpitzl, {title: "Franz Senn Hütte Horntaler Spitzl"}).addTo(markerGroup);L.marker (Gehrenspitze, markerOptions).addTo(markerGroup);
FranzSennHütteHorntalerSpitzlMarker.bindPopup("<p>FranzSennHütteHorntalerSpitzl </br> Temperatur : 4.3 </br> Datum : 2018-04-25  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/franz_senn_huette.png' > Wetterkarte </a></p>");

let FranzSennHütteKlHorntalMarker = L.marker (FranzSennHütteKlHorntal, {title: "Franz Senn Hütte Kl Horntal"}).addTo(markerGroup);
FranzSennHütteKlHorntalMarker.bindPopup("<p>FranzSennHütteKlHorntal </br> Temperatur : 5.5 </br> Datum : 2018-04-25  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/franz_senn_huette.png' > Wetterkarte </a></p>");

let LampsenspitzeSchneestationMarker = L.marker (LampsenspitzeSchneestation, {title: "Lampsenspitze Schneestation"}).addTo(markerGroup);
LampsenspitzeSchneestationMarker.bindPopup("<p>LampsenspitzeSchneestation </br> Temperatur : 1.7 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/lampsenspitze.png' > Wetterkarte </a></p>");

let LampsenspitzeWindstationMarker = L.marker (LampsenspitzeWindstation, {title: "Lampsenspitze Windstation"}).addTo(markerGroup);L.marker (Gehrenspitze, markerOptions).addTo(markerGroup);
LampsenspitzeWindstationMarker.bindPopup("<p>LampsenspitzeWindstation</br> Temperatur : -0.8 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/lampsenspitze.png' alt= > Wetterkarte </a></p>");

let RoterSchrofenMarker = L.marker (RoterSchrofen, {title: "Roter Schrofen"}).addTo(markerGroup);
RoterSchrofenMarker.bindPopup("<p>RoterSchrofen</br> Temperatur : -1 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/falkaunsalpe.png' > Wetterkarte </a></p>");

let SchlickerAlmMarker = L.marker (SchlickerAlm, {title: "Schlicker Alm"}).addTo(markerGroup);
SchlickerAlmMarker.bindPopup("<p>SchlickerAlm</br> Temperatur : 6.5 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/schlickeralm.png' > Wetterkarte </a></p>");

let SeirlöcherKogelMarker = L.marker (SeirlöcherKogel, {title: "Seirlöcher Kogel"}).addTo(markerGroup);L.marker (Gehrenspitze, markerOptions).addTo(markerGroup);
SeirlöcherKogelMarker.bindPopup("<p>SeirlöcherKogel</br> Temperatur : 0 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/seirloecherkogel.png' > Wetterkarte </a></p>");

let LämmerbichlalmMarker = L.marker (Lämmerbichlalm, {title: "Lämmerbichlalm"}).addTo(markerGroup);
LämmerbichlalmMarker.bindPopup("<p>Lämmerbichlalm</br> Temperatur : 3 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/laemmerbichlalm.png' > Wetterkarte </a></p>");

let RastkogelWindstationMarker = L.marker (RastkogelWindstation, {title: "Rastkogel Windstation"}).addTo(markerGroup);
RastkogelWindstationMarker.bindPopup("<p>RastkogelWindstation</br> Temperatur : 0.1 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/laemmerbichlalm.png' > Wetterkarte </a></p>");

let SonntagsköpflMarker = L.marker (Sonntagsköpfl, {title: "Sonntagsköpfl"}).addTo(markerGroup);L.marker (Gehrenspitze, markerOptions).addTo(markerGroup);
SonntagsköpflMarker.bindPopup("<p>Sonntagsköpfl</br> Temperatur : 1.2 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/sonntagskoepfl.png' > Wetterkarte </a></p>");

let SonntagsköpflWindstationMarker = L.marker (SonntagsköpflWindstation, {title: "Sonntagsköpfl Windstation"}).addTo(markerGroup);
SonntagsköpflWindstationMarker.bindPopup("<p>SonntagsköpflWindstation</br> Temperatur : 3.3 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/sonntagskoepfl.png' > Wetterkarte </a></p>");

let TuxerjochSchneestationMarker = L.marker (TuxerjochSchneestation, {title: "Tuxerjoch Schneestation"}).addTo(markerGroup);
TuxerjochSchneestationMarker.bindPopup("<p>TuxerjochSchneestation </br> Temperatur : 6 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/tuxerjoch.png' > Wetterkarte </a></p>");

let TuxerjochWindstationMarker = L.marker (TuxerjochWindstation, {title: "Tuxerjoch Windstation"}).addTo(markerGroup);
TuxerjochWindstationMarker.bindPopup("<p>TuxerjochWindstation</br> Temperatur : 1.5 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/tuxerjoch.png' > Wetterkarte </a></p>");

let WandspitzeSchneestationMarker = L.marker (WandspitzeSchneestation, {title: "Wandspitze Schneestation"}).addTo(markerGroup);
WandspitzeSchneestationMarker.bindPopup("<p>WandspitzeSchneestation</br> Temperatur : 1.3 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/wandspitze.png' > Wetterkarte </a></p>");

let WandspitzeWindstationMarker = L.marker (WandspitzeWindstation, {title: "Wandspitze Windstation"}).addTo(markerGroup);
WandspitzeWindstationMarker.bindPopup("<p>WandspitzeWindstation</br> Temperatur : -0.3 </br> Datum : 2018-04-26  </br> <a href = 'https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/wandspitze.png' > Wetterkarte </a></p>");


myMap.fitBounds(markerGroup.getBounds());
