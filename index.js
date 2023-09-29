const fs = require("fs").promises;

class Io {
  constructor() {}

  async readDoc(fromFile) {
    const data = await fs.readFile(fromFile, "utf-8");
    if (data) {
      return JSON.parse(data);
    } else {
      return data;
    }
  }

  writeDoc(toFile, data) {
    fs.writeFile(toFile, JSON.stringify(data, null, 2));
  }
}

module.exports = Io;
