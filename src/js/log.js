import * as ackeeTracker from "ackee-tracker";

let track = ackeeTracker.create("https://wow.xhemj.com", {
  detailed: true,
  ignoreLocalhost: false,
});
track.record("0e584eea-a8cf-42e2-8602-2d62bb782b4c");

let StarEventId = "5a556871-bb03-4c29-9d4b-675a9696a067";
// let OtherEventId = "fb561421-03a7-44f4-ac41-c0f069d4a08b";
let ClickEventId = "d8cf3a61-3845-4c5a-9fe9-9f5056d004d9";
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

// document.documentElement.addEventListener("click", function() {
//   recordEvent(recordEventId.clickWebsite);
// });
