/**
 * log
 */
export let MY_log = {
    "log": [],
    "add": function (log) {
        return this.log.push(log);
    },
    "get": function () {
        return this.log;
    },
    "lastLog": function () {
        return this.log[this.log.length - 2];
    },
    "nowLog": function () {
        return this.log[this.log.length - 1];
    }
};