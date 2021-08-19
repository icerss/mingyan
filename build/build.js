const { readFile, writeFile } = require("fs").promises;
const path = require("path");

(async function() {
  let o = await readFile(
    path.resolve(__dirname, "../dist/index.html"),
    "utf-8"
  );
  o = o.replace(
    `<link rel="apple-touch-icon" href="/img/icons/apple-touch-icon-152x152.png"><link rel="mask-icon" href="/img/icons/safari-pinned-tab.svg" color="#5676dc">`,
    ""
  );
  o = o.replace(
    `<link rel="icon" type="image/png" sizes="32x32" href="/img/icons/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/img/icons/favicon-16x16.png">`,
    ""
  );
  o = o.replace(
    `<meta name="msapplication-TileImage" content="/img/icons/msapplication-icon-144x144.png">`,
    ""
  );
  await writeFile(path.resolve(__dirname, "../dist/index.html"), o, "utf-8");
  console.log("已替换文字");
})();
