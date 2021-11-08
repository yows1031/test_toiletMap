'use strict';

// 写真配列
const oshikaToyoImages = [
    'img/pic/oshika/toyo/toyo1.png',
    'img/pic/oshika/toyo/toyo2.png',
    'img/pic/oshika/toyo/toyo3.png',
    'img/pic/oshika/toyo/toyo4.png',
    'img/pic/oshika/toyo/toyo5.png',
];

const oshikaSogoImages = [
    'img/pic/oshika/sougou/sougou1.png',
    'img/pic/oshika/sougou/sougou2.png',
    'img/pic/oshika/sougou/sougou3.png',
    'img/pic/oshika/sougou/sougou4.png',
    'img/pic/oshika/sougou/sougou5.png',
];

const oshikaSeishinImages = [
    'img/pic/oshika/seishinen/seishin1.png',
    'img/pic/oshika/seishinen/seishin2.png',
    'img/pic/oshika/seishinen/seishin3.png',
    'img/pic/oshika/seishinen/seishin4.png',
    'img/pic/oshika/seishinen/seishin5.png',
];

const oshikaSeiyu1Images = [
    'img/pic/oshika/seiyukan1/seiyu1.png',
    'img/pic/oshika/seiyukan1/seiyu2.png',
    'img/pic/oshika/seiyukan1/seiyu3.png',
    'img/pic/oshika/seiyukan1/seiyu4.png',
    'img/pic/oshika/seiyukan1/seiyu5.png',
];

const oshikaSeiyu2Images = [
    'img/pic/oshika/seiyukan2/2seiyu1.png',
    'img/pic/oshika/seiyukan2/2seiyu2.png',
    'img/pic/oshika/seiyukan2/2seiyu3.png',
    'img/pic/oshika/seiyukan2/2seiyu4.png',
    'img/pic/oshika/seiyukan2/2seiyu5.png',
];

const oshikaMaru1Images = [
    'img/pic/oshika/maru1/maru1.png',
    'img/pic/oshika/maru1/maru2.png',
    'img/pic/oshika/maru1/maru3.png',
    'img/pic/oshika/maru1/maru4.png',
    'img/pic/oshika/maru1/maru5.png',
];

const oshiikaMaru2Images = [
    'img/pic/oshika/maru2/2maru1.png',
    'img/pic/oshika/maru2/2maru2.png',
    'img/pic/oshika/maru2/2maru3.png',
    'img/pic/oshika/maru2/2maru4.png',
    'img/pic/oshika/maru2/2maru5.png',
];

const oshikaYoriisoImages = [
    'img/pic/oshika/yoriiso/yoriiso1.png',
    'img/pic/oshika/yoriiso/yoriiso2.png',
    'img/pic/oshika/yoriiso/yoriiso3.png',
    'img/pic/oshika/yoriiso/yoriiso4.png',
    'img/pic/oshika/yoriiso/yoriiso4.png',
];

// モーダル情報
const oshikaToyoModal = [
    {title: '<p><img src="icon/info.png" alt="東洋館です。トイレに近い入り口は、不明です。シャワートイレがあります">東洋館<img onClick="back()"  src="icon/back.png" alt="このボタンで地図に戻ります"></p>',
    parking: '<img src="icon/parking_ng.png">',parkingSign:"なし",
    babybed: '<img src="icon/babybed_ng.png">',babybedSign:"なし",
    multisheet: '<img src="icon/multisheet_ng.png">',multisheetSign:"なし",
    ostomate: '<img src="icon/ostomate_ng.png">',ostomateSign:"なし",
    button: '<img src="icon/button_ng.png">',buttonSign:"なし",
    showertoilet: '<img src="icon/showertoilet.png">',showertoiletSign:"あり",
    tdTime:"９：００〜１６：３０　45-2206",}
];

const oshikaSogoModal = [
    {title: '<p><img src="icon/info.png" alt="牡鹿総合支所です。トイレに近い入り口は、不明です。オストメイトあります。シャワートイレがあります">牡鹿総合支所<img onClick="back()"  src="icon/back.png" alt="このボタンで地図に戻ります"></p>',
    parking: '<img src="icon/parking_ng.png">',parkingSign:"なし",
    babybed: '<img src="icon/babybed_ng.png">',babybedSign:"なし",
    multisheet: '<img src="icon/multisheet.png">',multisheetSign:"あり",
    ostomate: '<img src="icon/ostomate_ng.png">',ostomateSign:"なし",
    button: '<img src="icon/button_ng.png">',buttonSign:"なし",
    showertoilet: '<img src="icon/showertoilet.png">',showertoiletSign:"あり",
    tdTime:"８：３０〜１７：００（土日祝休み）　45-2111",}
];

