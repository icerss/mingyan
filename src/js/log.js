import * as ackeeTracker from "ackee-tracker";

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

export let recordEventId = {
  /* StarEvent */
  addStarEvent: {
    id: StarEventId,
    n: "AddStar",
  },
  removeStarEvent: {
    id: StarEventId,
    n: "RemoveStar",
  },
  getHistoryRanking: {
    id: StarEventId,
    n: "GetHistoryRanking",
  },
  getCurrentRanking: {
    id: StarEventId,
    n: "GetCurrentRanking",
  },
  /* ClickEvent */
  clickWebsite: {
    id: ClickEventId,
    n: "ClickWebsite",
  },
  clickMYInfoButton: {
    id: ClickEventId,
    n: "ClickMYInfoButton",
  },
  clickMYStarButton: {
    id: ClickEventId,
    n: "ClickMYStarButton",
  },
  clickMYReloadButton: {
    id: ClickEventId,
    n: "ClickMYReloadButton",
  },
  clickMYMorePageButton: {
    id: ClickEventId,
    n: "ClickMYMorePageButton",
  },
  clickMYSubmitButton: {
    id: ClickEventId,
    n: "ClickMYSubmitButton",
  },
  clickMYCommentButton: {
    id: ClickEventId,
    n: "ClickMYCommentButton",
  },
  clickDonateBanner: {
    id: ClickEventId,
    n: "ClickDonateBanner",
  },
  clickMYDownloadButton: {
    id: ClickEventId,
    n: "ClickMYDownloadButton",
  },
};

export function recordEvent(eventId) {
  if (!eventId) return;
  // console.log(`Record：\`${eventId.n}\``);
  return track.action(eventId.id, {
    key: eventId.n,
    value: 1,
  });
}

export function recordSayingTypeEvent(type) {
  return track.action(SayingTypeEventId, {
    key: type,
    value: 1,
  });
}

export function recordSayingTextEvent(text) {
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
};
