const path = require("path");
const { readdirSync } = require("fs");

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const pages = getDirectories(path.join(__dirname, "..", "pages"));

console.log({ pages });
// console.log({ pages });
