
//1919网抢购茅台脚本
//fist version:2023.09.15
auto.waitFor();
//浏览器打开商品页面
app.openUrl("https://weixin.1919.cn/b2c1919/#/productDetailTransfer?pageType=appointment&productCode=1062264&logo=https://1919-cp-pro-oss.1919.cn/upc/1676529523417sgaa.jpg&name=53%E5%BA%A6500ml%E8%B4%B5%E5%B7%9E%E8%8C%85%E5%8F%B0%E9%85%92%EF%BC%88%E7%99%B8%E5%8D%AF%E5%85%94%E5%B9%B4%EF%BC%89&finalPrice=2499&markPrice=null&tC=02.05.09.1198154981562757120.24.0.1694876764449.1198557591788658688");
//浏览器界面操作
var openApp = className("android.view.View").text("立即打开").findOne();
if (openApp != null) {
    openApp.click();
} else {
    toastLog("未找到立即打开按钮，脚本退出");
    exit();
}

//点击立即预约按钮
className("android.widget.TextView").text("立即预约").findOne().click();

//滑动页面


// var huadong = className("android.view.View").scrollable(true).depth(14).findOne();
// if (huadong != null) {
//     toastLog("执行滑动窗体");
//     huadong.scrollForward()
// }else{
//     toastLog("未执行滑动窗体");
//     exit();

// }
