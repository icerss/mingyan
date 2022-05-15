import * as ackeeTracker from "../lib/ackee";
import { apiUrls, normalPostHeader } from "./init";
// import { ZarazTrack } from "./utils";
// import { log } from "./utils";

export let track = ackeeTracker.create("https://www.xhemj.com", {
  detailed: true,
  ignoreLocalhost: false,
});
track.record("0e584eea-a8cf-42e2-8602-2d62bb782b4c");

let StarEventId = "5a556871-bb03-4c29-9d4b-675a9696a067";
// let OtherEventId = "fb561421-03a7-44f4-ac41-c0f069d4a08b";
let ClickEventId = "d8cf3a61-3845-4c5a-9fe9-9f5056d004d9";
let PageSpeedEventId = "0de96fd6-b5e3-4c9f-ab55-119093ab4057";
let SayingTypeEventId = "d04c0203-67e5-4f24-a3c4-5fcac88d5f9e";
let SayingTextEventId = "28ce91b5-f3da-45ac-b436-565fa623546f";
let ResourceLoadEventId = "8c4a7f5f-d909-432f-a6bc-e0f78df3fa99";

export let recordEventId = {
  /* StarEvent */
  addStarEvent: {
    id: StarEventId,
    n: "AddStar",
    e: "event_star",
  },
  removeStarEvent: {
    id: StarEventId,
    n: "RemoveStar",
    e: "event_star",
  },
  getHistoryRanking: {
    id: StarEventId,
    n: "GetHistoryRanking",
    e: "event_fetch",
  },
  getCurrentRanking: {
    id: StarEventId,
    n: "GetCurrentRanking",
    e: "event_fetch",
  },
  /* ClickEvent */
  clickWebsite: {
    id: ClickEventId,
    n: "ClickWebsite",
    e: "event_click",
  },
  clickMYInfoButton: {
    id: ClickEventId,
    n: "ClickMYInfoButton",
    e: "event_click",
  },
  clickMYStarButton: {
    id: ClickEventId,
    n: "ClickMYStarButton",
    e: "event_click",
  },
  clickMYReloadButton: {
    id: ClickEventId,
    n: "ClickMYReloadButton",
    e: "event_click",
  },
  clickMYMorePageButton: {
    id: ClickEventId,
    n: "ClickMYMorePageButton",
    e: "event_click",
  },
  clickMYSubmitButton: {
    id: ClickEventId,
    n: "ClickMYSubmitButton",
    e: "event_click",
  },
  clickMYCommentButton: {
    id: ClickEventId,
    n: "ClickMYCommentButton",
    e: "event_click",
  },
  clickDonateBanner: {
    id: ClickEventId,
    n: "ClickDonateBanner",
    e: "event_click",
  },
  clickMYDownloadButton: {
    id: ClickEventId,
    n: "ClickMYDownloadButton",
    e: "event_click",
  },
};

export function recordEvent(eventId) {
  if (!eventId) return;
  // ZarazTrack(eventId.e, { type: eventId.n });
  // console.log(`Record：\`${eventId.n}\``);
  return track.action(eventId.id, {
    key: eventId.n,
    value: 1,
  });
}

export function recordSayingTypeEvent(type) {
  // ZarazTrack("event_saying_from", { type });
  return track.action(SayingTypeEventId, {
    key: type,
    value: 1,
  });
}

export function recordSayingTextEvent(text) {
  // ZarazTrack("event_saying_text", { text });
  return track.action(SayingTextEventId, {
    key: text,
    value: 1,
  });
}

/**
 * 页面加载耗时
 */
window.onload = function () {
  let loadTime =
    window.performance.timing.domContentLoadedEventEnd -
    window.performance.timing.navigationStart;
  track.action(PageSpeedEventId, {
    key: location.origin + location.pathname,
    value: loadTime,
  });

  let resources = window.performance.getEntriesByType("resource");
  let data = [];
  for (let item of resources) {
    let { duration, name } = item;
    data.push({
      key: name,
      value: duration,
    });
  }
  let apiUrl = apiUrls.performance_report;
  // apiUrl = "http://localhost:3000/api/report/web";
  fetch(apiUrl, {
    ...normalPostHeader,
    body: JSON.stringify({
      input: data,
      id: ResourceLoadEventId,
    }),
  });
};
