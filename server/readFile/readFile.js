import * as fs from "fs";

const readJsonFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName + '.json', "utf8", async (err, data) => {

      console.log(fileName + '.json');

      if (err) reject(err);
      // Save the parsed data in an object variable
      const object = JSON.parse(data);
      console.log(object.data);
  
      resolve(object)
    });
  })
  
};

export { readJsonFile };
