auto.waitFor();
toast("开始运行脚本")
var appName = "京东";
var isLaunchedApp = app.launchApp(appName)
if(isLaunchedApp){
    toastLog("打开了APP")
}else{
    toastLog("APP未打开！！！")
}

sleep(3000)

var iCenter = className("android.view.View").desc("我的").findOne()

if(iCenter){
    toastLog("找到“我的”按钮！！！")
    iCenter.click()
    sleep(1000)
}else{
    toastLog("未找到‘我的’按钮！！！")
    exit()
}

var signHere = className("android.view.View").text("签到领京豆 签到领京豆").findOne()

if(signHere){
    signHere.click()
    toastLog("签到领京豆")
}else{
    toastLog("未签到")
}



