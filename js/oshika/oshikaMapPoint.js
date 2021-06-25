'use strict'

var geojsonFeature = [];
var markers = [];

var popupContents = ['<div class="popButton" onClick="modal_OshikaToyo()"><p>東洋館</p></div>', 
                        '<div class="popButton" onClick="modal_OshikaSogo()"><p>牡鹿総合支所</p></div>',
                        '<div class="popButton" onClick="modal_OshikaSeishin()"><p>おしか清心苑</p></div>',
                        '<div class="popButton" onClick="modal_OshikaSeiyu1()"><p>清優館①</p></div>',
                        '<div class="popButton" onClick="modal_OshikaSeiyu2()"><p>清優館②</p></div>',
                        '<div class="popButton" onClick="modal_OshikaMaru1()"><p>牡鹿交流ｾﾝﾀｰほっとまる①</p></div>',
                        '<div class="popButton" onClick="modal_OshikaMaru2()"><p>牡鹿交流ｾﾝﾀｰほっとまる②</p></div>',
                        '<div class="popButton" onClick="modal_OshikaYoriiso()"><p>寄磯診療所</p></div>',
                    ];




var lat = [38.302116,
    38.302183,
    38.299438,
    38.298420,
    38.297889,
    38.297536,
    38.296803,
    38.391484];
var lon = [141.509742,
    141.508229,
    141.500569,
    141.499142,
    141.498574,
    141.498337,
    141.498262,
    141.522424];

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
                    // layer.bindPopup(feature.properties.popupContent,{autoClose:false});
                    layer.bindPopup(feature.properties.popupContent);
                    geojsonFeature.push(layer);
                }
            },
            pointToLayer: function (feature, latlng) {
                var m = L.marker( latlng, { title : feature.properties.popupContent});
                markers.push( m );
                return m;
            }
            
        }).addTo(map);

        // function markersFunction() {
        //     for (var i in markers) {
        //         markers[i].openPopup();
        //     }
        // }

        // setTimeout(markersFunction, 100)
