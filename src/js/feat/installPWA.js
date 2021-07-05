import { ua } from "../init";
import { deviceIsPhone } from "../tools";
import { ___date_version___ } from "./config";

/**
 * PWA应用安装按钮
 */
export let MY_installPwa = function () {
    let script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@pwabuilder/pwainstall@1.6.7/dist/pwa-install.js";
    script.type = "module";
    let s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(script, s);
    const pwa = document.getElementById("installComponent");
    pwa.installbuttontext = "安装";
    pwa.cancelbuttontext = "取消";
    pwa.descriptionheader = "描述";
    pwa.manifestpath = "manifest.webmanifest?t=" + ___date_version___;
    pwa.explainer = "该应用可以安装在您的PC或移动设备上。这将使该Web应用程序外观和行为与任何其他已安装的应用程序相同。您将在应用程序列表中找到它，并将其固定到主屏幕，开始菜单或任务栏。此安装的Web应用程序还将能够与其他应用程序和您的操作系统安全地进行交互。";
    pwa.iosinstallinfotext = "点击共享按钮，然后点击“添加到主屏幕”";
    // if (deviceIsPhone()) {
    //     $("#installComponent").remove();
    // } else {
    //     $("#pwa-install").show();
    // };
    return pwa;
};

$(document).on("click", "#pwa-install", function () {
    MY_installPwa().openPrompt();
});
