const fs = require('fs');

const path = require('path');

const replaceThis = "ankit";

const replaceWith = "Amit";

// const preview = true;
const preview = false;

const folder = __dirname;

try {
  fs.readdir(folder, (err, data) => {
    console.log(`Current Folder Files : `, data);
    for (let index = 0; index < data.length; index++) {
      const item = data[index];

      let oldFile = path.join(folder, item);
      let newFile = path.join(folder, item.replaceAll(replaceThis, replaceWith));

      if (!preview) {
        fs.rename(oldFile, newFile, () => {
          console.log("Rename Successful !!");
        });
      }
      else {
        if (`data/${item}` !== newFile) {
          console.log(`data/${item} will be renamed to ${newFile}`);
        }
      }
    }
  });
  console.log(`data : `, data);
} catch (error) {
  console.error(`Error : `, error);
}
