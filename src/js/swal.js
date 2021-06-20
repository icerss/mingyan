/**
 * 重新封装swal插件
 */

let defaultoptions = {
    title: "",
    text: "",
    icon: "",
    button: "关闭",
};

function formatOpt (opt) {
    if (typeof opt === "object" && opt.length === 1) {
        return opt;
    }
    if (typeof opt === "object" && opt.length > 1) {
		
    }
}

let sa = {
    success(...opt) {
        opt = opt || {};
        let dopt = defaultoptions || "";
        dopt.title = opt.title || "";
        dopt.content = opt.content | "";
        dopt.icon = opt.icon || "success";
        return swal(dopt);
    },
    su(opt) {
        return this.success(opt);
    },
	
    info(opt) {
        opt = opt || {};
        let dopt = defaultoptions || "";
        dopt.title = opt.title || "";
        dopt.content = opt.content | "";
        dopt.icon = opt.icon || "info";
        return swal(dopt);
    },
	
    pop(opt) {
        opt = opt || {};
        let dopt = defaultoptions || "";
        dopt.title = opt.title || "";
        dopt.content = opt.content | "";
        dopt.icon = opt.icon || "";
        return swal(dopt);
    },
	
	
};