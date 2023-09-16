const path = require('path');
const fs = require('fs');

const blogDirPath = path.join(__dirname, '../content/blog');
const storiesDirPath = path.join(__dirname, '../content/stories');
const teamDirPath = path.join(__dirname, '../content/team');

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
    // eslint-disable-next-line no-console
    if (err) console.log(`Failed to list contents of directory: ${err}`);

    let itemList = [];

    files.forEach((file) => {
      let jsonData;
      let item = {};

      fs.readFile(`${directoryPath}/${file}`, 'utf8', (_, contents) => {
        try {
          jsonData = JSON.parse(contents);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Error parsing JSON:', error);
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

const processBlogDirectory = () => {
  fs.readdir(blogDirPath, (err, files) => {
    // eslint-disable-next-line no-console
    if (err) return console.log(`Failed to list contents of directory: ${err}`);

    let blog = [];

    files.forEach(file => {
      let obj = {};
      let item;

      fs.readFile(`${blogDirPath}/${file}`, 'utf8', (_, contents) => {
        const getMetadataIndices = (acc, elem, i) => {
          if (/^---/.test(elem)) acc.push(i);

          return acc;
        };

        const parseMetadata = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1]);

            metadata.forEach(line => {
              obj[line.split(': ')[0]] = line.split(': ')[1];
            });

            return obj;
          }
        };

        const parseContent = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length);
          }

          return lines.join('\n');
        };

        const lines = contents.split('\n');
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        const metadata = parseMetadata({ lines, metadataIndices });
        const content = parseContent({ lines, metadataIndices });
        const publishedDate = formatDate(metadata.date);

        item = {
          heading: metadata.heading,
          date: publishedDate,
          image_large: metadata.image_large,
          image_large_webp: metadata.image_large_webp,
          image_mobile: metadata.image_mobile,
          image_mobile_webp: metadata.image_mobile_webp,
          content,
        };

        blog.push(item);

        if (blog.length === files.length) {
          let data = JSON.stringify(blog);
          fs.writeFileSync('src/pages/blog/data.json', data);
        };
      });
    });
  });

  return;
};

processBlogDirectory();
processDirectory(storiesDirPath, 'src/pages/stories/data.json');
processDirectory(teamDirPath, 'src/pages/home/assets/team.json');
