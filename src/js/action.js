import { throttle } from "./tools";

export let actonType = {
    ACTION_ADD_STAR: "Mingyan_Star", // 点赞
    ACTION_REMOVE_STAR: "Mingyan_Remove_Star", // 取消点赞
    ACTION_GET_STAR_NUM: "Mingyan_Get_Star_Num", // 获取点赞数
    ACTION_CLICK_SEARCH: "Mingyan_Click_Search_Button", // 点击搜索按钮
    ACTION_CLICK_MORE: "Mingyan_Click_More_Button", // 点击更多按钮
    ACTION_CLICK_RANKING: "Mingyan_Click_Ranking_Button", // 点击排行榜按钮
    ACTION_CLICK_PWA: "Mingyan_Click_Pwa_Button", // 点击PWA按钮
    ACTION_CLICK_RELOAD: "Mingyan_Click_Reload_Button", // 点击刷新按钮
    ACTION_CLICK_SCREEN: "Mingyan_Click_Screen", // 点击页面屏幕
    ACTION_CLICK_SPONSOR_BANNER: "Mingyan_Click_Sponsor_Banner", // 点击赞助
};

export function recordAction(action) {
    if (!fetch) return;
    console.log(`[Actions Record] Record \` ${action} \``);
    fetch("https://log.erss.club/api", {
        "body": JSON.stringify({
            "query": "\n\t\tmutation createRecord($domainId: ID!, $input: CreateRecordInput!) {\n\t\t\tcreateRecord(domainId: $domainId, input: $input) {\n\t\t\t\tpayload {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t",
            "variables": {
                "domainId": "990d33c8-1ced-4324-815b-370ff777c351",
                "input": {
                    "siteLocation": `https://log.erss.club/=${action}`,
                    "siteReferrer": "https://www.erssmy.com/Actions_Record",
                    "siteLanguage": "zh",
                    "screenWidth": 1920,
                    "screenHeight": 1080,
                    "screenColorDepth": 24,
                    "deviceName": null,
                    "deviceManufacturer": null,
                    "osName": "Windows",
                    "osVersion": "10",
                    "browserName": "XhemjBot",
                    "browserVersion": "1.0",
                    "browserWidth": 1920,
                    "browserHeight": 1040
                }
            }
        }),
        "method": "POST",
        "mode": "cors"
    });
}



let eventListenerList = {
    "a[title='搜索']": actonType.ACTION_CLICK_SEARCH,
    "a[title='刷新']": actonType.ACTION_CLICK_RELOAD,
    "a[title='排行榜']": actonType.ACTION_CLICK_RANKING,
    "a[title='安装']": actonType.ACTION_CLICK_PWA,
    "a[title='更多']": actonType.ACTION_CLICK_MORE,
    "a[onclick='_mingyan.star()']": actonType.ACTION_GET_STAR_NUM,
    "#star-logo[onclick=\"_mingyan.star(\'removestar\')\"]": actonType.ACTION_REMOVE_STAR,
    "#star-logo[onclick=\"_mingyan.star(\'addstar\')\"]": actonType.ACTION_ADD_STAR,
    ".my--sponsor": actonType.ACTION_CLICK_SPONSOR_BANNER
};

document.addEventListener("click", function () {
    throttle(recordAction(actonType.ACTION_CLICK_SCREEN),1000);
});

for (let selector in eventListenerList) {
    try {
        $(document).on("click", selector, function() {
            throttle(recordAction(eventListenerList[selector]), 1000);
        });
    } catch {} // eslint-disable-line
}