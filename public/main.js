/* eslint-disable no-console */
const path = require('path');
const fs = require('fs');

const months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December'
};

const formatDate = dateString => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return `${months[month]} ${day}, ${year}`;
};

const parseParagraphs = paragraphs =>  paragraphs.split('\n');

const processDirectory = (directoryPath, outputFilePath) => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      // eslint-disable-next-line no-console
      return console.log(`Failed to list contents of directory: ${err}`);
    }

    let itemList = [];

    files.forEach((file, i) => {
      let jsonData;
      let item = {};

      fs.readFile(`${directoryPath}/${file}`, 'utf8', (_, contents) => {
        try {
          jsonData = JSON.parse(contents);
        } catch (jsonError) {
          console.error('Error parsing JSON:', jsonError);
        }

        for (const key in jsonData) {
          switch (key) {
          case 'date':
            const formattedDate = formatDate(jsonData[key]);
            item[key] = formattedDate;
            break;
          case 'intro':
          case 'paragraphs':
            const parsedParagraphs = parseParagraphs(jsonData[key]);
            item[key] = parsedParagraphs;
            break;
          default:
            item[key] = jsonData[key];
          }
        }

        console.log('ITEM', item);

        itemList.push(item);

        if (itemList.length === files.length) {
          let data = JSON.stringify(itemList);
          fs.writeFileSync(outputFilePath, data);
        };
      });
    });
  });

  return;
};

const blogDirPath = path.join(__dirname, '../content/blog');
const storiesDirPath = path.join(__dirname, '../content/stories');

processDirectory(blogDirPath, 'src/pages/blog/data.json');
processDirectory(storiesDirPath, 'src/pages/stories/data.json');
