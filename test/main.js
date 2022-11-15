// const fs = require("fs");
// console.log("_dirname");
// fs.writeFileSync("test.txt", "Hi Murat");

const path = require ("path");
const fs = require ("fs");
console.log (__dirname);
fs.writeFileSync (path.resolve(__dirname,"test.txt"), "Hi Murat Irmak");
