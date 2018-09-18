// 1. 過濾掉目前頁面的廣告
// 2. 顯示瀏覽過的前一頁廣告
// 3. 如果沒有過，則隨機顯示廣告

<script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'></script>
<script>
</script>
<script>
  var googletag = googletag || {};
  googletag.cmd = googletag.cmd || [];
  var ad = '';
  var adEle =document.getElementById("ad");
  var page = location.href.split('/').pop();
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
    }
  }

  if (page === '' || page === 'index.html') {
    ad = ad1;
  } else {
    ad = ad2;
  }

  switch(page) {
    case 'A':
      执行代码块 1
      break;
    case 2:
      执行代码块 2
      break;
    default:
      n 与 case 1 和 case 2 不同时执行的代码
  }

  設定 cookie
  
  googletag.cmd.push(function() {
  googletag.defineSlot(ad.title, ad.size, ad.id).addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
  
  console.log('ad = ', ad);
  
  adEle.innerHTML = "<div id='" + ad.id + "' style='height:200px; width:350px;'></div>";
  googletag.cmd.push(function() { googletag.display(ad.id); });
</script>