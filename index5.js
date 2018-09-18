var dataLayer =  window.dataLayer || [];
var eventActionString = '活動-09月_日美韓常態優惠活動';
var map_area = {
  "Map":{
    "15,148,240,457":"國際運費 - 美國",
    "259,161,751,472":"國際運費 - 日本",
    "761,151,988,462":"國際運費 - 韓國"
  },
  "Map2":{
    "352,122,563,153":"嚴選日貨 - Yahoo!JAPAN拍賣",
    "615,110,726,171":"嚴選日貨 - 樂天",
    "779,122,931,158":"嚴選日貨 - 更多日本代購",
    
    "394,236,527,293":"人氣美貨 - ebay",
    "605,236,748,296":"人氣美貨 - amazon",
    "778,245,934,282":"人氣美貨 - 前往美國大街",

    "402,363,535,408":"Hito韓貨 - Gmarket",
    "610,374,736,402":"Hito韓貨 - LOTTE",
    "779,366,933,401":"Hito韓貨 - 更多韓國代購"
  },
  "Map3":{
    "493,784,933,806":"注意事項 - 特殊商品運輸處理原則，空運/海運商品限制與規定",
    "384,947,532,968":"注意事項 - 特定商品"
  }
}

$("area").click(function() {
  var thismap = $(this).closest('map').attr('name');
  var thiscoords = $(this).attr("coords");
  // console.log("1:"+JSON.stringify(thismap));
  // console.log("2:"+JSON.stringify(map_area[thismap]));
  dataLayer.push({
    event: "cusevent",
    eventCategory:'常態活動頁',
    eventAction: eventActionString,
    eventLabel: map_area[thismap][thiscoords] + "-" + $(this).attr("href")
  });
});

var eventInfo = [
  ['.top_btn a:nth(0)', '浮標籤 - 加入會員'],
  ['.top_btn a:nth(1)', '浮標籤 - 費用試算'],
  ['.top_btn a:nth(2)', '浮標籤 - 日本郵局運輸'],
  ['.top_btn a:nth(3)', '浮標籤 - 五大加值服務'],
  ['.top_btn a:nth(4)', '浮標籤 - 海外購物保證'],
  ['.top_btn a:nth(5)', '浮標籤 - TOP'],

  ['#btn a:nth(0)',"下方按鈕 - 加入會員"],
  ['#btn a:nth(1)',"下方按鈕 - 成為粉絲"],
  ['#btn a:nth(2)',"下方按鈕 - 追蹤IG"],
  ['#btn a:nth(3)',"下方按鈕 - 訂閱Youtube"],

  ['#footer a.f01',"頁尾 - 新手上路"],
  ['#footer a.f02',"頁尾 - 常見問題"],
  ['#footer a.f03',"頁尾 - 費用說明"],
  ['#footer a.f04',"頁尾 - 如何競標"],
  ['#footer a.f05',"頁尾 - 如何購物"]
];

for ( var k2 in eventInfo ){
  normalEvent( eventInfo[k2][0], eventInfo[k2][1])
}
  
$('[data-label]').click(function(){
  dataLayer.push({
    event: "cusevent",
    eventCategory:'常態活動頁',
    eventAction: eventActionString,
    eventLabel: $(this).attr("data-label")+":"+$(this).attr("href")
  });
});

function normalEvent(thisTarget, thisLabel){
  $(thisTarget).click(function(){
    dataLayer.push({
      event:'cusevent',
      eventCategory:'常態活動頁',
      eventAction: eventActionString,
      eventLabel:thisLabel+':'+$(thisTarget).attr('href')
    });
  });
}