const oshikaSeishinModal = [
    {title: '<p><img src="icon/info.png" alt="おしか清心苑です。トイレに近い入り口は、不明です。専用駐車場があります。呼び出しボタンがあります。シャワートイレがあります">おしか清心苑<img onClick="back()"  src="icon/back.png" alt="このボタンで地図に戻ります"></p>',
    parking: '<img src="icon/parking.png">',parkingSign:"あり",
    babybed: '<img src="icon/babybed_ng.png">',babybedSign:"なし",
    multisheet: '<img src="icon/multisheet_ng.png">',multisheetSign:"なし",
    ostomate: '<img src="icon/ostomate_ng.png">',ostomateSign:"なし",
    button: '<img src="icon/button.png">',buttonSign:"あり",
    showertoilet: '<img src="icon/showertoilet.png">',showertoiletSign:"あり",
    tdTime:"44-1654",}
];

const oshikaSeiyu1Modal = [
    {title: '<p><img src="icon/info.png" alt="清優館です。トイレに近い入り口は、不明です。専用駐車場があります。オストメイトあります。呼び出しボタンがあります。シャワートイレがあります">清優館①<img onClick="back()"  src="icon/back.png" alt="このボタンで地図に戻ります"></p>',
    parking: '<img src="icon/parking.png">',parkingSign:"あり",
    babybed: '<img src="icon/babybed_ng.png">',babybedSign:"なし",
    multisheet: '<img src="icon/multisheet_ng.png">',multisheetSign:"なし",
    ostomate: '<img src="icon/ostomate.png">',ostomateSign:"あり",
    button: '<img src="icon/button.png">',buttonSign:"あり",
    showertoilet: '<img src="icon/showertoilet.png">',showertoiletSign:"あり",
    tdTime:"８：３０〜１７：００　45-2611",}
];

const oshikaSeiyu2Modal = [
    {title: '<p><img src="icon/info.png" alt="清優館です。トイレに近い入り口は、不明です。専用駐車場があります。呼び出しボタンがあります。シャワートイレがあります">清優館②<img onClick="back()"  src="icon/back.png" alt="このボタンで地図に戻ります"></p>',
    parking: '<img src="icon/parking.png">',parkingSign:"あり",
    babybed: '<img src="icon/babybed_ng.png">',babybedSign:"なし",
    multisheet: '<img src="icon/multisheet_ng.png">',multisheetSign:"なし",
    ostomate: '<img src="icon/ostomate_ng.png">',ostomateSign:"なし",
    button: '<img src="icon/button.png">',buttonSign:"あり",
    showertoilet: '<img src="icon/showertoilet.png">',showertoiletSign:"あり",
    tdTime:"８：３０〜１７：００　45-2611",}
];

const oshikaMaru1Modal = [
    {title: '<p class="spMode"><img src="icon/info.png" alt="牡鹿交流センターほっとまるです。トイレに近い入り口は、不明です。専用駐車場があります。呼び出しボタンがあります。シャワートイレがあります">牡鹿交流センターほっとまる①<img onClick="back()"  src="icon/back.png" alt="このボタンで地図に戻ります"></p>',
    parking: '<img src="icon/parking.png">',parkingSign:"あり",
    babybed: '<img src="icon/babybed_ng.png">',babybedSign:"なし",
    multisheet: '<img src="icon/multisheet_ng.png">',multisheetSign:"なし",
    ostomate: '<img src="icon/ostomate_ng.png">',ostomateSign:"なし",
    button: '<img src="icon/button.png">',buttonSign:"あり",
    showertoilet: '<img src="icon/showertoilet.png">',showertoiletSign:"あり",
    tdTime:"１３：００〜２０：００　45-3618",}
];

const oshikaMaru2Modal = [
    {title: '<p class="spMode"><img src="icon/info.png" alt="牡鹿交流センターほっとまるです。トイレに近い入り口は、不明です。専用駐車場があります。呼び出しボタンがあります。シャワートイレがあります">牡鹿交流センターほっとまる②<img onClick="back()"  src="icon/back.png" alt="このボタンで地図に戻ります"></p>',
    parking: '<img src="icon/parking.png">',parkingSign:"あり",
    babybed: '<img src="icon/babybed_ng.png">',babybedSign:"なし",
    multisheet: '<img src="icon/multisheet_ng.png">',multisheetSign:"なし",
    ostomate: '<img src="icon/ostomate_ng.png">',ostomateSign:"なし",
    button: '<img src="icon/button.png">',buttonSign:"あり",
    showertoilet: '<img src="icon/showertoilet.png">',showertoiletSign:"あり",
    tdTime:"１３：００〜２０：００　45-3618",}
];

const oshikaYoriisoModal = [
    {title: '<p><img src="icon/info.png" alt="寄磯診療所です。トイレに近い入り口は、不明です。専用駐車場があります。オストメイトあります。呼び出しボタンがあります。シャワートイレがあります">寄磯診療所<img onClick="back()"  src="icon/back.png" alt="このボタンで地図に戻ります"></p>',
    parking: '<img src="icon/parking.png">',parkingSign:"あり",
    babybed: '<img src="icon/babybed_ng.png">',babybedSign:"なし",
    multisheet: '<img src="icon/multisheet_ng.png">',multisheetSign:"なし",
    ostomate: '<img src="icon/ostomate.png">',ostomateSign:"あり",
    button: '<img src="icon/button.png">',buttonSign:"あり",
    showertoilet: '<img src="icon/showertoilet.png">',showertoiletSign:"あり",
    tdTime:"９：００〜１６：００　48-2111",}
];
