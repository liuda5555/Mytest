auto.waitFor();
app.openUrl("https://item.m.jd.com/product/100012043978.html?utm_user=plusmember&ad_od=share&utm_source=androidapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL");

// id("extBtn1").waitFor()
// id("extBtn1").findOne().click()
// id("e").findOne().click()


className("android.widget.TextView").text("等待预约").findOne();

var i = 0;

while (className("android.widget.TextView").text("等待预约").exists() && i < 5) {
    toastLog("下翻屏幕，进行刷新");
    // id("agm").findOne().children().forEach(child => {
    //     var target = child.findOne(id("qf"));
    //     target.scrollForward();
    //     });
    className("androidx.recyclerview.widget.RecyclerView").scrollable(true).depth(18).findOne().children().forEach(child => {
        var target = child.findOne(id("dao"));
        target.scrollForward();
    });
    toastLog("下翻屏幕成功，进行刷新");
    sleep(3000);
    i = i + 1;
}

toastLog("运行结束")
exit()


