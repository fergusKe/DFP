var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var ad = '';
var adEle =document.getElementById("ad");
var page = location.href.split('/').pop().split('.')[0];
var adObj = {
  圖靈測試_350x200_1: {
    title: '/216346150/圖靈測試_350x200_1',
    id: 'div-gpt-ad-1536132722642-0',
    size: [350, 200]
  },
  圖靈測試_350x200_2: {
    title: '/216346150/圖靈測試_350x200_2',
    id: 'div-gpt-ad-1536138269120-0',
    size: [350, 200]
  },
  圖靈測試_350x200_3: {
    title: '/216346150/圖靈測試_350x200_3',
    id: 'div-gpt-ad-1536138269120-0',
    size: [350, 200]
  },
  圖靈測試_350x200_12: {
    title: '/216346150/圖靈測試_350x200_12',
    id: 'div-gpt-ad-1536138269120-0',
    size: [350, 200]
  },
  圖靈測試_350x200_13: {
    title: '/216346150/圖靈測試_350x200_13',
    id: 'div-gpt-ad-1536138269120-0',
    size: [350, 200]
  },
  圖靈測試_350x200_23: {
    title: '/216346150/圖靈測試_350x200_23',
    id: 'div-gpt-ad-1536138269120-0',
    size: [350, 200]
  },
  圖靈測試_350x200_123: {
    title: '/216346150/圖靈測試_350x200_123',
    id: 'div-gpt-ad-1536138269120-0',
    size: [350, 200]
  }
};
var pageType = {
  A: 'A',
  B: 'B',
  C: 'C'
}

// 網址後面可能會有參數 ?, #
// 可能是html, htm

var lastPage = getCookie('lastPage');
setAd();
// switch(page) {
//   case pageType.A:
//     console.log('pageType.A = ', pageType.A);
//     ad = adObj.圖靈測試_350x200_23;
//     break;
//   case pageType.B:
//     console.log('pageType.B = ', pageType.B);
//     ad = adObj.圖靈測試_350x200_13;
//     break;
//   case pageType.C:
//     console.log('pageType.C = ', pageType.C);
//     ad = adObj.圖靈測試_350x200_12;
//     break;
//   default:
//     console.log('pageType.other = ');
//     ad = getFilterSelfAd(page);
// }
console.log('lastPage = ', lastPage);
console.log('ad = ', ad);

function setAd() {
  if (lastPage === '' || lastPage === page) {
    console.log('getFilterSelfAd');
    ad = getFilterSelfAd(page);
  } else {
    console.log('getLastPageAd');
    ad = getLastPageAd(lastPage);
  }
}

// 取得上次瀏覽頁面的廣告
function getLastPageAd(pPage) {
  switch(pPage) {
    case pageType.A:
      return adObj.圖靈測試_350x200_1;
    case pageType.B:
      return adObj.圖靈測試_350x200_2;
    case pageType.C:
      return adObj.圖靈測試_350x200_3;
    default:
      return getFilterSelfAd(page);
  }
}

// 取得過濾自己頁面內容的廣告
function getFilterSelfAd(pPage) {
  switch(pPage) {
    case pageType.A:
      return adObj.圖靈測試_350x200_23;
    case pageType.B:
      return adObj.圖靈測試_350x200_13;
    case pageType.C:
      return adObj.圖靈測試_350x200_12;
    default:
      return adObj.圖靈測試_350x200_123;
  }
}

// 設定 cookie
if (page === '') {
  page = 'index';
}
document.cookie="lastPage=" + page;

googletag.cmd.push(function() {
googletag.defineSlot(ad.title, ad.size, ad.id).addService(googletag.pubads());
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
});

adEle.innerHTML = "<div id='" + ad.id + "' style='height:200px; width:350px;'></div>";
googletag.cmd.push(function() { googletag.display(ad.id); });

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}