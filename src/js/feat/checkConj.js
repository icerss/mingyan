import { specialVerbList } from "../../mingyan";

/**
 *  文字彩蛋
 * @param {String} my 完整名言
 */
export let  MY_checkConj = function (my) {
    my = my.split("：")[1];
    if (specialVerbList[my]) {
        let text = specialVerbList[my];
        return text;
    } else {
        return "曾经说过";
    }
};