var dataLayer =  window.dataLayer || [];
var eventActionString = '活動-09月_會員登記禮';
var eventInfo = [
  ["頁尾 - 新手上路"],
  ["頁尾 - 常見問題"],
  ["頁尾 - 費用說明"],
  ["頁尾 - 如何競標"],
  ["頁尾 - 如何購物"]
];

for ( var k2 in eventInfo ){
  normalEvent( $('a').eq(k2), eventInfo[k2][0]);
}

// for ( var k2 in eventInfo ){
//   normalEvent( eventInfo[k2][0], eventInfo[k2][1])
// }

function normalEvent(thisTarget, thisLabel){
  thisTarget.click(function(){
    dataLayer.push({
      event:'cusevent',
      eventCategory:'常態活動頁',
      eventAction: eventActionString,
      eventLabel:thisLabel+':'+$(thisTarget).attr('href')
    });
    console.log('dataLayer = ', dataLayer);
  });
}






// ecommerce.click.products.0.name

// var btnObj = {
//   'name': 'datalayer test',
//   'id': 'datalayer-test',
//   'price': 100,
//   'brand': 'google'
// };
// var btn = document.getElementById('datalayer-test');

// btn.addEventListener('click', function() {
//   clickEvent(btnObj);
//   console.log('dataLayer = ', dataLayer);
// });

// function clickEvent(productObj) {
//   dataLayer.push({
//     'event': 'test_event',
//     'test_action': 'AAA'
//   });
//   dataLayer.push({
//     'event': 'productClick',
//     'ecommerce': {
//       'click': {
//         'actionField': {'list': 'Search Results'},
//         'products': [{
//           'name': productObj.name,
//           'id': productObj.id,
//           'price': productObj.price,
//           'brand': productObj.brand
//          }]
//        }
//      },
//      'eventCallback': function() {
//       //  document.location = productObj.url
//      }
//   });
// }
