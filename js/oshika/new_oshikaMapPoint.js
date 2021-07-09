'use strict'



const pointData = [
    {name:"東洋館",
    parking:"false",
    babybed:"false",
    multisheet:"false",
    ostomate:"false",
    button:"false",
    showertoilet:"true",
    popupContent:'<div class="popButton" onClick="modal_OshikaToyo()"><p>東洋館</p></div>',
    lat:38.302116,lon:141.509742},
    {name:"牡鹿総合支所",
    parking:"false",
    babybed:"false",
    multisheet:"false",
    ostomate:"true",
    button:"false",
    showertoilet:"true",
    popupContent:'<div class="popButton" onClick="modal_OshikaSogo()"><p>牡鹿総合支所</p></div>',
    lat:38.302183,lon:141.508229},
    {name:"おしか清心苑",
    parking:"true",
    babybed:"false",
    multisheet:"false",
    ostomate:"true",
    button:"true",
    showertoilet:"true",
    popupContent:'<div class="popButton" onClick="modal_OshikaSeishin()"><p>おしか清心苑</p></div>',
    lat:38.299438,lon:141.500569},
    {name:"清優館①",
    parking:"true",
    babybed:"false",
    multisheet:"false",
    ostomate:"true",
    button:"true",
    showertoilet:"true",
    popupContent:'<div class="popButton" onClick="modal_OshikaSeiyu1()"><p>清優館①</p></div>',
    lat:38.298420,lon:141.499142},
    {name:"清優館②",
    parking:"true",
    babybed:"false",
    multisheet:"false",
    ostomate:"false",
    button:"true",
    showertoilet:"true",
    popupContent:'<div class="popButton" onClick="modal_OshikaSeiyu2()"><p>清優館②</p></div>',
    lat:38.297889,lon:141.498574},
    {name:"牡鹿交流センターほっとまる①",
    parking:"true",
    babybed:"false",
    multisheet:"false",
    ostomate:"false",
    button:"true",
    showertoilet:"true",
    popupContent:'<div class="popButton" onClick="modal_OshikaMaru1()"><p>牡鹿交流ｾﾝﾀｰほっとまる①</p></div>',
    lat:38.297536,lon:141.498337},
    {name:"牡鹿交流センターほっとまる②",
    parking:"true",
    babybed:"false",
    multisheet:"false",
    ostomate:"false",
    button:"true",
    showertoilet:"true",
    popupContent:'<div class="popButton" onClick="modal_OshikaMaru2()"><p>牡鹿交流ｾﾝﾀｰほっとまる②</p></div>',
    lat:38.296803,lon:141.498262},
    {name:"寄磯診療所",
    parking:"true",
    babybed:"false",
    multisheet:"false",
    ostomate:"true",
    button:"true",
    showertoilet:"true",
    popupContent:'<div class="popButton" onClick="modal_OshikaYoriiso()"><p>寄磯診療所</p></div>',
    lat:38.391484,lon:141.522424}, 
];


let geojsonFeature = [];
let markers = [];
let popupContents =[];
let lat =[];
let lon =[];

const parkingCheck = document.getElementById('parkingCheck');

parkingCheck.addEventListener('change', function(){
    onMapRemoved();
    checked();
})

function checked() {
    
    let geojsonFeature = [];
    let markers = [];
    let popupContents =[];
    let lat =[];
    let lon =[];
    
   
    let parkingFlag = false;

    if (parkingCheck.checked) {
        parkingFlag = true;
        console.log("parkingTrue");
        let parkingData = pointData.filter((point) => {
            return (point.parking == "true");
        });
        for (let i = 0; i < parkingData.length; i++) {
            popupContents.push(pointData[i].popupContent);
            lat.push(pointData[i].lat);
            lon.push(pointData[i].lon);
        }
    }

    if(!parkingFlag) {
        console.log("parkingFalse");
        let parkingData = pointData;
        for (let i = 0; i <parkingData.length; i++) {
            popupContents.push(pointData[i].popupContent);
            lat.push(pointData[i].lat);
            lon.push(pointData[i].lon);
        }
    }

    

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

    

    L.geoJson(geojsonFeature,

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
                console.log(markers);
                return m;
            }
            
        }
    ).addTo(map);
    
    
}

function onMapRemoved() {
       map.removeLayer(geoJson);
    }


checked();