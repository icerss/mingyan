import * as ackeeTracker from "ackee-tracker";

let track = ackeeTracker.create("https://log.xhemj.top", {
  detailed: true,
  ignoreLocalhost: false,
});
track.record("0e584eea-a8cf-42e2-8602-2d62bb782b4c");

let StarEventId = "5a556871-bb03-4c29-9d4b-675a9696a067";
export let recordEventId = {
  addStarEvent: {
    id: StarEventId,
    key: "AddStar",
  },
  removeStarEvent: {
    id: StarEventId,
    key: "RemoveStar",
  },
  getHistoryRanking: {
    id: StarEventId,
    key: "GetHistoryRanking",
  },
  getCurrentRanking: {
    id: StarEventId,
    key: "GetCurrentRanking",
  },
};

export function recordEvent(eventId) {
  if (!eventId) return;
  return track.action(eventId.id, {
    key: eventId.key,
    value: 1,
  });
}
