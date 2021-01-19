import mingyan from './mingyan.min.js';
module.exports = (req, res) => {

    function rdNum(minNum, maxNum) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * minNum + 1, 10);
                break;
            case 2:
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                break;
            default:
                return 0;
                break;
        };
    };

    
    let out = [],
        code = 200,
        query = req.query;
    if (!query.type || query.type == "random") {
        for (let i = 0; i < query.num; i++) {
            out.push(mingyan[rdNum(0, mingyan.length - 1)])
        };
    } else if (query.type == "list") {
        for (let i = 0; i < mingyan.length; i++) {
            out.push(mingyan[i])
        };
    };
    code = 200;
    res.status(200).json({
        "code": code,
        "msg": "请求成功",
        "data": out
    })
}