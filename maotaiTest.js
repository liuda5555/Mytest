auto.waitFor();
app.openUrl("https://item.m.jd.com/product/100012043978.html?utm_user=plusmember&ad_od=share&utm_source=androidapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL");

if(isNowOrderingUI()){
    console.log("立即抢购界面");
    pressNowOrdering();
}else{
    console.log("立即抢购界面不存在");
}

waitingAppointmentUI();
onApponitment();


console.log("运行结束")
exit()


//预约界面处理
function onApponitment() {
    
    var i = 0;
    while (className("android.widget.TextView").text("等待预约").exists() && i < 5) {
        console.log("下翻屏幕，进行刷新");
        className("androidx.recyclerview.widget.RecyclerView").scrollable(true).depth(18).findOne().children().forEach(child => {
            var target = child.findOne(id("dao"));
            target.scrollForward();
        });
        console.log("下翻屏幕成功，进行刷新");
        sleep(3000);
        i = i + 1;
    }
}


//等待预约界面
function waitingAppointmentUI() {
    return className("android.widget.TextView").text("等待预约").findOne();
}

//等待预约界面
function isRushOrderingUI() {
    return className("android.widget.TextView").text("立即抢购").exists();
}


//是否立即抢购界面
function isNowOrderingUI() {
    return className("android.widget.TextView").text("立即购买").exists();
}

//处理立即抢购界面
function pressNowOrdering(){
    var i = 0;
    while (isNowOrderingUI() && i < 5) {
        console.log("点击立即抢购");
        isNowOrderingUI().click();
        i = i + 1;
    }
    
}