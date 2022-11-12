/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const slugify = require('slugify');

const artists = [];
fs.createReadStream(path.resolve(__dirname, 'artists.csv'))
  .pipe(csv.parse({ headers: true }))
  .on('error', (error) => console.error(error))
  .on('data', (row) => {
    const { nick, description, arts, socialMedia } = row;
    if (!nick) return;

    const instagram = socialMedia.match(
      /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/([\w|.|-]+)/,
    );
    const behance = socialMedia.match(
      /(?:(?:http|https):\/\/)?(?:www.)?(?:behance.com|behance.net)\/([\w|.|-]+)/,
    );
    const facebook = socialMedia.match(
      /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-.]*\/)*([\w\-.]*)/,
    );

    artists.push({
      nick,
      fileName: slugify(nick, { lower: true, locale: 'pl' }),
      description,
      arts,
      instagram: instagram ? `https://instagram.com/${instagram[1]}` : '',
      facebook: facebook ? `https://facebook.com/${facebook[3]}` : '',
      behance: behance ? `https://behance.net/${behance[1]}` : '',
    });
  })
  .on('end', () => {
    artists.forEach((artist) => {
      fs.writeFile(
        path.resolve(__dirname, '..', 'cms', 'artists', `${artist.fileName}.md`),
        `---
name: "${artist.nick}"
avatar: 
featured: false
facebook: ${artist.facebook}
instagram: ${artist.instagram}
behance: ${artist.behance}
web:
images:
---
${artist.description}
`,
        (err) => {
          if (err) {
            console.error(err);
          }
          // file written successfully
        },
      );
    });
  });
