
const tcb = require("@cloudbase/node-sdk");

const app = tcb.init({
    secretId: process.env.tcb_secret_id,
    secretKey: process.env.tcb_secret_key,
    env: process.env.tcb_env_id,
    region: "ap-shanghai"
});

module.exports = async (req, res) => {
    const res1 = await app.callFunction({
        name: "mingyan",
        data: {
            "event": "getnum"
        }
    })
    console.log(res1);
    
    res.status(200).json({
        "event": "getnum",
        "msg": "success",
        "data": {
            "num": res1.result.res1.data[0].num
        }
    });
    res.end();
}