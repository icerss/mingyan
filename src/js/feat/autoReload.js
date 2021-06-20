import { MY_findmingyan } from "./findMingyan";
import { MY_randomList } from "./randomList";

/**
 * 自动刷新模式
 */
export let MY_autoReload = function () {
    let wait = 3000;
    setInterval(() => {
        let my = MY_randomList.getNext();
        let id = MY_findmingyan(my);
        location.hash = "#" + id;
    }, wait);
};