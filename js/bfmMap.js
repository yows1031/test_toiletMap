'use strict'

var mapbase = document.getElementById('map');

var centerLat = 38.303212;
var centerLog = 141.502522;
var centerZoom = 13;
var bounds_leftLat = 38.738686;
var bounds_leftLon = 141.107540;
var bounds_rightLat = 38.219031;
var bounds_rightLon = 141.562614;



// var bounds_all = [
//     [bounds_leftLat, bounds_leftLon],[bounds_rightLat, bounds_rightLon]
// ]

var map = L.map('map', {
    center: [centerLat, centerLog],
    zoom: centerZoom,
    // maxBounds: bounds_all
});

var tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 20,
    autoClose:false
    });
    tileLayer.addTo(map);

    function home() {
        map.setView([38.417686 ,141.366405],11)
    }

    function station() {
        map.setView([38.432648,141.305980],16)
    }

    function sumiyoshi() {
        map.setView([38.441657,141.299854],15)
    }

    function minato() {
        map.setView([38.423049,141.329702],14)
    }

    function hebitaEast() {
        map.setView([38.445110,141.273150],15)
    }

    function hebitaWest() {
        map.setView([38.447043,141.260490],15)
    }

    function hebitaSouth() {
        map.setView([38.440892,141.265189],15)
    }

    function watanoha() {
        map.setView([38.421293,141.367328],14)
    }

    function inai() {
        map.setView([38.458184,141.320915],14)
    }

    function kama() {
        map.setView([38.430252,141.278793],15)
    }

    function kahoku() {
        map.setView([38.517397,141.307740],14)
    }

    function kanan() {
        map.setView([38.473498,141.224098],13)
    }

    function monou() {
        map.setView([38.563284,141.253795],14)
    }

    function kitakami() {
        map.setView([38.560817,141.422882],13)
    }
    function ogatsu_hagihama() {
        map.setView([38.519127,141.479401],13);
    }

    function oshika() {
        map.setView([38.298091, 141.505714],14);
    }
