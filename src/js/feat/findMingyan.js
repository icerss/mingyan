import { mingyan } from "../../mingyan";

/**
 * 临时搜索名言
 * @param {String} my 完整名言
 */
export let MY_findmingyan = function (my) {
    if (mingyan) {
        for (let i in mingyan) {
            if (mingyan[i] == my) return i;
        }
        return 0;
    }
    return 0;
};