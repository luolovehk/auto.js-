auto.waitFor();
setScreenMetrics(1080, 2340); //设定以下坐标点击的基准屏幕分辨率

tmail_form(); //运行天猫农场的程序

function tmail_form() {
    try {
        var appRun = currentActivity();
        if (appRun != 'com.taobao.taobao') {
            launch("com.taobao.taobao");
        }
        var 我的淘宝图标 = desc("我的淘宝").findOne(5000);
        if (我的淘宝图标) {
            var 我的淘宝图标 = 我的淘宝图标.bounds();
            click(我的淘宝图标.centerX(), 我的淘宝图标.centerY());
            while (1) {
                var 天猫农场入口 = desc("天猫农场").findOne(3000);
                if (天猫农场入口) {
                    sleep(2000);
                    var 天猫农场入口 = 天猫农场入口.bounds();
                    if (天猫农场入口.centerY() < 200) {
                        swipe(540, 500, 540, 2200, 300);
                        continue;
                    }
                    click(天猫农场入口.centerX(), 天猫农场入口.centerY());
                    break;
                } else {
                    toastLog("没有找到农场，上划后重启");
                    swipe(540, 500, 540, 2200, 300);
                    return tmail_form();
                }
            }

            if (text("兑换好礼（每天10:00上新）").findOne(7000)) {
                toast("进入农场");
                sleep(2000);
            } else {
                toastLog("未进入农场，重启");
                while (!desc("我的淘宝").findOne(1000)) { back(); }
                return tmail_form();
            }
            if (text("离线超过24小时，作物会停止自动生产哦~").findOne(5000)) {

                click(526, 1743.3); //关闭长时间未进入后弹出的窗口
                sleep(1000);
            }
            click(534.6, 1577.16); //宝箱点击关闭
            sleep(1000);
            var sun_list = [
                [125, 658],
                [292, 810],
                [364, 639],
                [557, 529],
                [780, 578],
                [742, 662],
                [954, 744],
                [949, 573],
                [794, 1306]
            ]
            var coordinate_field = [
                [535, 690],
                [308, 826],
                [761, 800],
                [549, 927],
                [299, 1086],
                [789, 1053],
                [526, 1207],
                [322, 1320],
                [512, 1470]
            ]
            toast("第一次开始收阳光");
            for (i = 0; i < sun_list.length; i++) {
                click(sun_list[i][0], sun_list[i][1]);
            }
            toast("第一次收田地");
            for (i = 0; i < coordinate_field.length; i++) {
                click(coordinate_field[i][0], coordinate_field[i][1]);
            }
            sleep(2000);
            click(535, 1577); //宝箱点击关闭
            sleep(2000);
            toast("第二次开始收阳光");
            for (i = 0; i < sun_list.length; i++) {
                click(sun_list[i][0], sun_list[i][1]);
            }
            toast("第二次收田地");
            for (i = 0; i < coordinate_field.length; i++) {
                click(coordinate_field[i][0], coordinate_field[i][1]);
            }
            sleep(1000);
            click(535, 1577) //宝箱点击关闭
            sleep(1000);
            click(980, 1542) // 点击领阳光的图标
            sleep(1000);
            while (1) {
                var next_click = text("去浏览").findOne(500);
                var wait_time = text("后开始任务").findOne(500);
                if (next_click && !wait_time) {
                    click(908, 1558); //点击浏览阳光的坐标
                    toast("去浏览15秒领阳光");
                    if (text("当前页面浏览满15秒可获得10阳光").findOne(3000)) {
                        sleep(15250);
                        while (!text("去APP完成").findOne(1000)) { back(); }
                    } else {
                        back();
                    }
                    sleep(1000);
                    break;
                } else {
                    toastLog("不能继续浏览得阳光了");
                    break;
                }
            }
            while (1) {
                var 去进店领阳光 = text("去进店").findOne(500);
                var 去进店领阳光已完成 = text("已完成").findOne(500);
                if (去进店领阳光 && !去进店领阳光已完成) {
                    sleep(1000);
                    去进店领阳光.click();
                    toast("进店领阳光");
                    sleep(3000);
                    var num = 0;
                    while (1) {
                        if (desc("立即打开").findOne(500)) {
                            toast("立即打开");
                            var rect = desc("立即打开").findOne().bounds();
                            if (rect.centerY() > 2200) {
                                swipe(540, 2000, 540, 1500, 300);
                                continue;
                            }
                            click(rect.centerX(), rect.centerY());
                        } else if (desc("关注店铺").findOne(500)) {
                            toast("关注店铺");
                            var rect = desc("关注店铺").findOne().bounds();
                            if (rect.centerY() > 2200) {
                                swipe(540, 2000, 540, 1500, 300);
                                continue;
                            }
                            click(rect.centerX(), rect.centerY());
                        }
                        if (desc("经过搜寻，你获得了").findOne(500)) {
                            toast("已经得到阳光,退回");
                            back();
                            sleep(2000);
                            break
                        }
                        if (num == 15) {
                            toastLog("下滑15次还没看到目标值，向上，重新来");
                            num += 1;
                            for (i1 = 0; i1 < 18; i1++) {
                                swipe(540, 200, 540, 2100, 500); //向上滑
                            }
                        } else if (num > 40) {
                            toast("下滑多次未找到目标，退回");
                            back();
                            break
                        } else {
                            num += 1;
                            toast("当前页面未找到,下滑" + num + "次");
                            swipe(540, 2100, 540, 200, 200); //向下滑
                        }
                    }
                } else {
                    break;
                }
            }

            sleep(1000);
            toast("没有什么任务可以做了，关闭任务菜单！");
            click(999, 1280);
            sleep(1000);
            //收阳光
            for (i = 0; i < sun_list.length; i++) {
                click(sun_list[i][0], sun_list[i][1]);
            }
            sleep(1000);

            toast("进入果园");
            click(121, 1554);
            var 集果实图标 = text("gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==");
            //if (text("无星辰落").findOne()) {
            if (集果实图标.findOne()) {
                toast("已经进入福年种福果");
                sleep(1000);
                click(756, 1219); //收取昨日的福气
                sleep(1000);
                click(540, 1521) //点掉今天已经领过了，明天再领
                sleep(1000);
                click(962, 1626) // 进入活动中心
                if (textContains("gif").findOne(10000)) {
                    sleep(1000);
                    var rect = text("去签到").findOne(1000);
                    if (rect != null) {
                        toast("签到");
                        click(822, 1239, 951, 1290);
                        // rect.click();
                        // click(rect.centerX(),rect.centerY());
                    }
                    var rect = textContains("去领取").findOne(500);
                    if (rect != null) {
                        toast("去领取");
                        click(900, 2000);
                        // click(rect.centerX(),rect.centerY());
                    }
                    var rect = textContains("去兑换").findOne(500);
                    if (rect != null) {
                        toast("去兑换");
                        click(900, 2200);
                        // rect.click();
                    }
                    while (1) {
                        var 去逛逛 = textContains("去逛逛").findOne(500);
                        if (去逛逛) {
                            去逛逛.click();
                            if (textContains("全部完成").findOne(2000)) {
                                back();
                                sleep(1000);
                                click(985, 976) //关闭任务窗口
                                sleep(1000);
                                click(972, 1626) //打开任务窗口
                                sleep(1000);
                                break;
                            } else if (textContains("浏览完成").findOne(20000)) {
                                back();
                                sleep(1000);
                            } else {
                                back();
                                sleep(1000);
                            }
                        } else {
                            break;
                        }
                    }
                    while (1) {
                        var 去浏览 = textContains("去浏览").findOne(1000);
                        if (去浏览) {
                            去浏览.click();
                            if (textContains("全部完成").findOne(2000)) {
                                back();
                                sleep(1000);
                                click(985, 976) //关闭任务窗口
                                sleep(1000);
                                click(972, 1626) //打开任务窗口
                                sleep(1000);
                                break;
                            } else if (text("滑动浏览得奖励").findOne(2000)) {
                                sleep(3000);
                                swipe(540, 800, 540, 300, 300); //下滑
                                if (textContains("完成").findOne(22000)) {
                                    back();
                                } else {
                                    back();
                                }
                                sleep(1000);
                            } else if (text("今日已达上限继续逛逛吧").findOne(2000)) {
                                back();
                                sleep(1000);
                            } else if (textContains("浏览完成").findOne(15000)) {
                                sleep(1000);
                                back();
                                sleep(1000);
                            } else {
                                back();
                                sleep(1000);
                            }
                        } else {
                            break;
                        }
                    }
                    var 去换装 = textContains("去换装").findOne(500);
                    if (去换装) {
                        去换装.click();
                        sleep(10000);
                        click(1000, 1383);
                        //缺少点击收取心愿卡的步骤
                        back();
                        sleep(2000);
                        click(549, 1509); //退出淘宝人生
                        sleep(2000);
                    }
                    if (textContains("gif").findOne(4000)) { //确定还是在这个任务界面
                        click(989, 957); //关闭任务菜单
                        sleep(1000);
                        // for (i=0;i<10;i++){
                        //     click(0.491*1080, 0.693*2340);//点击浇灌福气
                        //     sleep(1000);
                        // }
                    }
                    back(); //退出
                    sleep(1000);
                    back(); //退出
                    home();
                    toastLog("农场已完成，退出");
                }
            }
            // }
        }
    } catch (err) {
        toastLog(err);
        exit();
    }
}