'use strict'


let geojsonFeature = [];
let markers = [];
let filteringData;
let resultData = [];
let popupContents =[];
let lat =[];
let lon =[];
let mappingLayer;
let sortKeyWord;
const checkBoxAll = document.querySelectorAll('input[type="checkbox"]');
const sortBox = document.getElementById('sortBox');



function keyWordFilter() {

    onMapRemoved();
    checked();
}



for (let i = 0; i < checkBoxAll.length; i++) {
    checkBoxAll[i].addEventListener('change', function(){
        onMapRemoved();
        checked();
    })
}

function checked() {
    
    let popupContents =[];
    let lat =[];
    let lon =[]
    let parkingFlag = false;
    let babybedFlag = false;
    let ostomateFlag = false;
    let multisheetFlag = false;
    let buttonFlag = false;
    let showertoiletFlag = false;

    if (parkingCheck.checked) {
        parkingFlag = true;
        console.log("parkingTrue");
    }

    if (babybedCheck.checked) {
        babybedFlag = true;
        console.log("babybedTrue");
    }

    if (ostomateCheck.checked) {
        ostomateFlag = true;
        console.log("ostomateTrue")
    }

    if (multisheetCheck.checked) {
        multisheetFlag = true;
        console.log("multisheetTrue")
    }

    if (buttonCheck.checked) {
        buttonFlag = true;
        console.log("buttonTrue")
    }

    if (showerToiletCheck.checked) {
        showertoiletFlag = true;
        console.log("showertoiletTrue")
    }

    resultData = pointData;

    sortKeyWord = document.getElementById('sortBox').value;
    console.log(sortKeyWord);
    resultData = resultData.filter(function(item){
        return item.name.indexOf(sortKeyWord) > -1
    })
    console.log(resultData);

    if (parkingCheck.checked) {
        resultData = resultData.filter(point => point.parking == "true");
    }

    if(babybedCheck.checked) {
        resultData = resultData.filter(point => point.babybed == "true");
    }

    if (ostomateCheck.checked) {
       resultData = resultData.filter(point => point.ostomate == "true");
    }

    if (multisheetCheck.checked) {
        resultData = resultData.filter(point => point.multisheet == "true");
    }

    if (buttonCheck.checked) {
        resultData = resultData.filter(point => point.button == "true");
    }

    if (showerToiletCheck.checked) {
        resultData = resultData.filter(point => point.showertoilet == "true");
    }

    console.log(resultData);

    resultData.forEach((value) => {
        popupContents.push(value.popupContent);
        lat.push(value.lat);
        lon.push(value.lon);
    }) 

    if(!parkingFlag && !babybedFlag && !ostomateFlag && !multisheetFlag && !buttonFlag && !showertoiletFlag) {
        console.log("AllFalse");
        resultData.forEach((value) => {
            popupContents.push(value.popupContent);
            lat.push(value.lat);
            lon.push(value.lon);
        })
    }

    mapping(popupContents, lat, lon);


}

// 配列の情報をマッピングする
function mapping(popupContents, lat, lon,) {
   
    for (var i = 0; i < popupContents.length; i++) {
        geojsonFeature.push({
            "type": "Feature",
            "properties": {
            "popupContent": popupContents[i],
        },
        "geometry": {
          "type": "Point",
          "coordinates": [lon[i], lat[i]] 
        },
        });
    }

    mappingLayer = L.geoJson(geojsonFeature,

        {
            
            onEachFeature: function(feature, layer){
                
                if(feature.properties && feature.properties.popupContent){
                    layer.bindPopup(feature.properties.popupContent);
                    geojsonFeature.push(layer);
                }
            },
            pointToLayer: function (feature, latlng) {
                let m = L.marker( latlng, { title : feature.properties.popupContent});
                markers.push( m );
                return m;
            }
            
        }
            
    )


mappingLayer.addTo(map);
}

// geojsonFeatureをnullして、マップのマーカーを削除
function onMapRemoved() {
    
    geojsonFeature = [];
    mappingLayer.onRemove(map);
    resultData = [];
 }

checked();