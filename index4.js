dataLayer =  window.dataLayer || [];

var eventActionString = '活動-09月_會員登記禮';

map_area = {
  "Map":{
    "78,39,448,129":"加入會員",
    "496,39,873,133":"前往粉絲團",
    "84,146,447,212":"Yahoo! JAPAN拍賣",
    "502,148,874,210":"ebay美國代標",
    "82,241,291,330":"日本代購",
    "355,239,587,331":"美國代標",
    "639,242,861,332":"韓國代購",
  }
}

$("area").click(function() {
    var thismap = $(this).closest('map').attr('name');
    var thiscoords = $(this).attr("coords");
    console.log("1:"+JSON.stringify(thismap));
    console.log("2:"+JSON.stringify(map_area[thismap]));
    dataLayer.push({
        event: "cusevent",
        eventCategory:'常態活動頁',
        eventAction: eventActionString,
        eventLabel: map_area[thismap][thiscoords] + "-" + $(this).attr("href")

    });
});

  
function normalEvent(thisTarget, thisLabel){
    $(thisTarget).click(function(){
        dataLayer.push({
            event:'cusevent',
	        eventCategory:'常態活動頁',
	        eventAction: eventActionString,
            eventLabel:thisLabel+':'+$(thisTarget).attr('href')
        })
    });
}

eventInfo = [
  ['#main > a', '上方大Banner-冰淇淋的奢華饗宴'],
  
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
