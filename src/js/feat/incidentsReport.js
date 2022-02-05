import { log, notyf } from "../utils";

export let MY_incidents = function() {
  fetch(
    "https://status.erss.club/api/v2/incidents/unresolved.json?t=_" +
      new Date().getTime()
  )
    .then((r) => r.json())
    .then((res) => {
      let incidents = res.incidents;
      if (incidents.length === 0) return;
      for (let item of incidents) {
        let update = item.updated_at || "未知";
        let name = item.name || "未知";
        let url = "https://status.erss.club/incidents/" + item.id;
        let impact = item.impact || "未知";
        let impactList = {
          none: "几乎无影响",
          minor: "有部分影响",
          major: "大部分影响",
          critical: "几乎全部影响",
        };
        impact = impactList[impact] || "有部分影响";
        log({ update, name, url, impact });
        let html = `<div id="incidents-report">
<h2 id="incidents-report-title">网站维护中\`(*>﹏<*)′</h2>
<ul id="incidents-report-ul">
<li id="incidents-report-li">维护内容：${name}</li>
<li id="incidents-report-li">更新时间：${new Date(update).toLocaleString()}</li>
<li id="incidents-report-li">影响范围：${impact}</li>
<li id="incidents-report-li">详情：<a id="incidents-report-a" href="${url}" target="_blank" rel="nofollow">https://status.erss.club/</a></li>
</ul>
</div>`;
        notyf.open({
          type: "15s",
          message: html,
        });
      }
    });
};
